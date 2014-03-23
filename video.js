$(function(){

    var $videoButton = $('#video-popup');
    var $aboutButton = $('#about-popup');
    var $toolsVideoShield = $('#toolsVideoShield');
    var $toolsVideo = $("#toolsVideo");
    var tabClicked = false;

    var htmlBlob = getHtmlBlob();

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
                .html(htmlBlob)
                .append('<div id="popup-close" class="popup-close"></div>');
        }

        event.preventDefault();
    });

    $toolsVideo.click(doNothing);
    $toolsVideoShield.click(closeShield);
    $('.popup-close').click(closeShield);

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { closeShield();}
    });

    function doNothing(event) {
        var target = $(event.target);
        if (target[0].id != "popup-close") {
            tabClicked = true;
        }
    }

    function closeShield() {
        if (!tabClicked) {
            $toolsVideoShield.hide();
            $("#toolsVideo").empty();
        }
        tabClicked = false;
    }
});
