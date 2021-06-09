document.addEventListener('DOMContentLoaded', function () {

  let hours = document.querySelector('.hours');
  let minute = document.querySelector('.minute');
  let second = document.querySelector('.second');
  let input = +new Date('2021-6-9 0:10:50');

  function countDown() {

    let now = +new Date();
    let times = parseInt((input - now) / 1000 + '');
    let d = parseInt(times / 60 / 60 / 24 + '');
    d = d < 10 ? '0' + d : d;
    let h = parseInt(times / 60 / 60 % 24 + '');
    h = h < 10 ? '0' + h : h;
    hours.innerHTML = h;
    let m = parseInt(times / 60 % 60 + '');
    m = m < 10 ? '0' + m : m;
    minute.innerHTML = m;
    let s = parseInt(times % 60 + '');
    s = s < 10 ? '0' + s : s;
    second.innerHTML = s;
    if (times <= 0) {
      clearInterval(timers);
    }
    return d + ':' + h + ':' + m + ':' + s;
  }

  countDown();
  let timers = setInterval(countDown, 1000);


});





