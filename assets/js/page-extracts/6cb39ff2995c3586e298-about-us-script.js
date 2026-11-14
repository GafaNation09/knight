

				window.FacebookSignals = window.FacebookSignals || {
	_held: false,
	_releasing: false,
	_pixelInitialized: false,
	_pixelId: null,
	_pixelUserInfo: {},
	_pixelOptions: {},
	_pendingPixelEvents: [],
	_queue: [],
	_config: {},
	_attribution: {},
	_seenEventIds: {},
	_fbclid: (function() {
		try {
			var m = window.location.search.match(/[?&]fbclid=([^&]*)/);
			return m ? decodeURIComponent(m[1]) : null;
		} catch(e) { return null; }
	})(),

	init: function(config) {
		config = config || {};
		this._config = config;
		this._attribution = config.attribution || {};

		var cookieState = this._getCookie('wc_facebook_signals_state');
		this._held = cookieState ? cookieState === 'held' : !!config.held;

		this._fbclid = this._fbclid || null;

		if (typeof fbq === 'function') {
			fbq('consent', this._held ? 'revoke' : 'grant');
		}

		try {
			var raw = window.sessionStorage.getItem('wc_facebook_signals_seen_event_ids');
			this._seenEventIds = raw ? JSON.parse(raw) : {};
		} catch (e) {
			this._seenEventIds = this._seenEventIds || {};
		}
	},

	initPixel: function(pixelId, userInfo, options) {
		this._pixelId = pixelId;
		this._pixelUserInfo = userInfo && typeof userInfo === 'object' && !Array.isArray(userInfo) ? userInfo : {};
		this._pixelOptions = options || {};
		if (!this._held) {
			this._runPixelInit();
		}
	},

	_runPixelInit: function() {
		if (this._pixelInitialized || !this._pixelId || typeof fbq !== 'function') return;
		fbq('init', this._pixelId, this._pixelUserInfo, this._pixelOptions);
		this._pixelInitialized = true;
		this._flushPendingPixelEvents();
	},

	_flushPendingPixelEvents: function() {
		var pending = this._pendingPixelEvents;
		this._pendingPixelEvents = [];
		for (var i = 0; i < pending.length; i++) {
			var ev = pending[i];
			this._firePixelEvent(ev.name, ev.params, ev.method, ev.eventId);
		}
	},

	_fireOrQueuePixelEvent: function(name, params, method, eventId) {
		if (!this._pixelInitialized) {
			this._pendingPixelEvents.push({
				name: name, params: params || {}, method: method || 'track', eventId: eventId || null
			});
			return;
		}
		this._firePixelEvent(name, params || {}, method || 'track', eventId || null);
	},

	_firePixelEvent: function(name, params, method, eventId) {
		method = method || 'track';
		if (eventId) {
			fbq(method, name, params || {}, { eventID: eventId });
		} else {
			fbq(method, name, params || {});
		}
	},

	queueEvent: function(eventData) {
		if (!eventData || !eventData.event_name) return;

		var originalId = eventData.event_id || null;
		if (originalId && this._seenEventIds[originalId]) return;

		if (!this._held) {
			this._fireOrQueuePixelEvent(eventData.event_name, eventData.custom_data || {}, eventData.method || 'track', originalId);
			return;
		}

		eventData = this._cloneEventData(eventData);
		eventData.event_id = this._generateEventId();
		eventData.event_time = eventData.event_time || Math.floor(Date.now() / 1000);
		this._queue.push(eventData);

		var idToMark = originalId || eventData.event_id;
		if (idToMark) {
			this._seenEventIds[idToMark] = 1;
			try {
				window.sessionStorage.setItem(
					'wc_facebook_signals_seen_event_ids',
					JSON.stringify(this._seenEventIds)
				);
			} catch (e) {}
		}
	},

	trackEvent: function(name, params, userData, method, eventId) {
		method = method || 'track';
		eventId = eventId || (params && params.eventID) || null;

		if (this._held) {
			this.queueEvent({
				event_name: name,
				custom_data: params || {},
				event_id: eventId,
				event_time: Math.floor(Date.now() / 1000),
				method: method
			});
		} else {
			this._fireOrQueuePixelEvent(name, params || {}, method, eventId);
		}
	},

	release: function() {
		var self = this;
		if (!self._held || self._releasing || !self._config.ajaxUrl) {
			return Promise.resolve({ success: true, data: { sent_count: 0 } });
		}

		self._releasing = true;
		var attribution = self._collectAttribution();

		var payload = JSON.stringify({
			events: self._queue,
			attribution: {
				fbp: attribution.fbp || null,
				fbc: attribution.fbc || null
			},
			fbclid: self._fbclid || null
		});

		var url = self._config.ajaxUrl +
			(self._config.ajaxUrl.indexOf('?') === -1 ? '?' : '&') +
			'action=' + encodeURIComponent(self._config.action);

		return new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('POST', url, true);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onload = function() {
				if (xhr.status >= 200 && xhr.status < 300) {
					try {
						var resp = JSON.parse(xhr.responseText);
						self._handleReleaseResponse(resp.data || {}, attribution);
						resolve(resp);
					} catch(e) { self._releasing = false; reject(e); }
				} else {
					self._releasing = false;
					reject(new Error('Signal release AJAX failed: ' + xhr.status));
				}
			};
			xhr.onerror = function() { self._releasing = false; reject(new Error('Network error')); };
			xhr.send(payload);
		});
	},

	_handleReleaseResponse: function(data, attribution) {
		this._syncAttributionCookies(data || {}, attribution);

		// Override cached user_info with fresh data from the release response.
		if (data.user_info && typeof data.user_info === 'object' && !Array.isArray(data.user_info)) {
			this._pixelUserInfo = data.user_info;
		}

		this._held = false;
		this._releasing = false;

		fbq('consent', 'grant');
		this._runPixelInit();

		var queue = this._queue;
		for (var i = 0; i < queue.length; i++) {
			var ev = queue[i];
			this._fireOrQueuePixelEvent(ev.event_name, ev.custom_data || {}, ev.method || 'track', ev.event_id || null);
		}

		this._queue = [];
	},

	_collectAttribution: function() {
		var clientParams = {};
		if (typeof clientParamBuilder !== 'undefined') {
			try {
				clientParams = clientParamBuilder.processAndCollectParams(this._getAttributionUrl()) || {};
			} catch (e) {}
		}

		var fbp = this._getCookie('_fbp') || clientParams._fbp || (typeof clientParamBuilder !== 'undefined' ? clientParamBuilder.getFbp() : null);
		var fbc = this._getCookie('_fbc') || clientParams._fbc || (typeof clientParamBuilder !== 'undefined' ? clientParamBuilder.getFbc() : null);

		if (!fbc && this._fbclid) {
			fbc = 'fb.1.' + Date.now() + '.' + this._fbclid;
		}

		return { fbp: fbp || null, fbc: fbc || null };
	},

	_syncAttributionCookies: function(data, attribution) {
		var fbp = data.fbp || (attribution && attribution.fbp) || null;
		var fbc = data.fbc || (attribution && attribution.fbc) || null;

		if (fbp) {
			this._setAttributionCookie('_fbp', fbp, data.fbp_domain || null);
		}
		if (fbc) {
			this._setAttributionCookie('_fbc', fbc, data.fbc_domain || null);
		}
	},

	_setAttributionCookie: function(name, value, domain) {
		if (!value) return;
		var domainAttr = domain ? ';domain=' + domain : '';
		document.cookie = name + '=' + encodeURIComponent(value) + ';path=/;max-age=7776000' + domainAttr + ';SameSite=Lax';
	},

	_getCookie: function(name) {
		var match = document.cookie.match(new RegExp('(?:^|;\\s*)' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)'));
		if (!match) return null;
		try { return decodeURIComponent(match[1]); } catch(e) { return null; }
	},

	_cloneEventData: function(eventData) {
		var clone = {};
		for (var key in eventData) {
			if (Object.prototype.hasOwnProperty.call(eventData, key)) {
				clone[key] = eventData[key];
			}
		}
		return clone;
	},

	_generateEventId: function() {
		if (window.crypto && typeof window.crypto.randomUUID === 'function') {
			return window.crypto.randomUUID();
		}
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0;
			return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
	},

	_getAttributionUrl: function() {
		if (!this._fbclid) return window.location.href;
		try {
			var url = new URL(window.location.href);
			if (!url.searchParams.get('fbclid')) {
				url.searchParams.set('fbclid', this._fbclid);
			}
			return url.toString();
		} catch (e) {
			return window.location.href;
		}
	}
};
				FacebookSignals.init({
					held: false,
					ajaxUrl: "https:\/\/phonesstorekenya.com\/wp-admin\/admin-ajax.php",
					action: 'facebook_release_signals',
					pixelId: "270221090948026",
					attribution: {}
				});
				FacebookSignals.initPixel(
					"270221090948026",
					{},
					{"agent":"woocommerce_0-11.3.0-3.7.8"}				);

				document.addEventListener( 'DOMContentLoaded', function() {
					document.body.insertAdjacentHTML( 'beforeend', '<div class=\"wc-facebook-pixel-event-placeholder\"></div>' );
				}, false );

			