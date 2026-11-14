
			document.addEventListener( 'wpcf7submit', function ( event ) {
				var detail = event.detail || {};
				if ( 'mail_sent' !== detail.status ) {
					return;
				}
				var apiResponse = detail.apiResponse || {};
				if ( ! apiResponse.fb_pxl_code ) {
					return;
				}
				try {
					var s = document.createElement( 'script' );
					s.textContent = apiResponse.fb_pxl_code;
					document.head.appendChild( s );
				} catch ( e ) {
					// no-op
				}
			}, false );
			