/* js goes here */

var body_object = document.body,
	nav = document.getElementsByTagName('nav')[0],
	main = document.getElementsByTagName('main')[0],
	progress_bar = document.getElementById('progressBar');

var body_height = 0,
	main_height = 0;

window.addEventListener('resize', check_dimension);
window.addEventListener('scroll', check_scroll);

function check_dimension(){
	body_height = document.body.clientHeight;
	main_height = main.clientHeight;
}

check_dimension();

function check_scroll(){
	var scroll_position = window.scrollY;
	var doc_unit = Math.ceil((100 / main_height) * 100)/100;
	var doc_position = (scroll_position * doc_unit);
	if(doc_position <= 105){
		console.log(doc_position);
		progress_bar.style.width = doc_position + '%';
	}
}
