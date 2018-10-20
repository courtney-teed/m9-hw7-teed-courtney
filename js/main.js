var link = document.getElementsByTagName('a');

var bioDiv = document.getElementsByClassName('hide-div');

function changeColor() {
	this.classList.toggle('change-color');
};

function showDiv() {
	this.nextElementSibling.classList.toggle('show-div');
};

for(i=0; i < link.length; i++) {
	link[3].addEventListener('mouseenter', changeColor);
	link[3].addEventListener('mouseleave', changeColor);
	link[3].addEventListener('click', showDiv);
};

for(i=0; i < link.length; i++) {
	link[4].addEventListener('mouseenter', changeColor);
	link[4].addEventListener('mouseleave', changeColor);
};
