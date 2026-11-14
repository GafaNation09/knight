
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["31d1b27a-835b-4333-93ff-248e4712b0ff"]) {
window.wcFacebookPixelFiredEvents["31d1b27a-835b-4333-93ff-248e4712b0ff"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "31d1b27a-835b-4333-93ff-248e4712b0ff");
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
    "eventID": "31d1b27a-835b-4333-93ff-248e4712b0ff"
});
}
}
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["75d0a213-3d02-4b47-8ab7-6e742ac44aa8"]) {
window.wcFacebookPixelFiredEvents["75d0a213-3d02-4b47-8ab7-6e742ac44aa8"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Portable SSD",
    "content_category": "Portable SSD",
    "content_ids": "[\"73184\",\"73177\",\"68079\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "73184",
            "quantity": 1
        },
        "1": {
            "id": "73177",
            "quantity": 1
        },
        "2": {
            "id": "68079",
            "quantity": 1
        }
    }
}, null, 'trackCustom', isStale ? null : "75d0a213-3d02-4b47-8ab7-6e742ac44aa8");
} else if (isStale) {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Portable SSD",
    "content_category": "Portable SSD",
    "content_ids": "[\"73184\",\"73177\",\"68079\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "73184",
            "quantity": 1
        },
        "1": {
            "id": "73177",
            "quantity": 1
        },
        "2": {
            "id": "68079",
            "quantity": 1
        }
    }
});
} else {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Portable SSD",
    "content_category": "Portable SSD",
    "content_ids": "[\"73184\",\"73177\",\"68079\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "73184",
            "quantity": 1
        },
        "1": {
            "id": "73177",
            "quantity": 1
        },
        "2": {
            "id": "68079",
            "quantity": 1
        }
    }
}, {
    "eventID": "75d0a213-3d02-4b47-8ab7-6e742ac44aa8"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
