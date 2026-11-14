
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["3af3f11a-9730-4a47-949c-bbd951e6881b"]) {
window.wcFacebookPixelFiredEvents["3af3f11a-9730-4a47-949c-bbd951e6881b"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "3af3f11a-9730-4a47-949c-bbd951e6881b");
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
    "eventID": "3af3f11a-9730-4a47-949c-bbd951e6881b"
});
}
}
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["7c8ff78c-8e0e-47f5-81a8-316d0f0d7073"]) {
window.wcFacebookPixelFiredEvents["7c8ff78c-8e0e-47f5-81a8-316d0f0d7073"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Simulators",
    "content_category": "Simulators",
    "content_ids": "[\"78190\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "78190",
            "quantity": 1
        }
    }
}, null, 'trackCustom', isStale ? null : "7c8ff78c-8e0e-47f5-81a8-316d0f0d7073");
} else if (isStale) {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Simulators",
    "content_category": "Simulators",
    "content_ids": "[\"78190\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "78190",
            "quantity": 1
        }
    }
});
} else {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Simulators",
    "content_category": "Simulators",
    "content_ids": "[\"78190\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "78190",
            "quantity": 1
        }
    }
}, {
    "eventID": "7c8ff78c-8e0e-47f5-81a8-316d0f0d7073"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
