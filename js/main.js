
//popup
$('#popup').draggable();
//$('#popup').hide();문서완성 후 삭제

$('.btn_popup_close').click(function() {
   $('#popup').hide();
})

// header language
$('.lang_wrap button').click(function() {
 $('.lang_wrap button, .lang_wrap ul').toggleClass('open');
})

/* 전체 메뉴 */
$('.btn_allmenu_open').click(function() {
   $('.allmenu_popup').css({'display' : 'flex'});
   $('html, body').css({'overflow' : 'hidden'});
   $('header .search_popup').hide();
})

$('.btn_allmenu_close').click(function() {
   $('.allmenu_popup').hide();
   $('html, body').css({'overflow' : 'auto'});
   $('header').removeClass('on');
})

/* header style 추가 */
$('header .btn_search_open').click(function() {
   $('header').toggleClass('on');
   $('header .search_popup').toggle();
})

$(window).scroll(function(){ //스크롤이 될 때마다
   if($(window).scrollTop() >= 10) {
      $('header').addClass('on')
   }
   else {
      $('header').removeClass('on')
   }
});


$('#gnb .dep1>li').hover(function() {
   $(this).children('.dep2_wrap').stop().show();
   $('header').addClass('on');
},function() {
   $('#gnb .dep2_wrap').stop().slideUp(300);
   $('header').removeClass('on');
})

let s = false;
$('.family_wrap>button').click(function() {
   $('.family_wrap>ul').slideToggle('slow')
   //$('.family_wrap>ul').toggle('slow')
   console.log(s);

})

const mainSwiper = new Swiper('.main_swiper', {
   autoplay: true,
   loop: true,
   direction: 'horizontal',
   navigation:{
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
   },
   autoplay: {
      delay: 3000,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   }
})

$('.main_visual .swiper-auto-controls .auto-play').click(function() {
   $(this).hide();
   $('.main_visual .swiper-auto-controls .auto-stop').show();
   mainSwiper.autoplay.start();
})

$('.main_visual .swiper-auto-controls .auto-stop').click(function() {
   $(this).hide();
   $('.main_visual .swiper-auto-controls .auto-play').show();
   mainSwiper.autoplay.stop();
})

//faculty
const facultySwiper = new Swiper('.faculty_swiper',{
   autoplay: {
      delay: 0,
   },
   slidesPerView: 'auto',
   spaceBetween: 40,
   speed: 4000,
   loop: true,
})

//news
$('.news_wrap .tabs li').click(function() {
   $('.news_wrap .tabs li').not(this).removeClass('active');
   $(this).addClass('active');
   const tabName  = $(this).attr('data-news');
   $('.news_wrap .content_box').hide();
   $('.news_wrap .content_box').filter('[data-news = ' + tabName + ']').show();

})


$('.sub .lnb_wrap button').click(function() {
   let a =  $(this).next().css('display')
})


$('.sub .lnb_wrap button').click(function() {
   let nextEl = $(this).next()

   if(nextEl.css('display') == 'none') {
      nextEl.css('display', 'flex')
      $('.sub .lnb_wrap ul').not(nextEl).css('display', 'none')
   } else {
      $('.sub .lnb_wrap ul').css('display', 'none')
   }
 })
