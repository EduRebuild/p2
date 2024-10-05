class CumpleañosCTRL {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;

        this.vista.vincularAgregarCumpleaños(this.manejarAgregarCumpleaños.bind(this));
        this.vista.vincularEliminarCumpleaños(this.manejarEliminarCumpleaños.bind(this));
        this.vista.vincularLimpiarCumpleaños(this.manejarLimpiarCumpleaños.bind(this));

        this.mostrarCumpleaños();
    }

    manejarAgregarCumpleaños(nombre, fecha) {
        this.modelo.agregarCumpleaños(nombre, fecha);
        this.mostrarCumpleaños();
    }

    manejarEliminarCumpleaños(id) {
        this.modelo.eliminarCumpleaños(id);
        this.mostrarCumpleaños();
    }

    manejarLimpiarCumpleaños() {
        this.modelo.limpiarCumpleaños();
        this.mostrarCumpleaños();
    }

    mostrarCumpleaños() {
        this.vista.mostrarCumpleaños(this.modelo.obtenerCumpleañosOrdenados());
    }
}
