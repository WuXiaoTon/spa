var see=function(){
  var password=document.getElementById("password");
  var pass=document.getElementById("pass");
  $("#eye").attr("src","http://spa.wangding.in/01-html-widget/images/eye.png");
  pass.value=password.value;
  $("#pass").css("display","inline-block");
}
var seeu=function(){
  $("#eye").attr("src","http://spa.wangding.in/01-html-widget/images/eye-close.png");
  $("#pass").css("display","none");
}
