
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["5c332ff6-061c-4aa5-9556-f5ba41f0cee6"]) {
window.wcFacebookPixelFiredEvents["5c332ff6-061c-4aa5-9556-f5ba41f0cee6"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "5c332ff6-061c-4aa5-9556-f5ba41f0cee6");
} else if (isStale) {
	fbq('track', 'PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
});
} else {
	fbq('track', 'PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, {
    "eventID": "5c332ff6-061c-4aa5-9556-f5ba41f0cee6"
});
}
}
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["80244fa2-e907-404d-979a-1358e828148a"]) {
window.wcFacebookPixelFiredEvents["80244fa2-e907-404d-979a-1358e828148a"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Poco Tablets",
    "content_category": "Poco Tablets",
    "content_ids": "[\"61209\",\"61207\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "61209",
            "quantity": 1
        },
        "1": {
            "id": "61207",
            "quantity": 1
        }
    }
}, null, 'trackCustom', isStale ? null : "80244fa2-e907-404d-979a-1358e828148a");
} else if (isStale) {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Poco Tablets",
    "content_category": "Poco Tablets",
    "content_ids": "[\"61209\",\"61207\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "61209",
            "quantity": 1
        },
        "1": {
            "id": "61207",
            "quantity": 1
        }
    }
});
} else {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Poco Tablets",
    "content_category": "Poco Tablets",
    "content_ids": "[\"61209\",\"61207\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "61209",
            "quantity": 1
        },
        "1": {
            "id": "61207",
            "quantity": 1
        }
    }
}, {
    "eventID": "80244fa2-e907-404d-979a-1358e828148a"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
