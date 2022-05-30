/*FORMULARIO DE REGISTRO CON JS*/
if (document.body.classList.contains('inisiosecion')) {
    var usuario = document.getElementById('user1');
    var contrasenna = document.getElementById('pass1');
    var contrasenna2 = document.getElementById('pass2');
    var correo = document.getElementById('correo');

    form.addEventListener('submit', e => {
        e.preventDefault();

        JsRegistrar();
    });

    function JsRegistrar() {

        var usuarioValue = usuario.value.trim();
        var correoValue = correo.value.trim();
        var contrasennaValue = contrasenna.value.trim();
        var contrasenna2Value = contrasenna2.value.trim();

        if (usuarioValue === '') {
            setErrorFor(usuario, 'No puede dejar el usuario en blanco.')

        } else {
            setSuccessFor(usuario);
        }
        if (correoValue === '') {
            setErrorFor(correo, 'No puede dejar el correo electrónico en blanco');
        } else if (!isEmail(correoValue)) {
            setErrorFor(correo, 'No ingreso un correo electrónico válido');
        } else {
            setSuccessFor(correo);
        }

        if (contrasennaValue === '') {
            setErrorFor(contrasenna, 'No debe dejar en blanco la contraseña');
        } else {
            setSuccessFor(contrasenna);
        }

        if (contrasenna2Value === '') {
            setErrorFor(contrasenna2, 'No debe dejar en blanco la contraseña');
        } else if (contrasennaValue !== contrasenna2Value) {
            setErrorFor(contrasenna2, 'Las contraseñas no coinciden');
        } else {
            setSuccessFor(contrasenna2);
        }


    }

    function setSuccessFor(input) {
        var formControl = input.parentElement;
        formControl.className = 'formu-control success';
    }


    function setErrorFor(input, message) {
        var formControl = input.parentElement;
        var small = formControl.querySelector('small');
        formControl.className = 'formu-control error';
        small.innerText = message;
    }

    function isEmail(correo) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
    }
}



/*FORMULARIO DE CONTACTO CON JS  */
if (document.body.classList.contains('formulariocontacto')) {
    var usuario = document.getElementById('user1');
    var telefono = document.getElementById('telefono');
    var correo = document.getElementById('correo');
    var mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', e => {
        e.preventDefault();

        JsContacto();
    });

    function JsContacto() {
        var usuarioValue = usuario.value.trim();
        var telefonoValue = telefono.value.trim();
        var correoValue = correo.value.trim();
        var mensajeValue = mensaje.value.trim();


        if (usuarioValue === '') {
            setErrorFor(usuario, 'No puede dejar el Nombre en blanco.')

        } else {
            setSuccessFor(usuario);
        }

        if (telefonoValue === '') {
            setErrorFor(telefono, 'No puede dejar el telefono en blanco.')

        } else {
            setSuccessFor(telefono);
        }

        if (correoValue === '') {
            setErrorFor(correo, 'No puede dejar el correo  en blanco');
        } else if (!isEmail(correoValue)) {
            setErrorFor(correo, 'No ingreso un correo  válido');
        } else {
            setSuccessFor(correo);
        }

        if (mensajeValue === '') {
            setErrorFor(mensaje, 'No puede dejar el mensaje en blanco.')

        } else {
            setSuccessFor(mensaje);
        }
    }

    function setSuccessFor(input) {
        var formControl = input.parentElement;
        formControl.className = 'form-groupoo success';
    }


    function setErrorFor(input, message) {
        var formControl = input.parentElement;
        var small = formControl.querySelector('small');
        formControl.className = 'form-groupoo error';
        small.innerText = message;
    }

    function isEmail(correo) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
    }
}




/*FORMULARIO INICIO SESIÓN CON JQ */


$(document).ready(function() {
    $("#JEnviar").click(function() {
        var nombre = $("#users").val();
        var contrasenna = $("#pass").val();

        if (nombre == "") {
            $("#mensaje1").show();


        } else {
            $("#mensaje1").hide();

        }
        if (contrasenna == "") {
            $("#mensaje2").show();


        } else {
            $("#mensaje2").hide();

        }

    });



});

$.get("static/suscripciones/api/models.json", function(data) {
    $.each(data.marcas, (function(i, marca) {
        $("#marcas").append("<tr><td>" + marca.nombre);

    }));
});

$("#JVER").on("click", function() {
    $("#marcas").toggle();
});