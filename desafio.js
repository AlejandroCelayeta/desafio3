// Ingreso al carrito de compras


//Solicitar tipo de usuario

let tipoUsuario = prompt("Ingrese su opción: " + "1- Soy Usuario 2- Nuevo Usuario 3- Salir");

switch (tipoUsuario) {

    case "1":
        ingresePassword();
        alert("Muchas gracias visitarnos nuevamente")

    case "2":
        alert("Gracias por elegirnos !")
        alert("Por favor ingrese los datos solicitados a continuación");
        break
    case "3":
        let salir = prompt("Desea abandonar el carrito ?" + " Escriba: Y para salir")
        if (salir = y) {
            'ESC'
        }



};

// Password

// Identificación de usuario
function ingresePassword() {
    let inputPassword = prompt("Ingresar password" + ' carrito');
    if ((inputPassword != "") && ((inputPassword == "carrito") || (inputPassword == "carrito"))) {
        alert("Le damos la bienvenida !!");
    }
    while (inputPassword != 'carrito') {
        alert("Error: el password es 'carrito' vuelva a ingresar");
    }

}

// Constructor de nuevo Usuario con método PUSH
class AltaUsuario {
    constructor(nombreUsuario, mailUsuario, categoriaUsuario) {
        this.nombreUsuario = nombreUsuario;
        this.mailUsuario = mailUsuario;
        this.categoriaUsuario = categoriaUsuario;
        this.nuevoUsuario = [];
    }
    agregaUsuario(AltaUsuario) {
        this.nuevoUsuario.push(AltaUsuario);
    }
}


//  Creación del usuario solicitando datos por prompt

const nombreUsuario = prompt("Ingrese un nombre de usuario");
const mailUsuario = prompt("Ingrese una dirección de correo válida");
const categoriaUsuario = prompt("Ingrese el número según se trate: 1-Particular 2-Profesional 3-Docente según se trate");


const agregaUsuario = new AltaUsuario(nombreUsuario, mailUsuario, categoriaUsuario);




//Cargo manualmente usuarios de ejemplo para que se muestren en console.log
const cargaUsuarios = new AltaUsuario("Alejandro", "ale@gmail.com", 1);

const usuario1 = new AltaUsuario("Pedro", "pedro@gmail.com", 1);
const usuario2 = new AltaUsuario("Carlos", "charlie@gmail.com", 2);
const usuario3 = new AltaUsuario("Leo", "leo@gmail.com", 3);
const usuario4 = new AltaUsuario("Fernando", "fer@gmail.com", 2);
const usuario5 = new AltaUsuario("Mariano", "mariano@gmail.com", 3);

//Agrego los usuarios
cargaUsuarios.agregaUsuario(usuario1);
cargaUsuarios.agregaUsuario(usuario2);
cargaUsuarios.agregaUsuario(usuario3);
cargaUsuarios.agregaUsuario(usuario4);
cargaUsuarios.agregaUsuario(usuario5);

//Muestra usuarios agregados
console.log(agregaUsuario);

//Muestro usuario nuevo
console.log(cargaUsuarios.nuevoUsuario)

//Filtrado con Método Filter para búsqueda de usuarios docentes (categoría 3) y lo muestra en console.log

const usuariosDocentes = cargaUsuarios.nuevoUsuario.filter(nuevoUsuario => nuevoUsuario.categoriaUsuario == "3")
console.log(usuariosDocentes);


//Clase Libros disponibles para la compra con Método Push


class Libro {
    constructor(idLibro, precioLibro, tituloLibro, idiomaLibro, autorLibro, tematicaLibro, paginasLibro, tipoTapaLibro, isbnLibro, editorialLibro, fechaPublicacionLibro) {
        this.idLibro = idLibro;
        this.precioLibro = precioLibro;
        this.tituloLibro = tituloLibro;
        this.idiomaLibro = idiomaLibro;
        this.autorLibro = autorLibro;
        this.tematicaLibro = tematicaLibro;
        this.paginasLibro = paginasLibro;
        this.tipoTapaLibro = tipoTapaLibro;
        this.isbnLibro = isbnLibro;
        this.editorialLibro = editorialLibro
        this.fechaPublicacionLibro = fechaPublicacionLibro
        this.librosNuevos = [];
    }
    inventarioLibro(Libro) {
        this.librosNuevos.push(Libro);
    }
}

// Cargo manualmente libros de ejemplo para que se muestren en console.log
const inventarioLibro = new Libro("idLibro", "precioLibro", "tituloLibro", "idiomaLibro", "autorLibro", "tematicaLibro", "paginasLibro", "tipoTapaLibro", "isbnLibro", "editorialLibro", "fechaPublicacionLibro");
//

const cargarLibro = new Libro("1", "1000", "HTML para principiantes", "Español", "Carlos Pérez", "Informática", "256", "Dura", "25640", "Mataburros", "Enero 2022")
//Cargo manualmente libros para que se muestren en console.log

const libro2 = new Libro(2, 1300, "CSS para principiantes", "Español", "Jorge Pedroza", "Informática", 340, "Dura", 25641, "Mataburros", "Febrero 2022");
const libro3 = new Libro(3, 1600, "Java Script para principiantes", "Español", "Silvia Perotti", "Informática", 310, "Blanda", 25661, "Mataburros", "Febrero 2021");
const libro4 = new Libro(4, 2300, "Java Script para principiantes", "Español", "Alejandro Cáceres", "Informática", 270, "Blanda", 25961, "Mataburros", "Marzo 2021");

//Agrego los libros

cargarLibro.inventarioLibro(libro2);
cargarLibro.inventarioLibro(libro3);
cargarLibro.inventarioLibro(libro4);

//Muestra los libros por console.log
console.log(cargarLibro);