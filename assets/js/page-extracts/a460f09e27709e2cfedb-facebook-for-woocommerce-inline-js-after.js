
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["ae69b88c-c4e0-48db-9057-25e36863464d"]) {
window.wcFacebookPixelFiredEvents["ae69b88c-c4e0-48db-9057-25e36863464d"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "ae69b88c-c4e0-48db-9057-25e36863464d");
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
    "eventID": "ae69b88c-c4e0-48db-9057-25e36863464d"
});
}
}
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["88f08b4b-475a-423d-85e0-a9fab6176e09"]) {
window.wcFacebookPixelFiredEvents["88f08b4b-475a-423d-85e0-a9fab6176e09"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "X-TIGI Tablets",
    "content_category": "X-TIGI Tablets",
    "content_ids": "[\"48028\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "48028",
            "quantity": 1
        }
    }
}, null, 'trackCustom', isStale ? null : "88f08b4b-475a-423d-85e0-a9fab6176e09");
} else if (isStale) {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "X-TIGI Tablets",
    "content_category": "X-TIGI Tablets",
    "content_ids": "[\"48028\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "48028",
            "quantity": 1
        }
    }
});
} else {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "X-TIGI Tablets",
    "content_category": "X-TIGI Tablets",
    "content_ids": "[\"48028\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "48028",
            "quantity": 1
        }
    }
}, {
    "eventID": "88f08b4b-475a-423d-85e0-a9fab6176e09"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
