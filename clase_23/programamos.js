class Persona {
    constructor(name, apellido, edad) {
        this.apellido = apellido;
        this.nombre = name;
        this.edad = edad;
    }

    fullname () {
        return `${this.nombre} ${this.apellido}`;
    }

    es_mayor () {
        if (this.edad < 18) {
            return false;
        } else {
            return true;
        }
    }
}

let adriana = new Persona('Adriana', 'Limon', '19');
let franco = new Persona('Franco', 'Cragnolini', '25');
let juan = new Persona('Juan', 'Ruiz', '15');

let mayores_de_edad = [];

function agregarALista(persona) {
    if (persona.es_mayor()) {
        mayores_de_edad.push(persona);
    }
}