$(function(){
    var curSkin = 'borderlessdark3d';

    $(document).ready(function() {
        if (typeof $.fn.layerSlider == "undefined") {
            lsShowNotice('layerslider_22', 'jquery');
        } else {
            $("#layerslider_22").layerSlider({
                startInViewport: false,
                pauseOnHover: false,
                skin: 'borderlessdark3d',
                globalBGColor: 'transparent',
                hoverBottomNav: true,
                lazyLoad: false,
                yourLogoStyle: 'left: 10px; top: 10px;',
                cbInit: function(element) {},
                cbStart: function(data) {},
                cbStop: function(data) {},
                cbPause: function(data) {},
                cbAnimStart: function(data) {},
                cbAnimStop: function(data) {},
                cbPrev: function(data) {},
                cbNext: function(data) {},
                skinsPath: 'assets/theme/',
                thumbnailNavigation: 'hover'
            })
        }
    });
});