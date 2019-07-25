'use strict';

$(function () {
  theaMsForm($('.sign-in'));

  var mySwiper = new Swiper('.swiper-container', {
    // 如果需要分页器
    pagination: '.swiper-pagination',

    autoplay: 2000
  });

  // 长文本 展开/收起
  function init(box, num) {
    var len = num; //默认显示字数
    var ctn = document.getElementById(box); //获取div对象
    var content = ctn.innerHTML; //获取div里的内容

    var div = document.createElement("div"); //创建<div>元素
    var a = document.createElement("a"); //创建<a>元素
    div.innerHTML = content.substring(0, len); //div里的内容为content的前len个字符

    a.innerHTML = content.length > len ? "... 展开" : ""; //判断显示的字数是否大于默认显示的字数 来设置a的显示
    a.href = "javascript:void(0)"; //让a链接点击不跳转

    a.onclick = function () {
      if (a.innerHTML.indexOf("展开") > 0) {
        //如果a中含有"展开"则显示"收起"
        a.innerHTML = "<<&nbsp;收起";
        div.innerHTML = content;
      } else {
        a.innerHTML = "... 展开";
        div.innerHTML = content.substring(0, len);
      }
    };
    // 设置div内容为空，span元素 a元素加入到div中
    ctn.innerHTML = "";
    ctn.appendChild(div);
    ctn.appendChild(a);
  }

  init("schoolIntroduce", 171);
  init("advantageIntroduce", 176);
  init("schoolmateIntroduce", 100);

  // 隐藏 弹窗
  $('.close').click(function () {
    $('.popup').css('display', 'none');
    $('.mask').css('display', 'none');
  });

  // 显示 弹窗
  $('.btn-module .test').click(function () {
    $('.popup').css('display', 'block');
    $('.mask').css('display', 'block');
  });
});