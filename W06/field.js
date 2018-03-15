var aler=function(){
  var width=document.getElementById('rectangle-width');
  var one=document.getElementById('one');
var reg=/^\d+(\.\d+)?$/;
  if(width.value==""){
    one.innerHTML='宽度不能为空！';
    width.focus();
  }
else if(reg.test(width.value)==false){
  one.innerHTML="请输入数值！";
    width.focus();
}
  else{
     one.innerHTML='';
  }
}
var ale=function(){
var height=document.getElementById('rectangle-height');
var two=document.getElementById('two');
var reg=/^\d+(\.\d+)?$/;
if (height.value==""){
  two.innerHTML="高度不能为空！";
  height.focus();
}
else if(reg.test(height.value)==false){
  two.innerHTML="请输入数值！";
  height.focus();
}
else{
  two.innerHTML="";
}
}
var roundFractional=function(x,n){
  return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
}
var calculate=function(){
  var width=document.getElementById('rectangle-width');
  var one=document.getElementById('one');
  var two=document.getElementById('two');
  aler();
  if(one.innerHTML==""){
    var height=document.getElementById('rectangle-height');
    ale();
    if(height.value!=""){
      var perimeter=document.getElementById('rectangle-perimeter');
      var area=document.getElementById('rectangle-area');
      perimeter.value=2*roundFractional(parseFloat(width.value)+parseFloat(height.value),1);
      area.value=roundFractional(width.value*height.value,2);
    }
  }
}
