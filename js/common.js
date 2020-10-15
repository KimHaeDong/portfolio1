(function($){


var deviceSize = 767;
  
  function scrollOX(status) {
    $('html').css({
      overflowY:status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
  }

  var swh = scrollOX('hidden'),  
  sws = scrollOX('scroll'),  
  swd = swh - sws;

  if ( swd > 0 ) {
    deviceSize = deviceSize - swd
  }
  
 init()
 function init() {
  var ww = $(window).width()
  if ( ww>deviceSize && !$('html').hasClass('pc') ) {
     $('html').addClass('pc').removeClass('mobile')
     $('.h1Nav .nav').show()
     $('.depth1 > li').removeClass('on')
     $('.open_nav, .close_nav, .depth2').hide()
  } else if ( ww<=deviceSize && !$('html').hasClass('mobile') ) {
     $('html').addClass('mobile').removeClass('pc')
     $('.open_nav').show()
     $('.h1Nav .nav, .depth2').hide()
  }
}

$(window).on('resize', function(){
  init()
})


    // 모바일화면에서 1단계메뉴 클릭했을때 2단계메뉴가 있으면 2단계 메뉴만 열고, 페이지 이동은 안함
    // 2단계 메뉴가 없으면 페이지 이동한 후 햄버거 버튼만 보이게 하기
  $(".depth1 > li > a").on('click', function(e){
    e.preventDefault()
    var url = $(this).attr('href')
      if ( $('html').hasClass('mobile') ) {
        if ( $(this).next().is('.depth2') ) {
          $(this).parent().toggleClass('on')  
          $(this).parent().find('.depth2').stop().slideToggle(300)
          $(this).parent().siblings().each(function(){
            if (  $(this).find('.depth2').css('display') === 'block' ) {
              $(this).find('.depth2').slideUp(300)
              $(this).removeClass('on')
            }
          })
        } else if ( !$(this).next().is('.depth2') ) { 
          $('#kimContainer').remove()
          $('#kimBox').load(url)
          $('.open_nav').show()
          $('.h1Nav .nav, .depth2, .close_nav').hide()
          $('.depth1 > li').removeClass("on");
        }
      } else if ( $('html').hasClass('pc') ) {
          $('#kimContainer').remove()
          $('#kimBox').load(url)
          $('.depth2').hide()
      }
  })

  // 2단계 메뉴 클릭하면 화면에 상관없이 무조건 페이지 이동(로드)함
  $('.depth2 > li a').on('click', function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $('#kimContainer').remove()
    $('#kimBox').load(url)
    $('.depth2').hide()
    if ( $('html').hasClass('mobile')) {
        $('.open_nav').show()
        $('.h1Nav .nav, .close_nav').hide()
        $('.depth1 > li').removeClass("on");
    }
  })

  // pc화면에서 1단계메뉴에 호버했을때 2단계메뉴 보이게 하기
  $('.depth1 > li').hover(
    function(){
      if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideDown(300);
      }
    },
    function(){
      if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideUp(300);
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

    $('.goTop').on('click', function(){
      $('html, body').animate({
        scrollTop:0
      }, 500)
    })

})(jQuery)