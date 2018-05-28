window.addEventListener("scroll", checkPagePos);

function checkPagePos() {
    let nav = document.getElementById('nav');
    if(window.scrollY>100) {
        if(nav.classList.contains('fixed-nav')===false){
            nav.classList.toggle('fixed-nav');
        }
    }
    else {
        if(nav.classList.contains('fixed-nav')) {
            nav.classList.toggle('fixed-nav');
        }     
    }
}