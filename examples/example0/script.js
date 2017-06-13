function example () {
	var body = c(document.body);
	body.style$('backgroundColor', 'rgb(0,0,200)');	// initial style
	var startFading = function() {
		body.fade$({
			backgroundColor: 'rgb(0,0,200)'
		}, 800, 2, function() {
			body.fade$({
				backgroundColor: 'rgb(200,0,0)'
			}, 800, 2, startFading);
		});
	}
	
	var span = c('<span>NativeMagic</span>')
		.style$('color', 'white')
		.style$('text-decoration', 'none')
		.style$('font-size', 88)
		.appendTo$(document.body);
	var rect = span.getBoundingClientRect();
	console.log(rect);

	span
		.style$('position', 'fixed')
		.style$('top', Math.round(window.outerHeight/2 - rect.height/2)	)
		.style$('left', Math.round(window.outerHeight/2 ));
		
	startFading();	// begin fading
}
window.addEventListener('load', example);