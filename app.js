const nombre = document.getElementById("name")
const email = document.getElementById("email")
const mensaje = document.getElementById("menssage")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnigns")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length < 6) {
        warnings += 'El Nombre no es valido.<br>'
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if (!regexEmail.test(email.value)) {
        warnings += 'El Email no es valido.<br>'
        entrar = true
    }
    if (mensaje.value.length < 5) {
        warnings += 'El Mensaje no es valido.<br>'
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        alert("Mensaje enviado")
    }
})