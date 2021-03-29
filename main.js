//Implementar modo oscuro

const switchButton = document.getElementById('switch')

 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark') //toggle the HTML body the class 'dark'
    switchButton.classList.toggle('active')//toggle the HTML button with the id='switch' with the class 'active'
})


//Transiciones a la secccion de "Trusted by brands "
//Respuestas interactivas para el usuario seccion "Questions of clients"

