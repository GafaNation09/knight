
wp.apiFetch.use( wp.apiFetch.createRootURLMiddleware( "https://phonesstorekenya.com/wp-json/" ) );
wp.apiFetch.nonceMiddleware = wp.apiFetch.createNonceMiddleware( "32f7c87e67" );
wp.apiFetch.use( wp.apiFetch.nonceMiddleware );
wp.apiFetch.use( wp.apiFetch.mediaUploadMiddleware );
wp.apiFetch.nonceEndpoint = "https://phonesstorekenya.com/wp-admin/admin-ajax.php?action=rest-nonce";
//# sourceURL=wp-api-fetch-js-after
