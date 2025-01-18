var Vehiculos = [];
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
    lista.innerHTML = "";
    if (Vehiculos.length > 0) {
        for (let i = 0; i < Vehiculos.length; i++) {
            lista.innerHTML += '<option value=' + Vehiculos[i].modelo + '>' + Vehiculos[i].modelo + '</option>';
        }
    }

    //Listar modelos en el formulario de participantes
    var lista2 = document.getElementById("vehiculos");
    lista2.innerHTML = "";
    if (Vehiculos.length > 0) {
        for (let i = 0; i < Vehiculos.length; i++) {
            lista2.innerHTML += '<option value=' + Vehiculos[i].modelo + '>' + Vehiculos[i].modelo + '</option>';
        }
    }
}
