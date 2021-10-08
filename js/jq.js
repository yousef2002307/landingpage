$(document).ready(function(){
   $(".bars").click(function(){
        $(".nav2").toggleClass("x");
        if($(".nav2").hasClass("x")){
            $(".nav2").animate({
                left : 0
            },1000);
        }else{
            $(".nav2").animate({
                left : -1000
            },1000);
        }
   });
});









