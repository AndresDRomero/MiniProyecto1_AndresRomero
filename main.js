function display_menu(){
    let anchor = document.getElementsByClassName('nav-enlace');
    for(let i =0; i< anchor.length; i++) {
        anchor[i].classList.toggle('desaparece');
    }
}