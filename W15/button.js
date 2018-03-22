$(function(){
  var $btn=$('.main input');
  var t=9;
  dis();
  $btn.click(function(){
    alert('hello');
  });
  function en(){
    $btn.val('同意');
    $btn.removeAttr('disabled');
  }
  function dis(){
    $btn.attr('disabled','disabled')
  .val("同意("+t+"s)");
    timer=window.setInterval(function(){
      t--;
      if(t==0){
        en();
        window.clearInterval(timer);
        return;
      }

    },1000);
  }
})
