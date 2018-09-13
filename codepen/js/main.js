$(document).ready(function(){
  /*$(".btn").click(function(e){
    e.preventDefult();
   
  });*/
  $("#love").on(
  "click",function(){
   alert("Thank you"); 
  }
  );
  $("#tel").on(
  "click",function(){
   alert("Secret"); 
  }
  );
  let p=$(".nav-left");
  let a=$(".left");
  
  p.on(
    "click",function(){
      if(!a.is(":visible")){
        //a.addClass("xs");
        a.fadeIn(200);
      }else{
        //a.removeClass("xs");
        a.fadeOut(200);
      }
    }
  
  );
  $(".control").addClass("animated");
  function dl(){
    $(".control").removeClass("bounce");
    $(".control").removeClass("flip");
    $(".control").removeClass("flash");
    $(".control").removeClass("hinge");
    $(".control").removeClass("wobble");
    $(".control").removeClass("");
  }
$(".target1").on(
"click",function(){
  $(".control").addClass("bounce");
  setTimeout(dl,1000);
  } 
);
$(".target2").on(
  "click",function(){
  $(".control").addClass("flip");
    setTimeout(dl,1500);
});
$(".target3").on(
"click",function(){
  $(".control").addClass("flash");
  setTimeout(dl,1000);
}
);
  $(".target4").on(
"click",function(){
  $(".control").addClass("hinge");
  setTimeout(dl,3000);
}
);
  $(".target5").on(
"click",function(){
  $(".control").addClass("wobble");
  setTimeout(dl,1000);
}
);

});