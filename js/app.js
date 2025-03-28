function menuHamburguesa(){
    document.getElementById('menu-hamburguesa').click();
    return;
}

function cerrarMenuHamburguesa() {
    document.getElementById('menu-hamburguesa').checked = false; // Desmarca el checkbox
}


// Función para abrir el popup
function abrirPopUpCasoDeEstudio(){
    document.getElementById('popup__contenedor').style.display = 'block';
    document.getElementById('popup__casos__de__estudio').style.display = 'flex';
    document.getElementById('popup__video').style.display = 'none';
    document.getElementsByClassName('popup__contenedor')[0].style.top= '0';
}

function abrirPopUpVideo(elemento) {
    document.getElementById('popup__contenedor').style.display = 'block';
    document.getElementById('popup__casos__de__estudio').style.display = 'none';
    document.getElementById('popup__video').style.display = 'flex';

    if(window.innerWidth < 950){
        document.getElementsByClassName('popup__contenedor')[0].style.top= '25%';
    }else {
        // Si el tamaño de la ventana es mayor o igual a 950px, restaurar la posición original si es necesario
        document.getElementsByClassName('popup__contenedor')[0].style.top = '';
    }
    
    
    if (elemento == 1) {
        document.getElementById('popup__video__iframe').src="https://www.youtube.com/embed/WfDRBFVljC4?autoplay=1&mute=1&controls=0";
        document.getElementById('popup__video__iframe').title="Zomato - Food Delivery App   | Are You Hungry? | Motion Graphics Explainer Video" ;
    }
    else if(elemento == 2){
        document.getElementById('popup__video__iframe').src="https://www.youtube.com/embed/nzGN6amvokI?autoplay=1&mute=1&controls=0";
        document.getElementById('popup__video__iframe').title="Product Explainer Video for Lumin x Snowflake Summit 2023";
    }
    else if(elemento == 3){
        document.getElementById('popup__video__iframe').src="https://www.youtube.com/embed/FFewDlGHVKo?autoplay=1&mute=1&controls=0";
        document.getElementById('popup__video__iframe').title="2D Animation Video for Construction Tech: Aris Explainer Video";
    }
    else{
        document.getElementById('popup__video__iframe').src="https://www.youtube.com/embed/UKsm7nK_zDQ?autoplay=1&mute=1&controls=0";
        document.getElementById('popup__video__iframe').title="Motion Graphics Animation Video - DiversysPRO";
    }
    
}

// Función para cerrar el popup
function cerrarPopUp() {
    document.getElementById('popup__contenedor').style.display = 'none'; // Oculta el popup
    document.getElementsByClassName('popup').style.display = 'none';
}



