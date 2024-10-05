class Cumpleaños {
    constructor(id, nombre, fecha) {
        this.id = id;
        this.nombre = nombre;
        this.fecha = new Date(fecha);
    }

    calcularEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fecha.getFullYear();
        const mes = hoy.getMonth() - this.fecha.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fecha.getDate())) {
            edad--;
        }
        return edad;
    }
}

class ListaDeCumpleaños {
    constructor() {
        this.cumpleaños = [];
        this.idActual = 0;
    }

    agregarCumpleaños(nombre, fecha) {
        const nuevoCumpleaños = new Cumpleaños(this.idActual++, nombre, fecha);
        this.cumpleaños.push(nuevoCumpleaños);
    }

    eliminarCumpleaños(id) {
        this.cumpleaños = this.cumpleaños.filter(cumple => cumple.id !== id);
    }

    limpiarCumpleaños() {
        this.cumpleaños = [];
    }

    obtenerCumpleañosOrdenados() {
        return this.cumpleaños.sort((a, b) => a.fecha - b.fecha);
    }
}
