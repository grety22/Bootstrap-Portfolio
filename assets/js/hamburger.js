$(document).ready(function(){
        $("#gbtn").click(function(){
            $("#g-icon").toggleClass('fa-bars');
            $("#g-icon").toggleClass('fa-times');
        });
    
        $("#animeimg").hover(function(){
//            $("#g-icon").toggleClass('fa-bars');
            $("#animeimg").toggleClass('infinite');
        });
});

