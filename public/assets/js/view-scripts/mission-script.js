(function(){
    $(window).on('load', function(){
        var pswpElement = document.querySelectorAll('.pswp')[0];
        
        // build items array
        var items = [];

        var images = $('.mission-image');
        for(var i = 0; i < images.length; i++){
            // setting default image scale height and width for now
            items.push({
                src: $(images[i]).attr('src'),
                w: 1200,
                h: 900
            });
        }

        
        $(".mission-image").on('click', function(){
            var imageIndex = $(this).attr('data-index');
            console.log(imageIndex + ' clicked');
            
            var options = {
                index: parseInt(imageIndex, 10),
                counterEl: false
            };
    
            // Initializes and opens PhotoSwipe
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
            
            gallery.listen('close', function() { 
                $('#navPanelToggle').fadeIn();
            });

            gallery.listen('initialZoomInEnd', function() {
                $('#navPanelToggle').fadeOut();
            });

        });
    });
})();