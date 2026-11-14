
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["5bdd20f6-8260-4099-8d74-7d2266ea6a95"]) {
window.wcFacebookPixelFiredEvents["5bdd20f6-8260-4099-8d74-7d2266ea6a95"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "5bdd20f6-8260-4099-8d74-7d2266ea6a95");
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
    "eventID": "5bdd20f6-8260-4099-8d74-7d2266ea6a95"
});
}
}
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["95c128ec-ce77-4126-be77-92ff2173999e"]) {
window.wcFacebookPixelFiredEvents["95c128ec-ce77-4126-be77-92ff2173999e"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Ring Light",
    "content_category": "Ring Light",
    "content_ids": "[\"74732\",\"51991\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "74732",
            "quantity": 1
        },
        "1": {
            "id": "51991",
            "quantity": 1
        }
    }
}, null, 'trackCustom', isStale ? null : "95c128ec-ce77-4126-be77-92ff2173999e");
} else if (isStale) {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Ring Light",
    "content_category": "Ring Light",
    "content_ids": "[\"74732\",\"51991\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "74732",
            "quantity": 1
        },
        "1": {
            "id": "51991",
            "quantity": 1
        }
    }
});
} else {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Ring Light",
    "content_category": "Ring Light",
    "content_ids": "[\"74732\",\"51991\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "74732",
            "quantity": 1
        },
        "1": {
            "id": "51991",
            "quantity": 1
        }
    }
}, {
    "eventID": "95c128ec-ce77-4126-be77-92ff2173999e"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
