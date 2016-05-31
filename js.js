document.addEventListener("DOMContentLoaded", function(event) { 
	var w = window,
	    d = document,
	    e = d.documentElement,
	    g = d.getElementsByTagName('body')[0],
	    x = w.innerWidth || e.clientWidth || g.clientWidth,
	    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	var pages = document.getElementById('width-determine');
	pages.setAttribute('style', "width:"+x*.7+"px");

	// var clickCount = 0;
	// pages.addEventListener('click', function() {
	//     clickCount++;
	//     if (clickCount === 1) {
	//         singleClickTimer = setTimeout(function() {
	//             clickCount = 0;
	//             singleClick();
	//         }, 400);
	//     } else if (clickCount === 2) {
	//         clearTimeout(singleClickTimer);
	//         clickCount = 0;
	//         doubleClick();
	//     }
	// }, false);​
	// function singleClick(){
	// 	console.log('hi');
	// }
	// function doubleClick(){
	// 	console.log('by');
	// }
});