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
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Angular");
        habilidades[3].classList.add("springboot");
        habilidades[4].classList.add("postgressq");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function descargarPDF() {
    // Reemplaza "ruta_del_archivo.pdf" con la ruta real de tu archivo PDF
    var url = "CURRICULUM_VITAE_ELI.pdf";

    // Crea un elemento de enlace temporal
    var link = document.createElement('a');

    // Configura la URL del enlace
    link.href = url;

    // Especifica que el enlace debe descargarse en lugar de navegar
    link.download = "CURRICULUM_VITAE_ELI";

    // Agrega el enlace al documento HTML
    document.body.appendChild(link);

    // Simula un clic en el enlace para iniciar la descarga
    link.click();

    // Elimina el enlace del documento HTML
    document.body.removeChild(link);
}

