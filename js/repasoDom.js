/* Get - Obtener - Element - Elemento - ById - PorId */
const inputUser = document.getElementById('idInputUser')
const inputPass = document.getElementById('idInputPass')
const botonEnviar = document.getElementById('botonEnviar')

const divErrorUser = document.getElementById('idErrorUser')
const divErrorPass = document.getElementById('idErrorPass')

divErrorUser.classList.add('d-none')
divErrorPass.classList.add('d-none')

const objForm = {
    user: '',
    pass: ''
}

const inputsForm = (event) => {
    const { name, value } = event.target
    //console.log(name)
    //console.log(value) /* target muestra la info del input */
    objForm[name] = value
    if (name === 'user' && value !== '') {
        divErrorUser.classList.add('d-none')
    }
    if (name === 'pass' && value !== '') {
        divErrorPass.classList.add('d-none')
    }
}

const sendData = () => {
    const { user, pass } = objForm
    if (user && pass) {
        console.log(objForm)
    }

    if (!user) {
        divErrorUser.classList.remove('d-none')
    }

    if (!pass) {
        divErrorPass.classList.remove('d-none')
    }
}



inputUser.addEventListener('input', inputsForm)/*add - Agregar - Event - Evento - Listener - Escuchar*/
inputPass.addEventListener('input', inputsForm)
botonEnviar.addEventListener('click', sendData)