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


})(jQuery)