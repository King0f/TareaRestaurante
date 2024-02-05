    //Llamando a las validaciones de todos los inputs
    document.querySelector('#name').addEventListener('input', validarName);
    document.querySelector('#email').addEventListener('input', validarEmail);
    document.querySelector('#subject').addEventListener('input', validarSubject);
    document.querySelector('#message').addEventListener('input', validarMessage);
    
    document.querySelector('#name').addEventListener('blur', validarName);
    document.querySelector('#email').addEventListener('blur', validarEmail);
    document.querySelector('#subject').addEventListener('blur', validarSubject);
    document.querySelector('#message').addEventListener('blur', validarMessage);

/**
 * La función `validarName` comprueba si el nombre de entrada tiene al menos 5 caracteres y muestra un
 * mensaje de error si no es así.
 */
function validarName() {
    const name = document.querySelector('#name').value;
    const errorElement = document.querySelector('#nameError');
    if (name.length < 5) {
        errorElement.textContent = 'El nombre debe contener al menos 5 caracteres.';
    } else {
        errorElement.textContent = '';
    }
}

/**
 * La función `validarEmail` comprueba si el valor de entrada de un campo de correo electrónico es una
 * dirección de correo electrónico válida y muestra un mensaje de error si no lo es.
 */
function validarEmail() {
    const email = document.querySelector('#email').value;
    const errorElement = document.querySelector('#emailError');
    if (!/\S+@\S+\.\S+/.test(email)) {
        errorElement.textContent = 'Ingrese un correo electrónico válido.';
    } else {
        errorElement.textContent = '';
    }
}

/**
 * La función `validarSubject` verifica si la entrada del asunto tiene al menos 5 caracteres y muestra
 * un mensaje de error si no es así.
 */
function validarSubject() {
    const subject = document.querySelector('#subject').value;
    const errorElement = document.querySelector('#subjectError');
    if (subject.length < 5) {
        errorElement.textContent = 'El asunto debe contener al menos 5 caracteres.';
    } else {
        errorElement.textContent = '';
    }
}

/**
 * La función `validarMessage` verifica si la entrada del mensaje tiene al menos 5 caracteres y muestra
 * un mensaje de error si no es así.
 */
function validarMessage() {
    const message = document.querySelector('#message').value;
    const errorElement = document.querySelector('#messageError');
    if (message.length < 5) {
        errorElement.textContent = 'El mensaje debe contener al menos 5 caracteres.';
    } else {
        errorElement.textContent = '';
    }
}

/* El fragmento de código agrega un detector de eventos al evento de entrada del formulario de
contacto. Cuando se cambia cualquier campo de entrada dentro del formulario, se ejecuta la función. */
document.querySelector('#contactForm').addEventListener('input', function() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;

    const submitButton = document.querySelector('#submitButton');
    /* El bloque de código verifica la longitud de los campos de entrada "nombre", "asunto" y "mensaje"
    para asegurarse de que tengan al menos 5 caracteres. También utiliza una expresión regular para
    validar el campo de entrada "correo electrónico" para garantizar que sea un formato de dirección
    de correo electrónico válido. */
    if (name.length >= 5 && /\S+@\S+\.\S+/.test(email) && subject.length >= 5 && message.length >= 5) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

/* El código está agregando un evento oyente del
evento de envío del formulario con el ID "contactForm". */
    document.querySelector('#contactForm').addEventListener('submit', function(event) {
    document.querySelector('#spinner').style.display = 'block';
    
});