//    !!!   FOR POSITION-FIXED HEADER MENU
$(document).on("scroll",function(){
    if($(document).scrollTop()>  0){
        $(".header_menu").removeClass("bottom").addClass("top");
    		} else{
       	$(".header_menu").removeClass("top").addClass("bottom");
    		}
});



//    !!!   FOR SLIDER-SIPER VERTICAL SCROLL
$(document).ready(function(){
	var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	direction: 'vertical',
	loop: true,
	pagination: {
	el: '.swiper-pagination',
	clickable: true,
	},
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},
	});
});