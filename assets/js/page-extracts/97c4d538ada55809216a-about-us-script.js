window.addEventListener('DOMContentLoaded', function() {
        (function () {
            function runPixelCode( response ) {
                if ( ! response || ! response.data || ! response.data.fb_pxl_code ) {
                    return;
                }

                try {
                    new Function( response.data.fb_pxl_code )();
                } catch ( e ) {
                    console && console.warn
                        && console.warn( 'Meta Pixel response parsing failed. Please check if your pixel is connected.', e );
                }
            }

            var radio = window.nfRadio
                || ( window.Backbone && window.Backbone.Radio );
            if ( radio && radio.channel ) {
                radio.channel( 'forms' ).on( 'submit:response', runPixelCode );
            }

            if ( window.jQuery ) {
                window.jQuery( document ).on(
                    'nfFormSubmitResponse',
                    function ( event, data ) {
                        if ( data && data.response ) {
                            runPixelCode( data.response );
                        }
                    }
                );
            }
        })();
        });