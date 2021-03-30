//Implementar modo oscuro
const switchButton = document.getElementById("switch")
const changeColor = document.getElementById("bs-color")
const circlesDarkOne = document.getElementById("circles_dark-one")
const circlesDarkTwo = document.getElementById("circles_dark-two")
const targetServiceOne = document.getElementById("target-service-changeOne")
const targetServiceTwo = document.getElementById("target-service-changeTwo")
const targetServiceThree = document.getElementById("target-service-changeThree")
const titleDarkOne = document.getElementById("tst-md-one")
const titleDarkTwo = document.getElementById("tst-md-two")
const titleDarkThree = document.getElementById("tst-md-three")
const paragraphOne = document.getElementById("tsp-md_one")
const paragraphTwo = document.getElementById("tsp-md_two")
const paragraphThree = document.getElementById("tsp-md_three")
const bigCircle = document.getElementById("big-circle--change")
const catchasP = document.getElementById("irp-dark-p")
const catchasA = document.getElementById("irp-dark-a")
const changeHr = document.getElementById("changeHr")
const nesDark = document.getElementById("nesDark")
const navAnclasO = document.getElementById("aOne") 
const navAnclasT = document.getElementById("aTwo") 
const navAnclasTr = document.getElementById("aThree") 
const navAnclasF = document.getElementById("aFour") 
const footerDark = document.getElementById("fc-dark")
const buttonMain = document.getElementById("mb-dark")
const buttonTarget = document.getElementById("bt-dark")


//Respuestas interactivas para el usuario seccion "Questions of clients"
const questinonsCLient = document.getElementById("questions-switch-one")
const questinonsCLientT = document.getElementById("questions-switch-two")
const questinonsCLientTr = document.getElementById("questions-switch-three")
const dropDown = document.getElementById("visisbility-answer")
const dropDownT = document.getElementById("visisbility-answerT")
const dropDownTr = document.getElementById("visisbility-answerTr")


//Transiciones a la secccion de "Trusted by brands "
const recommendedIcons = document.getElementById("recommendedIcons")
const changeRecommended = document.getElementById("ckImg")
const changeRecommended = document.getElementById("ckImg")
const changeRecommended = document.getElementById("ckImg")

//Modo oscuro
switchButton.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    switchButton.classList.toggle("active")
    changeColor.classList.toggle("active-bs")
    circlesDarkOne.classList.toggle("hidden-circlesdark")
    circlesDarkTwo.classList.toggle("hidden-circlesdark")
    targetServiceOne.classList.toggle("target--dark")
    targetServiceTwo.classList.toggle("target--dark")
    targetServiceThree.classList.toggle("target--dark")
    titleDarkOne.classList.toggle("tst--dark")
    titleDarkTwo.classList.toggle("tst--dark")
    titleDarkThree.classList.toggle("tst--dark")
    paragraphOne.classList.toggle("tsp--dark")
    paragraphTwo.classList.toggle("tsp--dark")
    paragraphThree.classList.toggle("tsp--dark")
    bigCircle.classList.toggle("bg-dark")
    catchasP.classList.toggle("irp-dark")
    catchasA.classList.toggle("irp-dark")
    changeHr.classList.toggle("irp-dark")
    nesDark.classList.toggle("nes-dark")
    navAnclasO.classList.toggle("rsa-dark")
    navAnclasT.classList.toggle("rsa-dark")
    navAnclasTr.classList.toggle("rsa-dark")
    navAnclasF.classList.toggle("rsa-dark")
    footerDark.classList.toggle("nes-dark")
    buttonMain.classList.toggle("mb-dark")
    buttonTarget.classList.toggle("bt-dark")
    questinonsCLient.classList.toggle("arrow-q--dark")
    questinonsCLientT.classList.toggle("arrow-q--dark")
    questinonsCLientTr.classList.toggle("arrow-q--dark")
})

//Transiciones a la secccion de "Trusted by brands "
recommendedIcons.addEventListener("click", () => {
    changeRecommended.classList.toggle("Ck-img--change")
})


//Respuestas interactivas para el usuario seccion "Questions of clients"
questinonsCLient.addEventListener("click", () => dropDown.classList.toggle("answer-Block"))
questinonsCLientT.addEventListener("click", () => dropDownT.classList.toggle("answer-Block"))
questinonsCLientTr.addEventListener("click", () => dropDownTr.classList.toggle("answer-Block"))

