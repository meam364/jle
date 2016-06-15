import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import '../../node_modules/bootstrap/dist/js/bootstrap.min';

$(() => {
	svg4everybody();
	$('.banner__scroll-icon').click(function () {
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		}, 1000);
	});
});
