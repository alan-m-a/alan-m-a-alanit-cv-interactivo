/* Variables locales */
const abrir = document.getElementById("button-cv");
const cerrar = document.getElementsByClassName("close")[0];
const continuar = document.getElementsByClassName("button-continuar")[0];
const modal = document.getElementsByClassName("mi-modal")[0];
const modalC = document.getElementsByClassName("modal-container")[0];

/* Manejo de modal */


/* Funcion para la apertura del modal */
function toggleOpen() {
    console.log('Descargando...')
    modalC.style.opacity = '1';
    modalC.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
}


/* Funcion para el cierre del modal */
function toggleClose() {
    modal.classList.toggle('modal-close');
    setTimeout(function () {
        modalC.style.opacity = '0';
        modalC.style.visibility = 'hidden';
    }, 900)
}

/* Listener boton de descarga / Activacion del modal*/
abrir.addEventListener('click', toggleOpen)

/* Listener boton cerrar / cierre del modal*/
cerrar.addEventListener('click', toggleClose);

/* Listener boton continuar / cierre del modal*/
continuar.addEventListener('click', toggleClose)


/* Listener window / cierre del modal*/
window.addEventListener("click", function (e) {
    if (e.target == modalC) {
        toggleClose();
    }
});

/*Archivo Js*/