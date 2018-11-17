var link = document.getElementsByClassName('hover-button');
var dropdown = document.getElementsByClassName('dropdown');
var bioDiv = document.getElementsByClassName('hide-div');

function changeColor() {
	this.classList.toggle('change-color');
};

function showDiv() {
	this.nextElementSibling.classList.toggle('show-div');
};

for (i = 0; i < link.length; i++) {
	link[i].addEventListener('mouseenter', changeColor);
	link[i].addEventListener('mouseleave', changeColor);
}

dropdown[0].addEventListener('click', showDiv);

var section = document.getElementsByTagName('section');

function hoverOpacity() {
	this.classList.toggle('opacity-change');
};

for(i=0; i < section.length; i++) {
	section[i].addEventListener('mouseenter', hoverOpacity);
	section[i].addEventListener('mouseleave', hoverOpacity);
};