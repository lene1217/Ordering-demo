var x = $('.item');
function select(name) {
  if(x.hasClass('name')){
    x.css('display','block');
  } else {
    x.css('display','none');
  }
}
x.on('click',function(){
  select(name);
})