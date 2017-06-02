

function setConfig (){

	var texto = {
		'titulo':'Capturando textos de forma magica'
	};

	document.title = texto.titulo;
	document.querySelector("#titulo").innerHTML = texto.titulo;
}

setConfig();