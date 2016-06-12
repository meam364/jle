import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
	$('.banner__scroll-icon').click(function () {
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		}, 1000);
	});
});
