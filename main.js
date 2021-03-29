//Implementar modo oscuro

const switchButton = document.getElementById("switch")
const changebk = document.getElementById("bs-change") 

switchButton.addEventListener("click", () => {
    document.body.classList.toggle("dark") //toggle HTML body la clase 'dark'
    switchButton.classList.toggle("active")//toggle HTML button con el id='switch' con la clase 'active'
})






//Transiciones a la secccion de "Trusted by brands "
//Respuestas interactivas para el usuario seccion "Questions of clients"

