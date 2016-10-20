$(document).ready(function() {

    var mouseDown = 0;
    document.body.onmousedown = function() {
        ++mouseDown;
    }
    document.body.onmouseup = function() {
        --mouseDown;
    }

    var colors = 'red green blue yellow white';

	var color = 'white';

	$('#red').on('click', function() {
        color = 'red';
    })

    $('#green').on('click', function() {
        color = 'green';
    })

    $('#blue').on('click', function() {
        color = 'blue';
    })

    $('#yellow').on('click', function() {
        color = 'yellow';
    })

    $('#white').on('click', function() {
        color = 'white';
    })

    $('.box').on('click', function() {
        $(this).addClass(color);
    })

    $('.box').on('dblclick', function() {
        $(this).removeClass(colors);
    })

    $('.box').on('mouseenter', function() {
        if (mouseDown) {
            $(this).addClass(color);
        }
    })

    $('#reset').on('click', function() {
        $('.box').removeClass(colors);
    })

})