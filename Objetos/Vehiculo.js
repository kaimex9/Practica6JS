class Vehiculo {
    modelo;
    traccion;
    avance_min;
    avance_max;
    constructor(modelo, traccion, avance_min, avance_max) {
        this.modelo = modelo;
        this.traccion = traccion;
        this.avance_min = avance_min;
        this.avance_max = avance_max;
    }

}

class Coche extends Vehiculo {
    estado;
    constructor(modelo, traccion, avance_min, avance_max) {
        super(modelo, traccion, avance_min, avance_max);
        this.estado;
    }
}

class Motocicleta extends Vehiculo {
    estado;
    constructor(modelo, traccion, avance_min, avance_max) {
        super(modelo, traccion, avance_min, avance_max);
        this.estado;
    }

    get estado() {
        return this.estado;
    }
}

