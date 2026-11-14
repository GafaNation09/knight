# Extracted JavaScript files

Populated executable inline JavaScript blocks from `home.html` are split into the files below. Each `<script>` remains at its original insertion point and in its original order, with its ID/type and other attributes retained. WP Rocket delayed blocks use `data-rocket-src` so Rocket still controls execution timing.

JSON-LD, speculation rules, HTML templates, empty script elements, and pre-existing external scripts remain in `home.html` because they are data/templates or already external.

| File | Original location | Script element ID | Type | Role |
|---|---|---|---|---|
| `assets/js/head/001-legacy-ie-browser-redirect.js` | `home.html` line 3 (head) | `(no id)` | `classic JavaScript` | Legacy Internet Explorer/Trident redirect preserving the current URL |
| `assets/js/head/002-wp-rocket-lazyload-engine.js` | `home.html` line 3 (head) | `(no id)` | `classic JavaScript` | WP Rocket script delay, execution, and lazy-load bootstrap |
| `assets/js/head/003-gtm4wp-data-layer-config.js` | `home.html` line 11 (head) | `(no id)` | `classic JavaScript` | Google Tag Manager for WordPress data-layer configuration |
| `assets/js/head/004-jquery-js-after.js` | `home.html` line 113 (head) | `jquery-js-after` | `classic JavaScript` | Initialization for jquery after its dependency |
| `assets/js/head/005-cartbounty-js-extra.js` | `home.html` line 142 (head) | `cartbounty-js-extra` | `classic JavaScript` | JavaScript configuration for cartbounty |
| `assets/js/head/006-woocommerce-js-extra.js` | `home.html` line 149 (head) | `woocommerce-js-extra` | `classic JavaScript` | JavaScript configuration for woocommerce |
| `assets/js/head/007-facebook-signal-js-extra.js` | `home.html` line 154 (head) | `facebook-signal-js-extra` | `classic JavaScript` | JavaScript configuration for facebook-signal |
| `assets/js/head/008-google_gtagjs-js-after.js` | `home.html` line 163 (head) | `google_gtagjs-js-after` | `text/rocketlazyloadscript` | Initialization for google_gtagjs after its dependency |
| `assets/js/head/009-google-analytics-gtag-init.js` | `home.html` line 180 (head) | `(no id)` | `text/rocketlazyloadscript` | Google Analytics gtag initialization |
| `assets/js/head/010-third-party-chat-loader.js` | `home.html` line 187 (head) | `(no id)` | `text/rocketlazyloadscript` | Third-party live-chat widget bootstrap |
| `assets/js/head/011-gtm4wp-page-context-data.js` | `home.html` line 204 (head) | `(no id)` | `classic JavaScript` | Google Tag Manager for WordPress page and ecommerce context data |
| `assets/js/head/012-google-tag-manager-loader.js` | `home.html` line 208 (head) | `(no id)` | `text/rocketlazyloadscript` | Google Tag Manager container loader |
| `assets/js/head/013-facebook-pixel-loader.js` | `home.html` line 219 (head) | `(no id)` | `text/rocketlazyloadscript` | WooCommerce Facebook page-view tracking setup |
| `assets/js/head/014-facebook-signals-init.js` | `home.html` line 227 (head) | `(no id)` | `text/rocketlazyloadscript` | Facebook for WooCommerce Signals initialization |
| `assets/js/head/015-facebook-pageview-event.js` | `home.html` line 227 (head) | `(no id)` | `text/rocketlazyloadscript` | Facebook Pixel page-view event |
| `assets/js/head/016-woocommerce-facebook-pixel-pageview.js` | `home.html` line 229 (head) | `(no id)` | `text/rocketlazyloadscript` | WooCommerce Facebook page-view tracking setup |
| `assets/js/head/017-facebook-signals-client.js` | `home.html` line 238 (head) | `(no id)` | `text/javascript` | Facebook Signals client and event handling |
| `assets/js/head/018-wp-rocket-background-image-map.js` | `home.html` line 542 (head) | `(no id)` | `application/javascript` | WP Rocket background-image preload map |
| `assets/js/body/019-wd-flicker-fix.js` | `home.html` line 545 (body) | `wd-flicker-fix` | `text/rocketlazyloadscript` | WoodMart theme behavior/configuration: wd-flicker-fix |
| `assets/js/body/020-facebook-pixel-response-handler.js` | `home.html` line 14823 (body) | `(no id)` | `text/javascript` | Facebook Pixel response-code handler |
| `assets/js/body/021-wpforms-facebook-response-handler.js` | `home.html` line 14858 (body) | `(no id)` | `text/javascript` | WPForms AJAX response tracking handler |
| `assets/js/body/022-contact-form-7-facebook-tracking.js` | `home.html` line 14890 (body) | `(no id)` | `text/rocketlazyloadscript` | Contact Form 7 successful-send tracking event |
| `assets/js/body/023-wc-no-js.js` | `home.html` line 14909 (body) | `wc-no-js` | `classic JavaScript` | WooCommerce behavior/configuration: wc-no-js |
| `assets/js/body/024-wd-update-cart-fragments-fix-js-extra.js` | `home.html` line 14925 (body) | `wd-update-cart-fragments-fix-js-extra` | `classic JavaScript` | JavaScript configuration for wd-update-cart-fragments-fix |
| `assets/js/body/025-woocommerce-js-js-extra.js` | `home.html` line 14930 (body) | `woocommerce.js-js-extra` | `classic JavaScript` | JavaScript configuration for woocommerce.js |
| `assets/js/body/026-omnisend-front-script-js-js-extra.js` | `home.html` line 14935 (body) | `omnisend-front-script.js-js-extra` | `classic JavaScript` | JavaScript configuration for omnisend-front-script.js |
| `assets/js/body/027-gtm4wp-contact-form-7-tracker-js-before.js` | `home.html` line 14940 (body) | `gtm4wp-contact-form-7-tracker-js-before` | `classic JavaScript` | Initialization for gtm4wp-contact-form-7-tracker before its dependency |
| `assets/js/body/028-gtm4wp-woocommerce-js-before.js` | `home.html` line 14946 (body) | `gtm4wp-woocommerce-js-before` | `classic JavaScript` | Initialization for gtm4wp-woocommerce before its dependency |
| `assets/js/body/029-wc-facebook-signals-js-extra.js` | `home.html` line 14951 (body) | `wc-facebook-signals-js-extra` | `classic JavaScript` | JavaScript configuration for wc-facebook-signals |
| `assets/js/body/030-wp-util-js-extra.js` | `home.html` line 14957 (body) | `wp-util-js-extra` | `classic JavaScript` | JavaScript configuration for wp-util |
| `assets/js/body/031-wp-api-request-js-extra.js` | `home.html` line 14962 (body) | `wp-api-request-js-extra` | `classic JavaScript` | JavaScript configuration for wp-api-request |
| `assets/js/body/032-wp-i18n-js-after.js` | `home.html` line 14969 (body) | `wp-i18n-js-after` | `text/rocketlazyloadscript` | Initialization for wp-i18n after its dependency |
| `assets/js/body/033-wp-api-fetch-js-after.js` | `home.html` line 14976 (body) | `wp-api-fetch-js-after` | `text/rocketlazyloadscript` | Initialization for wp-api-fetch after its dependency |
| `assets/js/body/034-woo-variation-swatches-js-extra.js` | `home.html` line 14985 (body) | `woo-variation-swatches-js-extra` | `classic JavaScript` | JavaScript configuration for woo-variation-swatches |
| `assets/js/body/035-rocket-browser-checker-js-after.js` | `home.html` line 14990 (body) | `rocket-browser-checker-js-after` | `text/rocketlazyloadscript` | Initialization for rocket-browser-checker after its dependency |
| `assets/js/body/036-rocket-preload-links-js-extra.js` | `home.html` line 14994 (body) | `rocket-preload-links-js-extra` | `classic JavaScript` | JavaScript configuration for rocket-preload-links |
| `assets/js/body/037-rocket-preload-links-js-after.js` | `home.html` line 14998 (body) | `rocket-preload-links-js-after` | `text/rocketlazyloadscript` | Initialization for rocket-preload-links after its dependency |
| `assets/js/body/038-rocket_lazyload_css-js-extra.js` | `home.html` line 15005 (body) | `rocket_lazyload_css-js-extra` | `classic JavaScript` | JavaScript configuration for rocket_lazyload_css |
| `assets/js/body/039-rocket_lazyload_css-js-after.js` | `home.html` line 15009 (body) | `rocket_lazyload_css-js-after` | `classic JavaScript` | Initialization for rocket_lazyload_css after its dependency |
| `assets/js/body/040-woobt-frontend-js-extra.js` | `home.html` line 15014 (body) | `woobt-frontend-js-extra` | `classic JavaScript` | JavaScript configuration for woobt-frontend |
| `assets/js/body/041-wooco-frontend-js-extra.js` | `home.html` line 15021 (body) | `wooco-frontend-js-extra` | `classic JavaScript` | JavaScript configuration for wooco-frontend |
| `assets/js/body/042-facebook-capi-param-builder-js-after.js` | `home.html` line 15028 (body) | `facebook-capi-param-builder-js-after` | `text/rocketlazyloadscript` | Initialization for facebook-capi-param-builder after its dependency |
| `assets/js/body/043-jquery-ui-core-js-before.js` | `home.html` line 15048 (body) | `jquery-ui-core-js-before` | `classic JavaScript` | Initialization for jquery-ui-core before its dependency |
| `assets/js/body/044-elementor-frontend-js-before.js` | `home.html` line 15053 (body) | `elementor-frontend-js-before` | `classic JavaScript` | Initialization for elementor-frontend before its dependency |
| `assets/js/body/045-elementor-pro-frontend-js-before.js` | `home.html` line 15060 (body) | `elementor-pro-frontend-js-before` | `classic JavaScript` | Initialization for elementor-pro-frontend before its dependency |
| `assets/js/body/046-woodmart-theme-js-extra.js` | `home.html` line 15067 (body) | `woodmart-theme-js-extra` | `classic JavaScript` | JavaScript configuration for woodmart-theme |
| `assets/js/body/047-facebook-for-woocommerce-inline-js-after.js` | `home.html` line 15074 (body) | `facebook-for-woocommerce-inline-js-after` | `classic JavaScript` | Initialization for facebook-for-woocommerce-inline after its dependency |
| `assets/js/body/048-wc-add-to-cart-variation-js-extra.js` | `home.html` line 15127 (body) | `wc-add-to-cart-variation-js-extra` | `classic JavaScript` | JavaScript configuration for wc-add-to-cart-variation |
| `assets/js/body/049-wc-cart-fragments-js-extra.js` | `home.html` line 15136 (body) | `wc-cart-fragments-js-extra` | `classic JavaScript` | JavaScript configuration for wc-cart-fragments |
| `assets/js/body/050-black-november-countdown.js` | `home.html` line 15140 (body) | `(no id)` | `text/rocketlazyloadscript` | Black November promotional countdown timer |
| `assets/js/body/051-wp-rocket-lazyload-options.js` | `home.html` line 15166 (body) | `(no id)` | `classic JavaScript` | WP Rocket lazy-load options and initialization |
| `assets/js/body/052-youtube-lazy-thumbnail.js` | `home.html` line 15169 (body) | `(no id)` | `classic JavaScript` | YouTube lazy-thumbnail renderer |
| `assets/js/body/053-elementor-preload-hints.js` | `home.html` line 15169 (body) | `(no id)` | `classic JavaScript` | WP Rocket preload hints for Elementor |
