var aler=function(){
  var width=document.getElementById('rectangle-width');
  var one=document.getElementById('one');
  var reg=/^\d+(\.\d+)?$/;
  var widths=String(width.value);
  if(width.value==""){
    one.innerHTML='宽度不能为空！';
    width.focus();
  }
  else if(reg.test(width.value)==false){
    if(width.value[0]=="-"){
    one.innerHTML='请输入大于0的数！';
    }
    else{
    one.innerHTML='请输入数值！';
    }
    width.focus();
  }
  else if(widths[0]=="0"){
    one.innerHTML='请输入大于0的数！';
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
  var heights=String(height.value);
if (height.value==""){
  two.innerHTML="高度不能为空！";
  height.focus();
}
  else if(reg.test(height.value)==false){
    if(height.value[0]=="-"||height.value[0]=="0"){
    two.innerHTML='请输入大于0的数！';
    }
    else{
    two.innerHTML='请输入数值！';
    }
    height.focus();
  }
  else if(heights[0]=="0"){
    two.innerHTML='请输入大于0的数！';
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
