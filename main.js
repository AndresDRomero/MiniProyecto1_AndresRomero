function display_menu(){
    let anchor = document.getElementsByClassName('nav-enlace');
    for(let i =0; i< anchor.length; i++) {
        anchor[i].classList.toggle('desaparece');
    }
}

var imagenes = ['/Imagenes/img1.jpg', '/Imagenes/img2.jpg', '/Imagenes/img3.jpg', '/Imagenes/img4.jpg'],
    cont = 0;

function carrou(carrousel){
    carrousel.addEventListener('click', e => {
        let    atras = carrousel.querySelector('.atras')
        let    adelante = carrousel.querySelector('.adelante')
        let    img = carrousel.querySelector('img')
        let    tgt = e.target;


        if(tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont-1];
                cont --;

            }else {
                img.src = imagenes[imagenes.length -1];
                cont = imagenes.length -1;
            }

        }else if(tgt == adelante){
            if(cont < imagenes.length -1){
                img.src = imagenes[cont+1];
                cont ++;

            }else {
                img.src = imagenes[0];
                cont = 0;
            }

        }
    });

}

document.addEventListener("DOMContentLoaded", () => {
    let carrousel = document.querySelector('.carrousel');

    carrou(carrousel);
});

function redirect_swim(){
    window.location.href="https://swimapp.io/"; 
}