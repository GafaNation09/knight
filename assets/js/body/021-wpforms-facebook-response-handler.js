/* Role: WPForms AJAX response tracking handler. Source: home.html line 14858 (body). */
window.addEventListener('DOMContentLoaded', function() {
        (function ( $ ) {
            if ( ! $ || typeof document === 'undefined' ) {
                return;
            }
            // WPForms triggers this jQuery event and passes the AJAX response object.
            $( document ).on( 'wpformsAjaxSubmitSuccess', function ( event, data ) {
                if ( data && data.data && data.data.fb_pxl_code ) {
                    try {
                        new Function( data.data.fb_pxl_code )();
                    } catch ( e ) {
                        console && console.warn && console.warn( 'Meta Pixel eval failed', e );
                    }
                }
            } );
        })( window.jQuery );
        });