/*
Pendiente:

Que funcionen las stats de los participantes
Hacer boton de "volver"
Comprobar que no hayan vehiculos,participantes o circuitos con nombres repetidos
que el min no sea mayor que el max
Asignar un participante a un circuito
Aplicarle un degradado a los botones
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
Circuitos[2] = new Circuito("Copa_Especial", 15, 15);

listarModelos();
listarParticipantes();
listarCircuitos();

document.getElementById("op1").onclick = function() {
    
}

document.getElementById("op2").onclick = function() {
    document.getElementById("menu-div").style.display = "none";
    document.getElementById("form1").style.display = "flex";
}

document.getElementById("op3").onclick = function() {
    document.getElementById("menu-div").style.display = "none";
    document.getElementById("form2").style.display = "flex";
}

document.getElementById("op4").onclick = function() {
    document.getElementById("menu-div").style.display = "none";
    document.getElementById("form3").style.display = "flex";
}

document.getElementById("op5").onclick = function() {
    document.getElementById("menu-div").style.display = "none";
    document.getElementById("form4").style.display = "flex";
}

document.getElementById("volver").onclick = function() {
    document.getElementById("menu-div").style.display = "flex";
    console.log("hola");
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("form4").style.display = "none";
}


//Funcion para guardar un vehiculo
document.getElementById("guardarV").onclick = function () {
    var modelo = document.getElementById("modelo").value;
    var traccion = document.getElementById("traccion").value;
    var velMin = document.getElementById("velMin").value;
    var velMax = document.getElementById("velMax").value;
    var tipo = document.getElementById("tipo").value;
    if (!modelo || !velMin || !velMax) {
        alert("Porfavor, asegurate de no dejar ningun campo en blanco");
    } else {
        if (tipo == "coche") {
            var vehiculo = new Coche(modelo, traccion, velMin, velMax);
        } else {
            var vehiculo = new Motocicleta(modelo, traccion, velMin, velMax);
        }
        Vehiculos.push(vehiculo);
        listarModelos();
        alert("Vehiculo Guardado con exito!");
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
    console.log("abhfija");
    var lista = document.getElementById("Circuitos");
    var lista2 = document.getElementById("circuitosC");
    lista.innerHTML = "";
    lista2.innerHTML = "";
    for (let i = 0; i < Circuitos.length; i++) {
        lista.innerHTML += '<option value=' + Circuitos[i].nombre + '>' + Circuitos[i].nombre + '</option>';
        lista2.innerHTML += '<option value=' + Circuitos[i].nombre + '>' + Circuitos[i].nombre + '</option>';
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
        Participantes.push(participante);
        listarParticipantes();
        alert("Participante Guardado con exito!");
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
        console.log(Circuitos);
        alert("Circuito Guardado con exito!");
    }
}

