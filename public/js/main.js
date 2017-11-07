// mobile nav toggle

$('.mobNavBtn').click(function() {
    $('.mobNav').slideToggle('fast');
});

// mobile Nav close

$('.mobNav').click(function() {
    $('.mobNav').slideUp('fast');
});

$('.aboutBtn').click(function() {
    $('html, body').animate(
        {
            scrollTop: $('.aboutContainer').offset().top
        },
        500
    );
});
$('.myWorkBtn').click(function() {
    $('html, body').animate(
        {
            scrollTop: $('.previousWorkContainer').offset().top
        },
        500
    );
});
$('.letsWorkBtn').click(function() {
    $('html, body').animate(
        {
            scrollTop: $('.contactFormContainer').offset().top
        },
        500
    );
});
