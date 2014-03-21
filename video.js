$(function(){

    var $videoButton = $('#video-popup');
    var $aboutButton = $('#about-popup');
    var $toolsVideoShield = $('#toolsVideoShield');

    $videoButton.animate({
        opacity: 1.0
    }, 'slow');

    $videoButton.click(function(event) {
        if ($toolsVideoShield.is(":hidden"))
            $toolsVideoShield.show();

        if ($("#toolsVideo iframe").length == 0) {
            var videoURL = $('#video-popup').attr('data-player-url');

            $("#toolsVideo")
                .html('<iframe src="' + videoURL + '?title=0&amp;byline=0&amp;portrait=0&autoplay=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                .append('<div id="popup-close" class="popup-close"></div>');

        }

        event.preventDefault();
    });

    $aboutButton.click(function(event) {
        if ($toolsVideoShield.is(":hidden"))
            $toolsVideoShield.show();

        if ($("#toolsVideo iframe").length == 0) {

            $("#toolsVideo")
                .html('<div class="about-text">360 Video is a new media technology that uses multiple camera lenses to capture different sides of a space simultaneously and stitch the images together to form a seamless environment. At playback, users control where they are looking from a fixed point in a visual sphere, resulting in an unparalleled level of immersion.</div>')
                .append('<div id="popup-close" class="popup-close"></div>');
        }

        event.preventDefault();
    });

    $toolsVideoShield.click(closeShield);
    $('popup-close').click(closeShield);

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { closeShield(); }
    });

    function closeShield() {
        $toolsVideoShield.hide();
        $("#toolsVideo").empty();
    }
});
