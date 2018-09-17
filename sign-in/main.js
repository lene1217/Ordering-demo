var countdown = 59;
function settime() {
  if (countdown == '0') {
    $('span').addClass('.btn-disabled');
    $('span').text("重新获取验证码");
    countdown = 59;
  } else {
    $('span').removeClass('.btn-disabled');
    $('span').text(countdown + "秒后重新发送" );
    countdown--;
    setTimeout(function () {
      settime()
    }, 1000);
  };
};

$('span').on('click',function () {
  settime();
})