document.observe('dom:loaded', function(){
    if($$('div.more-views').first() != undefined) {
        $$('div.more-views').first().observe('click', function (e) {
            var clickedThumb = e.findElement('.thumb-link');
            if (clickedThumb) {
                stopVideo();
                $$('.zoomContainer').invoke('show');
                $$('.productvideos-gallery').invoke('show').invoke('removeClassName', 'productvideos-hidden');
                $$('.productvideos-player').invoke('hide');
            }
            var clickedThumbV = e.findElement('.thumb-link-pv');
            if (clickedThumbV) {
                e.stop();
                stopVideo();
                $$('.zoomContainer').invoke('hide');
                var videoId = clickedThumbV.readAttribute('data-video-index');
                $$('.productvideos-gallery, .productvideos-player').invoke('hide').invoke('removeClassName', 'productvideos-hidden');
                $$('.productvideos-player-'+videoId).invoke('show');
                var url = $$('.productvideos-player-'+videoId+' > iframe')[0].src;
                $$('.productvideos-player-'+videoId+' > iframe')[0].src = url+"&autoplay=1";
            }
        });
    };
});

stopVideo = function() {
    $$('.productvideos-player iframe').each(function(i) {
        var url = i.src;
        i.src = '';
        i.src = url.replace("&autoplay=1", "");
    });
}
