// template_ycwl1kp
// service_nwzj30j
// OqRDYKkaj4i6cTFUu

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme") 
    }   
}

function contact(event) {
    event.preventDefault();
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList +=" modal__overlay--visible";

emailjs
    .sendForm(
        'service_nwzj30j',
        'template_ycwl1kp',
        event.target,
        'OqRDYKkaj4i6cTFUu'
).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
}).catch(() => {
    
})
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
}
isModalOpen = true;
document.body.classList += " modal--open"
}
