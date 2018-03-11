window.onload=function(){
  $('#button').attr("disabled",true);
  timeout();
  time();
}
var timeout=function(){
  setTimeout(function(){
    //console.log('OK');
    var button=document.getElementById('button');
    $('#button').attr("disabled",false);
    clearInterval(interval);
    button.value="确定";
  },10000);
}
var time=function(){
  var button=document.getElementById('button');}
  var i=9;
  var interval=setInterval(function(){
    button.value="确定("+i+")";
    i--;
  },1000);
var aler=function(){
  alert('您已同意');
}
