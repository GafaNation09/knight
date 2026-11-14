
(function() {
					var processParams = function() {
						if (typeof clientParamBuilder !== "undefined" && !/(?:^|;\s*)wc_facebook_signals_state=held(?:;|$)/.test(document.cookie)) {
							clientParamBuilder.processAndCollectAllParams(window.location.href);
						}
					};
					if (typeof clientParamBuilder !== "undefined") {
						processParams();
						return;
					}
					var fallbackScript = document.createElement("script");
					fallbackScript.src = "https:\/\/unpkg.com\/meta-capi-param-builder-clientjs@1.3.2\/dist\/clientParamBuilder.bundle.js";
					fallbackScript.onload = processParams;
					document.head.appendChild(fallbackScript);
				}());
//# sourceURL=facebook-capi-param-builder-js-after
