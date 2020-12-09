class Persona {
    constructor (nombre, apellido, mail, usuario, pass) {
        this.name = nombre;
        this.lastname = apellido;
        this.email = mail;
        this.username = usuario;
        this.password = pass;
        this.active = true;
    }
}

let persona1 = new Persona ('Maria', 'Martinez', 'm@gmail.com', 'maria', '123');
let persona2 = new Persona ('Pepito', 'Perez', 'p@gmail.com', 'pepito', '456');
let persona3 = new Persona ('Juan', 'Ruiz', 'j@gmail.com', 'juan', '789');

let usuarios = [persona1, persona2, persona3];

function isInputEmpty(text) {
    return text == '' ? true :  false;
}
function createUser() {
    let name = prompt('Ingrese el nombre');
    let lastname = prompt('Ingrese el nombre');
    let email = prompt('Ingrese el nombre');
    let username = prompt('Ingrese el nombre');
    let password = prompt('Ingrese el nombre');
    let newUser = new Persona(name, lastname, email, username, password);
    return newUser;
}
function addUser () {
    try {
        let newUser = createUser();
        for (const property in newUser) {
            if (isInputEmpty(newUser[property])) {
                console.log(`${property}: ${newUser[property]}`);
                throw new Error(`${property}: ${newUser[property]}, no pueden haber datos vacios`);
            }
        }
        usuarios.push(newUser);
    } catch (error) {
        alert(error);
        console.log(error);
    }
}

function login() {
    try {
        let user = prompt ('Ingrese usuario');
        let passw = prompt ('Ingrese pass');
        if (isInputEmpty(user) || isInputEmpty(passw)) {
            throw new Error ('El usurio y la contrasenha no pueden ir vacios');
        }
        for (let i = 0; i < usuarios.length; i++) {
            const element = usuarios[i];
                if (element.usuario == user && element.pass == passw && element.active) {
                    alert ('Bienvenido');
                    break;
                }
        }
        throw new Error ('Login incorrecto');
    } catch (error) {
        console.log (error);
        alert(error)
    }
}

function editUser() {
    let username = prompt('Ingrese el nombre de usuario')
    const resultado = usuarios.findIndex( user => user.username === username );
    if (resultado >= 0) {
        let tempUser = createUser();
        usuarios[resultado] = tempUser;
    } else {
        alert('El usuario no existe')
    }
}