
    jQuery(function($) {
        var $btn = $('.wd-buy-now-btn');
        var originalText = $btn.text().trim();

        $('form.variations_form')
            .on('found_variation', function(event, variation) {
                $('.wd-buy-now-btn').text(variation.is_ywpo_preorder ? 'Pre-Order Now' : originalText);
            })
            .on('reset_data', function() {
                $('.wd-buy-now-btn').text(originalText);
            });

        // Also handle simple (non-variable) preorder products on page load
        $('.wd-buy-now-btn').text('Pre-Order Now');    });
    