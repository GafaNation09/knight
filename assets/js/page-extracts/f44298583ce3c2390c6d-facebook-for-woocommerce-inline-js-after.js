
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["7a5724fd-9cfd-4577-aef0-1b221e9c012a"]) {
window.wcFacebookPixelFiredEvents["7a5724fd-9cfd-4577-aef0-1b221e9c012a"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "7a5724fd-9cfd-4577-aef0-1b221e9c012a");
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
    "eventID": "7a5724fd-9cfd-4577-aef0-1b221e9c012a"
});
}
}
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["f8145e75-1e66-4388-9477-2f468363cb6e"]) {
window.wcFacebookPixelFiredEvents["f8145e75-1e66-4388-9477-2f468363cb6e"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Mouse",
    "content_category": "Mouse",
    "content_ids": "[\"50462\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "50462",
            "quantity": 1
        }
    }
}, null, 'trackCustom', isStale ? null : "f8145e75-1e66-4388-9477-2f468363cb6e");
} else if (isStale) {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Mouse",
    "content_category": "Mouse",
    "content_ids": "[\"50462\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "50462",
            "quantity": 1
        }
    }
});
} else {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Mouse",
    "content_category": "Mouse",
    "content_ids": "[\"50462\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "50462",
            "quantity": 1
        }
    }
}, {
    "eventID": "f8145e75-1e66-4388-9477-2f468363cb6e"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
