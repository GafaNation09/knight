
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["51bbb32c-5900-46a8-a588-15b2d45e4031"]) {
window.wcFacebookPixelFiredEvents["51bbb32c-5900-46a8-a588-15b2d45e4031"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "51bbb32c-5900-46a8-a588-15b2d45e4031");
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
    "eventID": "51bbb32c-5900-46a8-a588-15b2d45e4031"
});
}
}
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["28c25041-38df-4abe-a03b-32e9af379823"]) {
window.wcFacebookPixelFiredEvents["28c25041-38df-4abe-a03b-32e9af379823"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Smart Tags",
    "content_category": "Smart Tags",
    "content_ids": "[\"39976\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "39976",
            "quantity": 1
        }
    }
}, null, 'trackCustom', isStale ? null : "28c25041-38df-4abe-a03b-32e9af379823");
} else if (isStale) {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Smart Tags",
    "content_category": "Smart Tags",
    "content_ids": "[\"39976\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "39976",
            "quantity": 1
        }
    }
});
} else {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Smart Tags",
    "content_category": "Smart Tags",
    "content_ids": "[\"39976\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "39976",
            "quantity": 1
        }
    }
}, {
    "eventID": "28c25041-38df-4abe-a03b-32e9af379823"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
