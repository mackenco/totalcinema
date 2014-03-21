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
                .append('<div id="video-popup-close" class="video-popup-close"></div>');

        }

        event.preventDefault();
    });

    $toolsVideoShield.click(closeShield);
    $('video-popup-close').click(closeShield);

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { closeShield(); }
    });

    function closeShield() {
        $toolsVideoShield.hide();
        $("#toolsVideo").empty();
    }
});
