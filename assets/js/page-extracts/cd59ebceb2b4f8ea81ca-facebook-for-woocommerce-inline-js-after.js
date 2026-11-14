
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["9c9abe01-2bed-41e1-aad9-5a61bbbe9150"]) {
window.wcFacebookPixelFiredEvents["9c9abe01-2bed-41e1-aad9-5a61bbbe9150"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "9c9abe01-2bed-41e1-aad9-5a61bbbe9150");
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
    "eventID": "9c9abe01-2bed-41e1-aad9-5a61bbbe9150"
});
}
}
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["5b4efda6-2955-460a-af0c-4b76ddceb446"]) {
window.wcFacebookPixelFiredEvents["5b4efda6-2955-460a-af0c-4b76ddceb446"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "iMac",
    "content_category": "iMac",
    "content_ids": "[\"72371\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "72371",
            "quantity": 1
        }
    }
}, null, 'trackCustom', isStale ? null : "5b4efda6-2955-460a-af0c-4b76ddceb446");
} else if (isStale) {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "iMac",
    "content_category": "iMac",
    "content_ids": "[\"72371\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "72371",
            "quantity": 1
        }
    }
});
} else {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "iMac",
    "content_category": "iMac",
    "content_ids": "[\"72371\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "72371",
            "quantity": 1
        }
    }
}, {
    "eventID": "5b4efda6-2955-460a-af0c-4b76ddceb446"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
