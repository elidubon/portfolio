let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//metodo para descargar
function descargarPDF() {
    var url = "PULIC_CURRICULUM_VITAE_ELI.pdf";
    // Crea un elemento de enlace temporal
    var link = document.createElement('a');
    // Configura la URL del enlace
    link.href = url;
    // Especifica que el enlace debe descargarse en lugar de navegar
    link.download = "PULIC_CURRICULUM_VITAE_ELI";
    // Agrega el enlace al documento HTML
    document.body.appendChild(link);
    // Simula un clic en el enlace para iniciar la descarga
    link.click();
    // Elimina el enlace del documento HTML
    document.body.removeChild(link);
}



