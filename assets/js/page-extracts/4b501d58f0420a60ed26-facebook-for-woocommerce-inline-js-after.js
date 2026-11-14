
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["8851ce0d-d115-4fb6-ba2c-126e8cbb58c2"]) {
window.wcFacebookPixelFiredEvents["8851ce0d-d115-4fb6-ba2c-126e8cbb58c2"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "8851ce0d-d115-4fb6-ba2c-126e8cbb58c2");
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
    "eventID": "8851ce0d-d115-4fb6-ba2c-126e8cbb58c2"
});
}
}
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["ea47ff50-8573-4c7e-a96a-0c382280490f"]) {
window.wcFacebookPixelFiredEvents["ea47ff50-8573-4c7e-a96a-0c382280490f"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Asus",
    "content_category": "Asus",
    "content_ids": "[\"51201\",\"51191\",\"51184\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "51201",
            "quantity": 1
        },
        "1": {
            "id": "51191",
            "quantity": 1
        },
        "2": {
            "id": "51184",
            "quantity": 1
        }
    }
}, null, 'trackCustom', isStale ? null : "ea47ff50-8573-4c7e-a96a-0c382280490f");
} else if (isStale) {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Asus",
    "content_category": "Asus",
    "content_ids": "[\"51201\",\"51191\",\"51184\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "51201",
            "quantity": 1
        },
        "1": {
            "id": "51191",
            "quantity": 1
        },
        "2": {
            "id": "51184",
            "quantity": 1
        }
    }
});
} else {
	fbq('trackCustom', 'ViewCategory', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8",
    "content_name": "Asus",
    "content_category": "Asus",
    "content_ids": "[\"51201\",\"51191\",\"51184\"]",
    "content_type": "product_group",
    "contents": {
        "0": {
            "id": "51201",
            "quantity": 1
        },
        "1": {
            "id": "51191",
            "quantity": 1
        },
        "2": {
            "id": "51184",
            "quantity": 1
        }
    }
}, {
    "eventID": "ea47ff50-8573-4c7e-a96a-0c382280490f"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
