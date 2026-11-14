
    (function() {
        var HIDE_CSS = 'display:none!important;visibility:hidden!important;height:0!important;overflow:hidden!important;opacity:0!important;position:absolute!important;left:-9999px!important;top:-9999px!important;';
        /* NEVER include #pp-actions-wrap here — the MutationObserver handles it */
        var SELECTORS = [
            '.variations_form table',
            '.variations_form table.variations',
            '.variations_form select',
            '.woocommerce-variation-price',
            '.woocommerce-variation-availability',
            '.reset_variations'
        ];
        function nuke() {
            var hasSelection = document.body && document.body.classList.contains('pp-has-selection');
            SELECTORS.forEach(function(s) {
                document.querySelectorAll(s).forEach(function(el) {
                    if (el.closest && el.closest('#pp-picker-root')) return;
                    el.style.cssText = HIDE_CSS;
                });
            });
            /* Hide wrap only when no selection has been made yet */
            if (!hasSelection) {
                var wrap = document.getElementById('pp-actions-wrap');
                if (wrap) wrap.setAttribute('style', HIDE_CSS);
            }
            if (!hasSelection) {
                document.querySelectorAll('.price').forEach(function(el) {
                    el.style.cssText = 'visibility:hidden!important;opacity:0!important;position:absolute!important;left:-9999px!important;height:0!important;pointer-events:none!important;';
                });
            }
        }
        nuke();
        document.addEventListener('DOMContentLoaded', nuke);
        setTimeout(nuke, 300);
        setTimeout(nuke, 800);
        setTimeout(nuke, 1500);
    })();
    