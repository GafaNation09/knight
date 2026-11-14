window.addEventListener('DOMContentLoaded', function() {
					function optimocha_getCookie(name) {
						var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
						return v ? v[2] : null;
					}

					function optimocha_check_wc_cart_script() {
					var cart_src = "https://phonesstorekenya.com/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js";
					var script_id = "optimocha_loaded_wc_cart_fragments";

						if( document.getElementById(script_id) !== null ) {
							return false;
						}

						if( optimocha_getCookie("woocommerce_cart_hash") ) {
							var script = document.createElement("script");
							script.id = script_id;
							script.src = cart_src;
							script.async = true;
							document.head.appendChild(script);
						}
					}

					optimocha_check_wc_cart_script();
					document.addEventListener("click", function(){setTimeout(optimocha_check_wc_cart_script,1000);});
					
//# sourceURL=jquery-js-after
});