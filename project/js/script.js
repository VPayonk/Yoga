	$(document).ready(function(){

    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
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
