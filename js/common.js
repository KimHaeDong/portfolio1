(function($){


 init()
 var init = true;
 function init() {
   var ww = $(window).width()
   if ( ww>767 ) {
      $('html').addClass('pc').removeClass('mobile')
      if ( init ) {
        $('.h1Nav .nav').show()
        $('.depth1 > li').removeClass('on')
        $('.open_nav, .close_nav, .depth2').hide()
        init = false
      }      
   } else if ( ww<=767 ) {      
      $('html').addClass('mobile').removeClass('pc')
      if ( !init ) {
        $('.open_nav').show()
        $('.h1Nav .nav, .depth2').hide()
        init = true
      }
   }
 }

    $(window).on('resize', function(){
        init()
    })

    // 모바일화면에서 1단계메뉴 클릭했을때 2단계메뉴 보이게 하기
  $(".depth1 > li").on('click', function(){
      if ( $('html').hasClass('mobile') ) {
        $(this).toggleClass('on')
        $(this).find('.depth2').stop().slideToggle(300)
        $(this).siblings().each(function(){
            if (  $(this).css('display') === 'block' ) {
              $(this).find('.depth2').slideUp(300)
              $(this).removeClass('on')
            }
        })
      }
  })

  // pc화면에서 1단계메뉴에 호버했을때 2단계메뉴 보이게 하기
  $('.depth1 > li').hover(
    function(){
      if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideDown(300)
      }
    },
    function(){
      if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideUp(300)
      }
    }
  )



    // 링크연결

    $(window).load(function(){
        $('.introAni').delay(500).fadeOut(500)
    })
    
    $('#kimBox').load('main.html')

    $('.topmenu > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#kimContainer').remove()
        $('#kimBox').load(url)
    })

    $('.h1Nav > h1 > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#kimContainer').remove()
        $('#kimBox').load(url)
    })

    $('.nav .depth1 li a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#kimContainer').remove()
        $('#kimBox').load(url)
    })


    

    $(window).scroll(function(){
        var sct = $(this).scrollTop()
        var actNear = $('.company').offset().top - $(this).height()/2
        if (sct >= actNear) {
            $('.company .container').addClass('on')
        } else if (sct===0){
            $('.company .container').removeClass('on')
        }

    })

    $(window).scroll(function(){
        var sct = $(this).scrollTop()
        var actNear = $('.studio').offset().top - $(this).height()/2
        if (sct >= actNear) {
            $('.studio .studioInner').addClass('on')
        } else if (sct===0){
            $('.studio .studioInner').removeClass('on')
        }

    })

    // 햄버거버튼 클릭시 네비박스 나타나기
    $('.h1Nav .open_nav').on('click', function(){
        $(this).next().stop().slideDown(300)
        $(this).hide()
        $(this).nextAll('.close_nav').css({display:'block'})
    })
    
      // 닫기버튼 클릭시 네비박스 사라지기
    $('.h1Nav .close_nav').on('click', function(){
       $(this).prev().stop().slideUp(300)
       $(this).hide()
       $(this).prevAll('.open_nav').css({display:'block'})
       $('.depth2').hide()
       $('.h1Nav .nav .depth1 > li').removeClass('on')
    })
})(jQuery)