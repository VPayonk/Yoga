	$(document).ready(function(){

    $('header').on("click","a", function (event) {
        event.preventDefault();
        
        var id  = $(this).attr('href'),
        top = $(id).offset().top - 100;
        
        $('body,html').animate({
            scrollTop: top,
            }, 1000);
    });


    // INIT LIGHTBOX

    lightbox.option({
      'albumLabel': '',
      'resizeDuration': 200,
      'wrapAround': true
    })

    // INIT SLICK

    $('.about-slider').slick({
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear'
    });

    
    // OFFER HOVER 

    $('.offer button').hover(
        function(){
            $this = $(this);
            $this.parent().prev().css('background', '#475bf1');
        },
        function(){
            $this = $(this);
            $this.parent().prev().css('background', '');
        }
    )  


    // BLOG

    $('.blog-tabs').slick({
        dots: false,
        speed: 500,
    });

     $('.blog-block').slick({
        arrows: false,
        dots: true,
        vertical: true,
        speed: 500,
    });

    var btn_state = true;
    var $blogBlock = $('.blog-block');
    var $blogTab = $('.blog-tab')
       
    $blogTab.click(function(){
        if(btn_state){
            btn_state = !btn_state;
            
            var i = $blogTab.index(this);
            $blogBlock.removeClass('show').eq(i-1).addClass('show');
         
            setTimeout(function(){
            btn_state = !btn_state;
            },500);
        }
    });

});
