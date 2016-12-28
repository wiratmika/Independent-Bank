'use strict';

$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $('.currency').maskMoney({
        'prefix': 'Rp ',
        'precision': '0',
        'thousands': '.'
    });

    $('.cc').payment('formatCardNumber');

    $('#table-trigger').click(function() {
        $('#table-triggered').fadeIn();
    });

    $('input[name=\'transfer-type\']').change(function(){
        var selected = '.' + $(this).val() + '-options';
        console.log($(selected));
        $('.transfer-options').hide()
        $(selected).show();
    });

    $('input[name=\'receiver\']').change(function(){
        var selected = '.' + $(this).val() + '-options';
        console.log($(selected));
        $('.receiver-options').hide()
        $(selected).show();
    });
});
