function showModal(modalId) {
    if(window.innerWidth < 968){return}
    else{
        document.getElementById(modalId).classList.add('modal');
        document.getElementById(modalId).removeAttribute('id');
    }
}

function clickOutside(e,modalId){

    if(e.target.className === 'modal'){
        document.getElementsByClassName(modalId)[0].setAttribute('id','modal-hidden');
    }
}

function showHamburgerMenu(){
    document.getElementById('mobile-menu-hidden').classList.add('mobile-menu-show')
    document.getElementById('mobile-menu-hidden').removeAttribute('id');
    
    
}

function hideHamburgerMenu(){
    document.getElementsByClassName('mobile-menu-show')[0].setAttribute('id','mobile-menu-hidden');
}


let carousel = document.getElementById("carousel");
let btnLeft = document.getElementById("arrow-left");
let btnRight = document.getElementById("arrow-right");

btnLeft.onclick = () => {
    let newValue = '-' + (parseInt(getComputedStyle(carousel).left.replace(/\D/g, '')) - window.innerWidth) + 'px';
    carousel.style.left = newValue;
    console.log("Carousel left set to: ", newValue);
}

btnRight.onclick = () => {
    let newValue = '-' + (parseInt(getComputedStyle(carousel).left.replace(/\D/g, '')) + window.innerWidth) + 'px';
    carousel.style.left = newValue;
    console.log("Carousel left set to: ", newValue);
}