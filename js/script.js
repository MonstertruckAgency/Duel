$(".animsition").animsition({
	inClass: 'fade-in'
	, outClass: 'fade-out'
	, inDuration: 3500
	, outDuration: 800
	, linkElement: '.animsition-link', // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	loading: true
	, loadingParentElement: 'body', //animsition wrapper element
	loadingClass: 'animsition-loading'
	, loadingInner: '', // e.g '<img src="loading.svg" />'
	timeout: false
	, timeoutCountdown: 5000
	, onLoadEvent: true
	, browser: ['animation-duration', '-webkit-animation-duration'], // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	overlay: false
	, overlayClass: 'animsition-overlay-slide'
	, overlayParentElement: 'body'
	, transition: function (url) {
		window.location.href = url;
	}
});
//*VIDEO PLAYER*//
$('.js-lazyYT').lazyYT();
//STOP VIDEOS WHEN CLICK ON ARROWS//
//***************************************************************** scroll to sections //************************************/
$('.navmobile a, .navfull a,.logomobile').on('click', function (event) {
	var target = $($(this).attr('href'));
	if (target.length) {
		event.preventDefault();
		var newScroll = target.position().top;
		$('html,body').animate({
			scrollTop: newScroll
		}, 1000);
	}
});
//*****************************************************************animations on scroll //************************************/
// get targeted elements' offset //
var videosOffset = (Math.floor(($('#videos').offset()).top));
var photosOffset = Math.floor(($('#photos').offset()).top);
//var contactOffset = Math.floor(($('#contact').offset()).top);//
var aboutOffset = Math.floor(($('#about').offset()).top);
var musicOffset = Math.floor(($('#music2').offset()).top);
var lyricsOffset = Math.floor(($('#music').offset()).top);
var tourOffset = Math.floor(($('#tour').offset()).top);
var menuLinks = $("#menu a");
// letter spacing effect settings //
var letterEffectTargets = $(".letterEffect");
$(".letterEffect").addClass('spacingoff');
// executes on scroll //
$(window).scroll(function () {
	//set links to grey when on view//
	if (window.scrollY >= musicOffset && window.scrollY < lyricsOffset) {
		menuLinks[1].classList.add('sectionactive');
	}
	else {
		menuLinks[1].classList.remove('sectionactive');
	}
	if (window.scrollY >= lyricsOffset && window.scrollY < videosOffset) {
		menuLinks[2].classList.add('sectionactive');
	}
	else {
		menuLinks[2].classList.remove('sectionactive');
	}
	if (window.scrollY >= videosOffset && window.scrollY < photosOffset) {
		menuLinks[3].classList.add('sectionactive');
	}
	else {
		menuLinks[3].classList.remove('sectionactive');
	}
	if (window.scrollY >= photosOffset && window.scrollY < aboutOffset) {
		menuLinks[4].classList.add('sectionactive');
	}
	else {
		menuLinks[4].classList.remove('sectionactive');
	}
	if (window.scrollY >= aboutOffset && window.scrollY < tourOffset) {
		menuLinks[5].classList.add('sectionactive');
	}
	else {
		menuLinks[5].classList.remove('sectionactive');
	}
	if (window.scrollY >= tourOffset) {
		menuLinks[6].classList.add('sectionactive');
	}
	else {
		menuLinks[6].classList.remove('sectionactive');
	}
	// scroll bottom offset //
	var offsetBottom = $(window).scrollTop() + $(window).height();
	// menu and logo offset //
	var menuOffset = Math.floor(($('#menu').offset()).top);
	var logoOffset = Math.floor(($('#backhome').offset()).top);
	// LETTER SPACING EFFECT //
	//execute effect//
	for (var n = 0; n < letterEffectTargets.length; n++) {
		// executes effect when scrolls into view //
		if (($(letterEffectTargets[n]).offset().top + $(letterEffectTargets[n]).height()) <= offsetBottom && $(letterEffectTargets[n]).hasClass('spacingoff') && $(letterEffectTargets[n]).offset().top > $(window).scrollTop()) {
			$(letterEffectTargets[n]).animate({
				'letter-spacing': '1.5vw'
			}, 1500);
			$(letterEffectTargets[n]).removeClass('spacingoff');
			$(letterEffectTargets[n]).addClass('spacingon');
		}
	};
	// ADDS MENU FILTER  //
	/*

    if (menuOffset <= musicOffset){
        $('#menu').css('background', 'rgba(255,255,255, 0.0)');

    }

    else if (menuOffset >= musicOffset){
        $('#menu').css('background', 'rgba(255,255,255, 0.1)');

    }
   */
	// MANAGES LOGO CHANGE //
	if ((logoOffset >= videosOffset && logoOffset <= photosOffset) /*|| logoOffset >= contactOffset*/ ) {
		$('#logosmall').attr("src", 'img/logoduelwhite.svg');
	}
	else if (logoOffset >= photosOffset /*&& logoOffset <= contactOffset*/ ) {
		$('#logosmall').attr("src", 'img/logoduelblack.svg');
	}
	else if (logoOffset <= videosOffset) {
		$('#logosmall').attr("src", 'img/logoduelblack.svg');
	}
	else if ( /*logoOffset <= contactOffset && */ logoOffset <= aboutOffset) {
		$('#logosmall').attr("src", 'img/logoduelblack.svg');
	}
	// MANAGES LINKS COLORS  //
	var offsetLinks = [];
	for (var i = 0; i < menuLinks.length; i++) {
		offsetLinks.push($(menuLinks[i]).offset().top);
		if ((offsetLinks[i] >= videosOffset && offsetLinks[i] <= photosOffset) /*|| offsetLinks[i] >= contactOffset*/ ) {
			$(menuLinks[i]).css('color', 'white');
		}
		else if (offsetLinks[i] >= photosOffset /*&& offsetLinks[i] <= contactOffset*/ ) {
			$(menuLinks[i]).css('color', '#231f20');
		}
		else if (offsetLinks[i] <= videosOffset) {
			$(menuLinks[i]).css('color', '#231f20');
		}
		else if ( /*offsetLinks[i] <= contactOffset &&*/ offsetLinks[i] <= aboutOffset) {
			$(menuLinks[i]).css('color', '231f20');
		}
	}
});
//*****************************************************************slider //************************************/
/*$(function () {
	SyntaxHighlighter.all();
});*/
$(window).load(function () {
	$('#videos .wrap .flexslider').flexslider({
		animation: "slide"
		, direction: "vertical"
		, start: function (slider) {
			$('body').removeClass('loading');
		}
	});
	$('#slider .flexslider').flexslider({
		animation: "slide"
		, direction: "horizontal"
		, start: function (slider) {
			$('body').removeClass('loading');
		}
	});
});
$(function () {
	var toggles = $('.toggle a')
		, codes = $('.code');
	toggles.on("click", function (event) {
		event.preventDefault();
		var $this = $(this);
		if (!$this.hasClass("active")) {
			toggles.removeClass("active");
			$this.addClass("active");
			codes.hide().filter(this.hash).show();
		}
	});
	toggles.first().click();
});
//********************************lyrics****///
var lyricsLinks = $('#lyrics a');
var lyricsTargets = $('.lyricscontainer');
for (var lindex = 0; lindex <= lyricsLinks.length - 1; lindex++) {
	console.log("a");
	$(lyricsLinks[lindex]).attr("data-lyrics", lindex);
}
$('#lyrics a').bind('click', function (event) {
	event.preventDefault();
	var linkOrigin = $(this);
	var linkOrigindata = $(this).data("lyrics");
	$('.linkactive').removeClass('linkactive');
	$(this).toggleClass('linkactive');
	$('.visible').removeClass('visible');
	$(lyricsTargets[linkOrigindata]).addClass('visible');
});
$(window).load(function () {
	function stopVid() {
		var player = document.getElementsByClassName('vids');
		for (var vindex = 0; vindex <= player.length - 1; vindex++) {
			//$('#popup-youtube-player').stopVideo();
			$(player)[vindex].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		};
	}
	$('#videos .flex-direction-nav a').click(function () {
		stopVid();
	});
});
//********************MOBILE*********************************//
//STOPS BS SLIDER WHEN ON MOBILE VIEW//