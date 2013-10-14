var timer;
var autoSliderTime = 5000;

var nextImg = function(){
    var oldElem = $('.active').removeClass('active');

    if ( oldElem.is(':last-child')) {
        $('.sp').first().addClass('active');
    }
    else {
        oldElem.next().addClass('active');
    }

    oldElem.fadeOut();
    $('.active').fadeIn();

    clearInterval(timer);
    timer = setInterval(nextImg, autoSliderTime);
};

$(document).ready(function() {
    $('.sp').first().addClass('active');
    $('.sp').hide();    
    $('.active').show();

    timer = setInterval(nextImg, autoSliderTime);

    $('button#next').click(nextImg);

    $('button#previous').click(function() {
        var oldElem = $('.active').removeClass('active');    
        if ( oldElem.is(':first-child')) {
            $('.sp').last().addClass('active');
        }
        else {
            oldElem.prev().addClass('active');
        }
        oldElem.fadeOut();
        $('.active').fadeIn();

        clearInterval(timer);
        timer = setInterval(nextImg, autoSliderTime);
    });
});