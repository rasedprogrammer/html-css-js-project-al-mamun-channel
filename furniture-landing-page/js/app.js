const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click',function(e) {
    mobileMenuButton.classList.toggle('bx-x');
    mobileMenu.classList.toggle('hidden');
})

const header = document.querySelector('header');
window.addEventListener('scroll',function(e) {
    if(this.window.screenY > 100){
        header.classList.toggle('sticky',window.scrollY > 0);
        header.style.backgroundColor='#fff';
        header.classList.add('shadow');
    }else{
        header.classList.remove('shadow');
    }
})