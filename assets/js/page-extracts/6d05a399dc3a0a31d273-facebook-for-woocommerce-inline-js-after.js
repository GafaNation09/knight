
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["f5f1c665-4d10-4bbc-961d-22e6d5a4ac8e"]) {
window.wcFacebookPixelFiredEvents["f5f1c665-4d10-4bbc-961d-22e6d5a4ac8e"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "f5f1c665-4d10-4bbc-961d-22e6d5a4ac8e");
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
    "eventID": "f5f1c665-4d10-4bbc-961d-22e6d5a4ac8e"
});
}
}
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["66e2df91-e905-4356-b54c-a93cc46f8c5d"]) {
window.wcFacebookPixelFiredEvents["66e2df91-e905-4356-b54c-a93cc46f8c5d"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Smart Ring",
    "content_category": "Smart Ring",
    "content_ids": "[\"58278\",\"50196\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "58278",
            "quantity": 1
        },
        "1": {
            "id": "50196",
            "quantity": 1
        }
    }
}, null, 'trackCustom', isStale ? null : "66e2df91-e905-4356-b54c-a93cc46f8c5d");
} else if (isStale) {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Smart Ring",
    "content_category": "Smart Ring",
    "content_ids": "[\"58278\",\"50196\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "58278",
            "quantity": 1
        },
        "1": {
            "id": "50196",
            "quantity": 1
        }
    }
});
} else {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Smart Ring",
    "content_category": "Smart Ring",
    "content_ids": "[\"58278\",\"50196\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "58278",
            "quantity": 1
        },
        "1": {
            "id": "50196",
            "quantity": 1
        }
    }
}, {
    "eventID": "66e2df91-e905-4356-b54c-a93cc46f8c5d"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
