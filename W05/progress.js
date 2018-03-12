var pro=document.getElementById("progress");
var progress=function(obj){
  var i=pro.value;
  if(obj.value=="begin"){
    console.log(i);
    time=window.setInterval(function(){i++;pro.value=i;},100);
  }
  else if(obj.value=="stop"){
    time=window.clearInterval(time);
  }
  else if(obj.value=="restart"){
    time=window.clearInterval(time);
    pro.value=0;
  }
}
