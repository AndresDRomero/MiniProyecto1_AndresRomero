function display_menu(){
    let anchor = document.getElementsByClassName('nav-enlace');
    for(let i =0; i< anchor.length; i++) {
        anchor[i].classList.toggle('desaparece');
    }
}

var imagenes = ['./Imagenes/img1.jpg', './Imagenes/img2.jpg', './Imagenes/img3.jpg', './Imagenes/img4.jpg'],
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


const nombre = document.getElementById("name")
const email = document.getElementById("email")
const comentario = document.getElementById("comentario")
const form = document.getElementById("form")

form.addEventListener("submit", e=> {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\-\w{2,3})+$/
    let entrar = false
    if(nombre.value.lenght <3){
        window.alert('El nombre no es válido')
        entrar = true
    }

    console.log(regexEmail.text(email.value))
    if(regexEmail.text(email.value)){
        window.alert('El email no es válido')
        entrar = true
    }
    
    if(comentario.value.lenght <10){
        window.alert('El comentario es muy corto')
        entrar = true
    }

    if(entrar){
        alert('Formulario tuvo un error')
    }else{
        alert('Formulario enviado satisfactoriamente')

    }
    
})
