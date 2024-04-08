const fondo = document.querySelector(".fondo");
const loginlink = document.querySelector(".login-link");
const registralink = document.querySelector(".registar-link");
const btn = document.querySelector(".btnn");
const iconocerrar = document.querySelector(".icono-cerrar");

registralink.addEventListener("click", () =>{
    fondo.classList.add('active');
});


loginlink.addEventListener("click", () => {
    fondo.classList.remove('active');
});

btn.addEventListener("click", () =>{
    fondo.classList.add('active-btn');
});

iconocerrar.addEventListener("click", () =>{
    fondo.classList.remove('active-btn');
});