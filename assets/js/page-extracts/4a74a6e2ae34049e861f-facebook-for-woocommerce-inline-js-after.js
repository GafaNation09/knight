
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["bc857bef-13db-4d25-bb1f-d1dc301eb3fc"]) {
window.wcFacebookPixelFiredEvents["bc857bef-13db-4d25-bb1f-d1dc301eb3fc"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "bc857bef-13db-4d25-bb1f-d1dc301eb3fc");
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
    "eventID": "bc857bef-13db-4d25-bb1f-d1dc301eb3fc"
});
}
}
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["0397e925-7cfd-4a64-a9bd-5032cad40a5a"]) {
window.wcFacebookPixelFiredEvents["0397e925-7cfd-4a64-a9bd-5032cad40a5a"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Tablet Accessories",
    "content_category": "Tablet Accessories",
    "content_ids": "[\"74723\",\"70556\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "74723",
            "quantity": 1
        },
        "1": {
            "id": "70556",
            "quantity": 1
        }
    }
}, null, 'trackCustom', isStale ? null : "0397e925-7cfd-4a64-a9bd-5032cad40a5a");
} else if (isStale) {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Tablet Accessories",
    "content_category": "Tablet Accessories",
    "content_ids": "[\"74723\",\"70556\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "74723",
            "quantity": 1
        },
        "1": {
            "id": "70556",
            "quantity": 1
        }
    }
});
} else {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Tablet Accessories",
    "content_category": "Tablet Accessories",
    "content_ids": "[\"74723\",\"70556\"]",
    "content_type": "product",
    "contents": {
        "0": {
            "id": "74723",
            "quantity": 1
        },
        "1": {
            "id": "70556",
            "quantity": 1
        }
    }
}, {
    "eventID": "0397e925-7cfd-4a64-a9bd-5032cad40a5a"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
