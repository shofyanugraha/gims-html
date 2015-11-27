$(function(){
	Cute.ModuleLoader.css3d_files  =  ['assets/js/cute.css3d.module.js'];
	Cute.ModuleLoader.canvas_files =  ['assets/js/cute.canvas.module.js'];
	Cute.ModuleLoader.dom2d_files  =  ['assets/js/cute.2d.module.js'];
	var slider = new Cute.Slider();
	slider.setup('cute-slider' ,  'slider-wrapper');
	if(self !== top)document.getElementById('alert').style.display = 'block';
});