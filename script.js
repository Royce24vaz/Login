$(function(){
$(".hello").hide();
$(".account").hide();
   $(".fog").hide();
  $(".plan").click( function(){
    $(".fog ").toggle(300);
    $("button").click(function(){
        $(".fog").hide();
        
        
        
    });
    });
});
$(function(){
$(".hello").hide();
    $(".but").click(function(){
        $(".coding , .account").hide(200);
        $(".hello").show(500);
    });
});
$(function(){
    $(".create").click(function(){
    $(".coding").hide();
     $(".account").show();
    });
});
$(function(){
    $(".log").click(function(){
     $(".account").hide();
      $(".coding").show();
    });
});
