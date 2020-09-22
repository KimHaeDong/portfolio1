(function($){

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


})(jQuery)