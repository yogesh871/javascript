let menu =  document.getElementById('menu-bar')
let close =  document.getElementById('close-bar')
let offcanvas = document.querySelector(".offcanvas")



menu.addEventListener('click', () => {
    offcanvas.style.marginRight  = "0px";
})

close.addEventListener('click', () => {
    offcanvas.style.marginRight  = "-250px";
})