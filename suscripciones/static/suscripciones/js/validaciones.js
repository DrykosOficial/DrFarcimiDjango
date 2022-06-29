/*FORMULARIO DE REGISTRO CON JS*/
if (document.body.classList.contains('')) {
    var usuario = document.getElementsByName('username')[0];
    var contrasenna = document.getElementsByName('password')[0];
    var correo = document.getElementsByName('email')[0];




    function JsRegistrar() {
        var okay = true;
        var usuarioValue = usuario.value.trim();
        var correoValue = correo.value.trim();
        var contrasennaValue = contrasenna.value.trim();

        if (usuarioValue === '') {
            setErrorFor(usuario, 'No puede dejar el usuario en blanco.')
            okay = false;

        } else {
            setSuccessFor(usuario);
        }
        if (correoValue === '') {
            setErrorFor(correo, 'No puede dejar el correo electrónico en blanco');
            okay = false;
        } else if (!isEmail(correoValue)) {
            setErrorFor(correo, 'No ingreso un correo electrónico válido');
            okay = false;
        } else {
            setSuccessFor(correo);
        }

        if (contrasennaValue === '') {
            setErrorFor(contrasenna, 'No debe dejar en blanco la contraseña');
            okay = false;
        } else {
            setSuccessFor(contrasenna);
        }
        return okay;
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







if (document.body.classList.contains('registro')) {

    $('#form-registro').on('submit', function(e) {
        $.ajax({
            url: '/knox/valida-form-registro/',
            type: 'POST',
            dataType: "json",
            beforeSend: function(xhr, settings) {
                xhr.setRequestHeader("X-CSRFToken", '{{ csrf_token }}');
            },
            data: $(this).serialize(),
            success: function(response) {
                if (JSON.stringify(response).includes('url')) {
                    window.location = JSON.parse(JSON.stringify(response.url));
                } else {
                    $('#error-registro').html(JSON.parse(JSON.stringify(response['mensaje'])));
                }
            },
        });
        e.preventDefault();
    });
}


if (document.body.classList.contains('login1')) {

    $('#form-login').on('submit', function(e) {
        $.ajax({
            url: '/knox/valida-form/',
            type: 'POST',
            dataType: "json",
            beforeSend: function(xhr, settings) {
                xhr.setRequestHeader("X-CSRFToken", '{{ csrf_token }}');
            },
            data: $(this).serialize(),
            success: function(response) {
                if (JSON.stringify(response).includes('url')) {
                    window.location = JSON.parse(JSON.stringify(response.url));
                } else {
                    $('#error-login').html(JSON.parse(JSON.stringify(response['mensaje'])));
                }
            },
        });
        e.preventDefault();
    });
}






















if (document.body.classList.contains('login1')) {
    const csrfToken = $("input[name=csrfmiddlewaretoken]").val();
    $('#form-login').on('submit', function(e) {
        $.ajax({
            url: '/knox/valida-form/',
            type: 'POST',
            data: {
                'data': $(this).serialize(),
                'csrfmiddlewaretoken': csrfToken

            },
            success: function(response) {

                $('#error-login').html(JSON.parse(JSON.stringify(response['mensaje'])));
            },
        });
        e.preventDefault();
    });
}









$(document).ready(function() {
    BindStudents();
});

$('#btnSubmit').click(function() {

    //let idservicio = $('#txtId').val();
    let nombreservicio = $('#txtservicio').val();
    let precio = $('#txtprecio').val();

    $.ajax({
        type: 'POST',
        dataType: 'json',
        data: {
            // "idservicio": idservicio,
            "nombreservicio": nombreservicio,
            "precio": precio
        },

        url: "/API/lista_servicio",
        error: function(xhr, status, error) {

            var err_msg = ''
            for (var prop in xhr.responseJSON) {
                err_msg += prop + ': ' + xhr.responseJSON[prop] + '\n';
            }

            alert(err_msg);
        },
        success: function(result) {

            BindStudents();
            alert('Data Saved Successfully.');

            $('#txtId').val("");
            $('#txtservicio').val("");
            $('#txtprecio').val("");

        }
    });
});

function BindStudents() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "/API/lista_servicio",
        success: function(result) {

            var totalCount = result.length;
            var structureDiv = "";
            for (let i = 0; i < totalCount; i++) {
                structureDiv += "<tr>" +
                    "     <td>" + result[i].idservicio + "</td>" +
                    "      <td>" + result[i].nombreservicio + "</td>" +
                    "             <td>" + result[i].precio + "</td>" +
                    "              <td><button class='btn btn-link' onclick='return confirm(\"Are you sure you want to delete this record?\",DeleteRow(" + result[i].id + "))'>Delete</button></td>" +
                    "           </tr>";
            }

            $("#divBody").html(structureDiv);

        }
    });

}

function DeleteRow(id) {

    $.ajax({
        type: 'DELETE',
        dataType: 'json',

        url: "http://127.0.0.1:8000/student/" + id + "/",
        error: function(xhr, status, error) {

            var err_msg = ''
            for (var prop in xhr.responseJSON) {
                err_msg += prop + ': ' + xhr.responseJSON[prop] + '\n';
            }

            alert(err_msg);
        },
        success: function(result) {

            BindStudents();
        }
    });
}