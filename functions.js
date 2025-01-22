/*
Pendiente:
Que funcionen las stats de los participantes(4)
Comprobar que no hayan vehiculos,participantes o circuitos con nombres repetidos(3)
Asignar un participante a un circuito/hacer el formulario de creacion de una carrera(5)
*/
var Vehiculos = [];
var Participantes = [];
var Circuitos = [];
Vehiculos[0] = new Coche("Toyota", "media", 10, 30);
Vehiculos[1] = new Coche("BMV", "dura", 25, 40);
Vehiculos[2] = new Motocicleta("Mercedes", "dura", 50, 70);
Participantes[0] = new Participante("Mario", Vehiculos[0]);
Participantes[1] = new Participante("Luigi", Vehiculos[1]);
Participantes[2] = new Participante("Wario", Vehiculos[2]);
Circuitos[0] = new Circuito("Copa_Estrella", 30, 10);
Circuitos[1] = new Circuito("Copa_Trifuerza", 60, 20);
Circuitos[2] = new Circuito("Copa_Especial", 15, 30);


listarModelos();
listarParticipantes();
listarCircuitos();
console.log(Participantes);
document.getElementById("op1").onclick = function () {

}

document.getElementById("op2").onclick = function () {
    document.getElementById("menu-div").style.display = "none";
    document.getElementById("form1").style.display = "flex";
}

document.getElementById("op3").onclick = function () {
    document.getElementById("menu-div").style.display = "none";
    document.getElementById("form2").style.display = "flex";
}

document.getElementById("op4").onclick = function () {
    document.getElementById("menu-div").style.display = "none";
    document.getElementById("form3").style.display = "flex";
}

document.getElementById("op5").onclick = function () {
    document.getElementById("menu-div").style.display = "none";
    document.getElementById("form4").style.display = "flex";
}

document.querySelectorAll(".volver").forEach(button => {
    button.addEventListener("click", volver);
});

//Funcion para guardar un vehiculo
document.getElementById("guardarV").onclick = function () {
    var modelo = document.getElementById("modelo").value;
    var traccion = document.getElementById("traccion").value;
    var velMin = document.getElementById("velMin").value;
    var velMax = document.getElementById("velMax").value;
    var tipo = document.getElementById("tipo").value;
    if (!modelo || !velMin || !velMax) {
        alert("Porfavor, asegurate de no dejar ningun campo en blanco");
    } else if (velMin > velMax || velMin <= 0) {
        alert("ERROR: Asegurate de que la velocidad del coche sea adecuada");
    } else {
        if (tipo == "coche") {
            var vehiculo = new Coche(modelo, traccion, velMin, velMax);
        } else {
            var vehiculo = new Motocicleta(modelo, traccion, velMin, velMax);
        }
        Vehiculos.push(vehiculo);
        listarModelos();
        alert("Vehiculo Guardado con exito!");
        volver();
        limpiarInputs();
    }
}
//Funcion para cargar un vehiculo
document.getElementById("cargarV").onclick = function () {
    var modelo = document.getElementById("modelo").value;
    if (!modelo) {
        alert("Porfavor, selecciona el modelo que quieras cargar");
    } else {
        var found = false;
        var vehiculoEncontrado;
        for (let i = 0; i < Vehiculos.length; i++) {
            if (Vehiculos[i].modelo == modelo) {
                vehiculoEncontrado = Vehiculos[i];
                found = true;
                break;
            }
        }
        if (!found) {
            alert("Vehiculo no encontrado");
        } else {
            document.getElementById("traccion").value = vehiculoEncontrado.traccion;
            document.getElementById("velMin").value = vehiculoEncontrado.avance_min;
            document.getElementById("velMax").value = vehiculoEncontrado.avance_max;
            if (vehiculoEncontrado instanceof Coche) {
                document.getElementById("tipo").value = "coche";
            } else {
                document.getElementById("tipo").value = "moto";
            }
        }
    }
}

//Funcion para guardar un participante
document.getElementById("guardarP").onclick = function () {
    var nombre = document.getElementById("participante").value;
    var vehiculo = document.getElementById("vehiculos").value;
    if (!nombre) {
        alert("Porfavor, asegurate de no dejar ningun campo en blanco");
    } else {
        var participante = new Participante(nombre, vehiculo);
        var array = [1,2,3];
        participante.set(array);
        Participantes.push(participante);
        listarParticipantes();
        alert("Participante Guardado con exito!");
        volver();
        limpiarInputs();
    }
}
//Funcion para cargar un participante
document.getElementById("cargarP").onclick = function () {
    var nombre = document.getElementById("participante").value;
    if (!nombre) {
        alert("Porfavor, selecciona el nombre del participante que quieras cargar");
    } else {
        var found = false;
        var participanteEncontrado;
        for (let i = 0; i < Participantes.length; i++) {
            if (Participantes[i].nombre == nombre) {
                participanteEncontrado = Participantes[i];
                found = true;
                break;
            }
        }
        if (!found) {
            alert("Participante no encontrado");
        } else {
            document.getElementById("vehiculos").value = participanteEncontrado.vehiculo.modelo;
            if (participanteEncontrado.historial) {
                document.getElementById("stats").value = participanteEncontrado.historial;
            }
        }
    }
}

//Funcion para guardar un Circuito
document.getElementById("guardarC").onclick = function () {
    var nombre = document.getElementById("nombreCircuito").value;
    var longitud = document.getElementById("longitud").value;
    var tiempo = document.getElementById("tiempo").value;
    if (!nombre || !longitud) {
        alert("Porfavor, asegurate de no dejar ningun campo en blanco");
    } else {
        var circuito = new Circuito(nombre, tiempo, longitud);
        Circuitos.push(circuito);
        listarCircuitos()
        alert("Circuito Guardado con exito!");
        volver();
        limpiarInputs();
    }
}

function limpiarInputs() {
    // Limpiar todos los inputs, excepto los de tipo 'button'
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.type !== 'button') {
            input.value = ''; // Limpiar el valor
        }
    });

    // Limpiar los select
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.selectedIndex = 0; // Restablecer al primer valor
    });
}

// Función para volver al menú principal y ocultar formularios
function volver() {
    document.getElementById("menu-div").style.display = "flex";
    const forms = ["form1", "form2", "form3", "form4"];
    forms.forEach(formId => {
        const formElement = document.getElementById(formId);
        if (formElement) {
            formElement.style.display = "none";
        }
    });
    limpiarInputs();
}

//Funcion para listar los modelos en los datalists o selects
function listarModelos() {
    var lista = document.getElementById("listaModelos");
    var lista2 = document.getElementById("vehiculos");
    lista.innerHTML = "";
    lista2.innerHTML = "";
    for (let i = 0; i < Vehiculos.length; i++) {
        lista.innerHTML += '<option value=' + Vehiculos[i].modelo + '>' + Vehiculos[i].modelo + '</option>';
        lista2.innerHTML += '<option value=' + Vehiculos[i].modelo + '>' + Vehiculos[i].modelo + '</option>';
    }
}
//Funcion para listar los participantes en los datalists o selects
function listarParticipantes() {
    var lista = document.getElementById("participantes");
    var lista2 = document.getElementById("participanteC");
    lista.innerHTML = "";
    lista2.innerHTML = "";
    for (let i = 0; i < Participantes.length; i++) {
        lista.innerHTML += '<option value=' + Participantes[i].nombre + '>' + Participantes[i].nombre + '</option>';
        lista2.innerHTML += '<option value=' + Participantes[i].nombre + '>' + Participantes[i].nombre + '</option>';
    }
}

//Funcion para listar los Circuitos en los datalists o selects
function listarCircuitos() {
    var lista = document.getElementById("Circuitos");
    var lista2 = document.getElementById("circuitosC");
    lista.innerHTML = "";
    lista2.innerHTML = "";
    for (let i = 0; i < Circuitos.length; i++) {
        lista.innerHTML += '<option value=' + Circuitos[i].nombre + '>' + Circuitos[i].nombre + '</option>';
        lista2.innerHTML += '<option value=' + Circuitos[i].nombre + '>' + Circuitos[i].nombre + '</option>';
    }
}