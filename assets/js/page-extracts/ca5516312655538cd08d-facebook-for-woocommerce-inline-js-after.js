
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', (function(){var a='woocommerce_0-11.3.0-3.7.8';if(window.__wc_fb_page_generated&&(Math.floor(Date.now()/1000)-window.__wc_fb_page_generated)>1800){a=a.replace(/(\d+\.\d+\.\d+)/,'$1_c');}return a;})(), '270221090948026');
window.wcFacebookPixelFiredEvents = window.wcFacebookPixelFiredEvents || {};
if (!window.wcFacebookPixelFiredEvents["87383585-8ca9-4f81-bd75-fc68bad205d4"]) {
window.wcFacebookPixelFiredEvents["87383585-8ca9-4f81-bd75-fc68bad205d4"] = true;
var isStale = window.__wc_fb_page_generated && (Math.floor(Date.now()/1000) - window.__wc_fb_page_generated) > 1800;
if (window.FacebookSignals && typeof window.FacebookSignals.trackEvent === 'function') {
	window.FacebookSignals.trackEvent('PageView', {
    "source": "woocommerce_0",
    "version": "11.3.0",
    "pluginVersion": "3.7.8"
}, null, 'track', isStale ? null : "87383585-8ca9-4f81-bd75-fc68bad205d4");
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
    "eventID": "87383585-8ca9-4f81-bd75-fc68bad205d4"
});
}
}
//# sourceURL=facebook-for-woocommerce-inline-js-after
