document.addEventListener("DOMContentLoaded", function() {
	var spans = document.querySelectorAll(".close");
	var blurBackgs = document.querySelectorAll(".modal-background-blurred");

	// Abrir modal
	document.querySelector(".btn-mariscos").onclick = function() {
		document.getElementById("modal-mariscos").style.display = "flex";

	}

	document.querySelector(".btn-rabas").onclick = function() {
		document.getElementById("modal-rabas").style.display = "flex";
	}

	document.querySelector(".btn-empanadas").onclick = function() {
		document.getElementById("modal-empanadas").style.display = "flex";
	}
	
	document.querySelector(".btn-besugo").onclick = function() {
		document.getElementById("modal-besugo").style.display = "flex";
	}
	

	// Cerrar modal al hacer click en X
	spans.forEach(function(span) {
        span.onclick = function() {
            span.closest('.modal').style.display = "none";
        }
    });

	// Cerrar modal al hacer click en el fondo borroso
	blurBackgs.forEach(function(blurBackg) {
        blurBackg.onclick = function(event) {
            blurBackg.closest('.modal').style.display = "none";
        }
    });

});

// funcion para modo dia/noche
var toggleBtn = document.getElementsByClassName("toggle-mode")[0];
var toggleText = document.getElementsByClassName("toggle-mode-text")[0];
toggleBtn.textContent = "dark_mode";	//icono del boton
toggleText.textContent = "Noche";		//texto del boton

function toggleMode() {
	var mainElement = document.querySelector(".main");

	if (mainElement.classList.contains("light-mode")) {
		mainElement.classList.replace("light-mode", "dark-mode");
		toggleBtn.textContent = "light_mode"; //encender modo noche
		toggleText.textContent = "Día";

		document.querySelectorAll(".plato").forEach(function (plato) {
			plato.classList.replace("light-mode", "dark-mode");
		});
		document.querySelectorAll(".overlay").forEach(function (overlay) {
			overlay.classList.replace("light-mode", "dark-mode");
		});
	} else {
		mainElement.classList.replace("dark-mode", "light-mode");
		toggleBtn.textContent = "dark_mode"; //apagar modo noche
		toggleText.textContent = "Noche";

		document.querySelectorAll(".plato").forEach(function (plato) {
			plato.classList.replace("dark-mode", "light-mode");
		});
		document.querySelectorAll(".overlay").forEach(function (overlay) {
			overlay.classList.replace("dark-mode", "light-mode");
		});
	}
};
//asignacion de funcion
toggleBtn.onclick = toggleMode;
toggleText.onclick = toggleMode;
