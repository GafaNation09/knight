
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["69a70c94-e0ed-410b-b9bf-f0ba3b400d43"]) {
window.wcFacebookPixelFiredEvents["69a70c94-e0ed-410b-b9bf-f0ba3b400d43"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "69a70c94-e0ed-410b-b9bf-f0ba3b400d43");
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
    "eventID": "69a70c94-e0ed-410b-b9bf-f0ba3b400d43"
});
}
}
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["bffaf085-8f74-4f59-a2c5-5e6fcbac3f0d"]) {
window.wcFacebookPixelFiredEvents["bffaf085-8f74-4f59-a2c5-5e6fcbac3f0d"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "VR",
    "content_category": "VR",
    "content_ids": "[\"48784\",\"50129\",\"40756\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "48784",
            "quantity": 1
        },
        "1": {
            "id": "50129",
            "quantity": 1
        },
        "2": {
            "id": "40756",
            "quantity": 1
        }
    }
}, null, 'trackCustom', isStale ? null : "bffaf085-8f74-4f59-a2c5-5e6fcbac3f0d");
} else if (isStale) {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "VR",
    "content_category": "VR",
    "content_ids": "[\"48784\",\"50129\",\"40756\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "48784",
            "quantity": 1
        },
        "1": {
            "id": "50129",
            "quantity": 1
        },
        "2": {
            "id": "40756",
            "quantity": 1
        }
    }
});
} else {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "VR",
    "content_category": "VR",
    "content_ids": "[\"48784\",\"50129\",\"40756\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "48784",
            "quantity": 1
        },
        "1": {
            "id": "50129",
            "quantity": 1
        },
        "2": {
            "id": "40756",
            "quantity": 1
        }
    }
}, {
    "eventID": "bffaf085-8f74-4f59-a2c5-5e6fcbac3f0d"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
