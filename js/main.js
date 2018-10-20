var link = document.getElementsByTagName('a');

function changeColor() {
	this.classList.toggle('change-color');
};

for(i=0; i < link.length; i++) {
	link[3].addEventListener('mouseenter', changeColor);
	link[3].addEventListener('mouseleave', changeColor);
};

for(i=0; i < link.length; i++) {
	link[4].addEventListener('mouseenter', changeColor);
	link[4].addEventListener('mouseleave', changeColor);
};
