	$(document).ready(function(){

    $('header').on("click","a", function (event) {
        event.preventDefault();
        
        var id  = $(this).attr('href'),
        top = $(id).offset().top - 100;
        
        $('body,html').animate({
            scrollTop: top,
            }, 1000);
    });


    // VALIDATION

    $('form').each(function(){
        
        var form = $(this),
            btn = form.find('button');
        form.find('.valid').addClass('empty_field');

        function checkInput(){
            form.find('.valid').each(function(){
                if($(this).val() != ''){
                    $(this).removeClass('empty_field');
                } else {
                    $(this).addClass('empty_field');
                }
            });
            form.find('select').each(function(){
                if($(this).val() != null){
                    $(this).removeClass('empty_field');
                } else {
                    $(this).addClass('empty_field');
                }
            });
        }

        function lightEmpty(){
            form.find('.empty_field').css({'border-color':'#d8512d'});
            setTimeout(function(){
                form.find('.empty_field').removeAttr('style');
            },1000);
        }

        setInterval(function(){
            checkInput();
            var sizeEmpty = form.find('.empty_field').length;
            
            if(sizeEmpty > 0){
                if(btn.hasClass('disabled')){
                    return false
                } else {
                    btn.addClass('disabled')
                }
            } else {
                btn.removeClass('disabled')
            }
        },1000);

        btn.click(function(){
            if($(this).hasClass('disabled')){
                lightEmpty();
                return false
            } else {
                // form.submit();
            }
        });
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
            $this.parent().prev().removeAttr('style');
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
