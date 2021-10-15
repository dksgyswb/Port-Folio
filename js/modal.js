$(function(){ 

    $(".snip1535").click(function(){
        $(this).next('.modal').stop().fadeIn();
    });
    
    $(".modal_content").click(function(){
        $(".modal").stop().fadeOut();
    });
    
    });