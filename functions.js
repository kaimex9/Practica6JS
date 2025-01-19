var Vehiculos = [];
var Participantes = [];
var Circuito = [];
Vehiculos[0] = new Coche("Toyota", "media", 10, 30);
Vehiculos[1] = new Coche("BMV", "dura", 25, 40);
Vehiculos[2] = new Motocicleta("Mercedes", "dura", 50, 70);
Participantes[0] = new Participante("Mario", Vehiculos[0]);
Participantes[1] = new Participante("Luigi", Vehiculos[1]);
Participantes[2] = new Participante("Wario", Vehiculos[2]);
console.log(Participantes);
listarModelos();
listarParticipantes();
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
        console.log(Vehiculos)
    }
}

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

function listarModelos() {
    //Listar modelos en el formulario de vehiculos
    var lista = document.getElementById("listaModelos");
    var lista2 = document.getElementById("vehiculos");
    lista.innerHTML = "";
    lista2.innerHTML = "";
    if (Vehiculos.length > 0) {
        for (let i = 0; i < Vehiculos.length; i++) {
            lista.innerHTML += '<option value=' + Vehiculos[i].modelo + '>' + Vehiculos[i].modelo + '</option>';
            lista2.innerHTML += '<option value=' + Vehiculos[i].modelo + '>' + Vehiculos[i].modelo + '</option>';
        }
    }
}

function listarParticipantes() {
    //Listar modelos en el formulario de vehiculos
    var lista = document.getElementById("participantes");
    lista.innerHTML = "";
    if (Participantes.length > 0) {
        for (let i = 0; i < Participantes.length; i++) {
            lista.innerHTML += '<option value=' + Participantes[i].nombre + '>' + Participantes[i].nombre + '</option>';
        }
    }
}

document.getElementById("guardarP").onclick = function () {
    var nombre = document.getElementById("participante").value;
    var vehiculo = document.getElementById("vehiculos").value;
    if (!nombre) {
        alert("Porfavor, asegurate de no dejar ningun campo en blanco");
    } else {
        var participante = new Participante(nombre, vehiculo);
        Participantes.push(participante);
        listarParticipantes();
        console.log(Participantes);
    }
}

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
