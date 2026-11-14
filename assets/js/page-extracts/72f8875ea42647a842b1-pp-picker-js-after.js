
(function ($) {
    "use strict";

    $(function () {

        var $body    = $("body");
        var $root    = $("#pp-picker-root");
        var $trigger = $root.find(".pp-trigger-btn");
        var $menu    = $root.find(".pp-dropdown-menu");
        var $items   = $root.find(".pp-dropdown-item");
        var $infoBox = $root.find(".pp-info-box");
        var $price   = $root.find(".pp-info-price-value");
        var $stock   = $root.find(".pp-info-stock-value");
        var $wrap    = $("#pp-actions-wrap");
        var $form    = $(".variations_form");

        if ( !$trigger.length || !$menu.length || !$form.length ) return;

        /* ── Hide native WC UI ── */
        function hideNativeUI() {
            $form.find("table.variations, table, select[name*='attribute_']")
                .css({ display: "none", visibility: "hidden", height: "0", overflow: "hidden" });
            $form.find(".woocommerce-variation-price, .woocommerce-variation-availability, .reset_variations").hide();
        }
        hideNativeUI();
        setTimeout(hideNativeUI, 100);
        setTimeout(hideNativeUI, 600);

        /* ══════════════════════════════════════════════════════════
         * MUTATIONOBSERVER — the definitive fix.
         *
         * #pp-actions-wrap is empty at page load. WooCommerce injects
         * the Add-to-Cart button into it asynchronously after
         * found_variation fires. MutationObserver fires the instant
         * any child node appears — zero delay, zero polling.
         * ══════════════════════════════════════════════════════════ */
        var wrapObserver = null;

        function unlockWrap() {
            var wrap = $wrap[0];
            if (!wrap) return;

            /*
             * FINAL FIX: inline styles beat every stylesheet rule — even
             * Woodmart's body.pp-variable-product #pp-actions-wrap { display:none }
             * Inline style specificity is above !important in any external sheet.
             */
            wrap.setAttribute("style",
                "display:block!important;height:auto!important;overflow:visible!important;" +
                "position:relative!important;left:auto!important;top:auto!important;" +
                "opacity:1!important;visibility:visible!important;margin-top:14px!important;"
            );

            /* Show every direct child */
            $wrap.children().each(function(){
                if (this.type === "hidden") return;
                this.setAttribute("style",
                    "display:revert!important;visibility:visible!important;opacity:1!important;" +
                    "pointer-events:auto!important;position:relative!important;" +
                    "left:auto!important;top:auto!important;height:auto!important;overflow:visible!important;"
                );
            });

            /* Quantity wrapper */
            $wrap.find(".quantity").each(function(){
                this.setAttribute("style",
                    "display:flex!important;visibility:visible!important;opacity:1!important;" +
                    "pointer-events:auto!important;position:relative!important;" +
                    "left:auto!important;height:auto!important;overflow:visible!important;"
                );
            });

            /* All buttons, links, submit inputs */
            $wrap.find("button, a, input[type='submit']").each(function(){
                this.setAttribute("style",
                    "display:inline-flex!important;visibility:visible!important;opacity:1!important;" +
                    "pointer-events:auto!important;position:relative!important;" +
                    "left:auto!important;top:auto!important;height:auto!important;overflow:visible!important;"
                );
                $(this).prop("disabled", false)
                       .removeClass("disabled wc-variation-selection-needed wc-variation-is-unavailable");
            });
        }

        function watchWrap() {
            var wrap = $wrap[0];
            if (!wrap || wrapObserver) return;

            wrapObserver = new MutationObserver(function(mutations) {
                /* Fire as soon as any child node is added to the wrap */
                var hasChild = mutations.some(function(m){
                    return m.addedNodes.length > 0;
                });
                if (hasChild) {
                    unlockWrap();
                }
            });

            wrapObserver.observe(wrap, { childList: true, subtree: true });
        }

        /* ── Menu open / close ── */
        var isOpen = false;

        function openMenu() {
            if (isOpen) return;
            isOpen = true;
            $trigger.attr("aria-expanded", "true");
            $menu.addClass("pp-open");
        }

        function closeMenu() {
            if (!isOpen) return;
            isOpen = false;
            $trigger.attr("aria-expanded", "false");
            $menu.removeClass("pp-open");
        }

        $trigger.on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            isOpen ? closeMenu() : openMenu();
        });

        /* ── Variant selection ── */
        $items.on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            var $item   = $(this);
            if ($item.hasClass("pp-item-out-of-stock")) return;

            var varId   = $item.data("variation-id");
            var label   = $item.data("variant-label") || "";
            var price   = $item.data("variant-price") || "";
            var inStock = parseInt($item.data("in-stock"), 10) === 1;
            var attrs   = $item.data("attributes") || {};

            if (typeof attrs === "string") {
                try { attrs = JSON.parse(attrs); } catch (err) { attrs = {}; }
            }

            $trigger.find(".pp-trigger-text").text(label);
            $price.html(price);
            $stock.html(
                inStock
                    ? "<span style='color:#28a745;font-weight:700;'>&#10003; In Stock</span>"
                    : "<span style='color:#dc3545;font-weight:700;'>&#10005; Out of Stock</span>"
            );

            $infoBox.addClass("pp-visible");
            $body.addClass("pp-has-selection");

            $items.attr("aria-selected", "false").removeClass("pp-selected");
            $item.attr("aria-selected", "true").addClass("pp-selected");

            /* Push values into native WC selects so found_variation fires */
            $.each(attrs, function (key, val) {
                $form.find("select[name='" + key + "']").val(val).trigger("change");
            });
            $form.find("input[name='variation_id']").val(varId);

            /* Start watching the wrap BEFORE triggering WC events */
            watchWrap();

            $form.trigger("woocommerce_variation_select_change");
            $form.trigger("check_variations");

            closeMenu();

            if (window.innerWidth < 768) {
                setTimeout(function () {
                    $infoBox[0].scrollIntoView({ behavior: "smooth", block: "nearest" });
                }, 350);
            }
        });

        /* ── WC found_variation ── */
        $form.on("found_variation", function (e, variation) {
            $body.addClass("pp-has-selection");
            watchWrap();
            if ($wrap.children().length > 0) {
                unlockWrap();
            }

            /*
             * WooCommerce rewrites the WhatsApp button text to "Add to cart"
             * after found_variation. We use a MutationObserver on the button
             * itself to catch and immediately reverse any text change.
             */
            var $waBtn = $wrap.find(".wa-order-onclick-button, .wa-order-button");
            if ($waBtn.length) {
                $waBtn.each(function () {
                    var btn = this;
                    /* Restore immediately */
                    if ($(btn).text().trim().toLowerCase() === "add to cart") {
                        $(btn).text("Order via WhatsApp");
                    }
                    /* Watch for future rewrites and reverse them */
                    if (btn._waObserver) btn._waObserver.disconnect();
                    btn._waObserver = new MutationObserver(function () {
                        if ($(btn).text().trim().toLowerCase() === "add to cart") {
                            $(btn).text("Order via WhatsApp");
                        }
                    });
                    btn._waObserver.observe(btn, { childList: true, characterData: true, subtree: true });
                    /* Stop observing after 3 seconds — WC is done by then */
                    setTimeout(function () {
                        if (btn._waObserver) btn._waObserver.disconnect();
                    }, 3000);
                });
            }
        });

        /* ── Close on outside click / Escape ── */
        $(document).on("click.pp", function (e) {
            if (isOpen && !$root[0].contains(e.target)) closeMenu();
        });

        $(document).on("keydown.pp", function (e) {
            if (e.key === "Escape" && isOpen) {
                closeMenu();
                $trigger[0].focus();
            }
        });

    });

})(jQuery);
    
//# sourceURL=pp-picker-js-after
