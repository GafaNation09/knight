/* Role: Contact Form 7 successful-send tracking event. Source: home.html line 14890 (body). */

        document.addEventListener( 'wpcf7mailsent', function( event ) {
        if( "fb_pxl_code" in event.detail.apiResponse){
            eval(event.detail.apiResponse.fb_pxl_code);
        }
        }, false );
    