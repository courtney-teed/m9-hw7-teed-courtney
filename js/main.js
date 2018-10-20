var link = document.getElementsByTagName('a');

function changeColor() {
	
};

for(i=0; i < link.length; i++) {
	link[i].addEventListener('mouseenter', changeColor);
	link[i].addEventListener('mouseleave', changeColor);
};
