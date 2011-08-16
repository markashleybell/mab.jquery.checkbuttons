///////////////////////////////////////////////////////////////////////////////////////////
// CheckButtons 1.0
// Version 1.0
// @requires jQuery v1.6.2
// 
// Copyright (c) 2011 Mark Ashley Bell
// Examples and docs at: https://github.com/markashleybell/mab.jquery.checkbuttons
// 
// Dual licensed under the MIT and GPL licenses:
// http://www.opensource.org/licenses/mit-license.php
// http://www.gnu.org/licenses/gpl.html
///////////////////////////////////////////////////////////////////////////////////////////

(function ($) {

    $.fn.checkButtons = function (params) {

        this.find('label').each(function () {

            var label = $(this);
            var checkbox = $('#' + label.attr('for'));
            var offset = label.offset();

            label.prepend('<span></span>');
            label.addClass((checkbox.is(':checked')) ? 'checked' : 'unchecked');

            // Hide the checkbox off screen
            checkbox.css({ position: 'absolute', top: offset.top, left: '-1000px', outline: 'none' });

        }).bind('mouseout', function (event) {

            // We don't need to manually check the checkbox, just let the default
            // behaviour when a label is clicked handle it (for now)
            var label = $(this);
            var checkbox = $('#' + label.attr('for'));

            if (checkbox.is(':checked')) {
                console.log('mouseout: leave in checked state');
                label.removeClass('unchecked').addClass('checked');
            } else {
                console.log('mouseout: leave in unchecked state');
                label.removeClass('checked').addClass('unchecked');
            }

        });
        
        return this;

    };

})(jQuery);