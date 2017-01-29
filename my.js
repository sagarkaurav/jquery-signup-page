$(document).ready(function () {
  colors = ["#34495e","#2c3e50","#e67e22"];
  $('body').css('background-color',colors[Math.floor(Math.random() * colors.length)]);
  
  div_height = $('.center').height();
  div_width = $('.center').width();
  height = ($(window).height()-div_height)/2;
  width = ($(window).width()-div_width)/2;
  $('.center').css({"margin-top":height,"margin-left":width});
  $('.btn').on('click',function(){
    colors = ["#34495e","#2c3e50","#e67e22"];
    inputs = $('input');
    for (var i = 0; i < inputs.length; i++) {
      id = inputs[i].id;
      if(($('#'+id).css('display') == "block"))
      {
        $('body').css('background-color',colors[Math.floor(Math.random() * colors.length)])
        id = inputs[i].id;
        $('#'+id).css('display','none').fadeOut(1000);
        $('#'+inputs[i+1].id).css('display','block').hide().fadeIn(1000);
        break;
      }
      else
      {
        id = inputs[i].id;
        $('#'+id).css('display','none').fadeOut(1000);
      }
    }
  });
  $('.btn-back').on('click',function(){
    inputs = $('input');
    for (var i = 0; i < inputs.length; i++) {
      id = inputs[i].id;
      if($('#'+id).css('display') == "block")
      {
        id = inputs[i-1].id;
        $('#'+id).css('display','block').hide().fadeIn(1000);
        $('#'+inputs[i].id).css('display','none').fadeOut(1000);
        break;
      }
      else if (i == inputs.length-1)
      {
        $('#'+(inputs[i]).id).css('display','block').hide().fadeIn(1000);
      }
    }
  });

  $(window).resize(function (){
    div_height = $('.center').height();
    div_width = $('.center').width();
    height = ($(window).height()-div_height)/2;
    width = ($(window).width()-div_width)/2;
    $('.center').css({"margin-top":height,"margin-left":width});
  });

});
