const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
});

/********************* LOG IN ****************************/ 
const boton = document.getElementById('btnEntrar');
boton.addEventListener('click',fnValidar)

function fnValidar()
{
    const user =  document.getElementById('usuario');
    const pass =  document.getElementById('password');

  
    if(user.value == "Admin" && pass.value == "123")
    {
        alert("Datos Correctos");
    }
    else
    {
        alert("Datos Incorrectos");
    }


}