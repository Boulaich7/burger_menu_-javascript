let btn = document.getElementById('btn');
let btnClose = document.getElementById('btnclose');
let container = document.querySelector('.container');

btnClose.onclick = function() {
	container.classList.add('boton');
	this.classList.add('boton');
	btn.classList.remove('boton');
}

btn.onclick = function() {
	this.classList.add('boton');
	container.classList.remove('boton');
	btnClose.classList.remove('boton');
}
