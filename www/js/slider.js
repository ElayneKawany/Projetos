$('.slider > img:gt(0)').hide();

setInterval(function() {
    $('.slider > img:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.slider');
}, 3000);