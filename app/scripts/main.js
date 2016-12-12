'use strict';

$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $('#table-trigger').click(function() {
        $('#table-triggered').fadeIn();
    })
});
