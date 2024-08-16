//APENDIZ PAULAOCHOA_MUJERESDIGITAL
//Definir variables que almacenen los siguientes datos//
//Un nombre: "Pepe"//
//Una edad: 25//
//Un precio: $99.90//
//Los nombres de tus series favoritas: "Dark", "Mr Robot", "Castlevania"
//Tus películas favoritas, donde cada película debe incluir su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
//Mostrar todos esos valores por consola.
//Incrementar la edad en 1 y volver a mostrarla.
//Agregar una serie a la lista de series favoritas y volver a mostrarla

// Definición de variables
let nombre = "Pepe";
let edad = 25;
let precio = 99.90;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];
let peliculasFavoritas = [
    {
        nombre: "Inception",
        anio: 2010,
        protagonistas: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
        nombre: "The Matrix",
        anio: 1999,
        protagonistas: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        nombre: "Interstellar",
        anio: 2014,
        protagonistas: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    }
];

// Mostrar todos los valores por consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Series favoritas:", seriesFavoritas);
console.log("Películas favoritas:", peliculasFavoritas);

// Incrementar la edad en 1
edad += 1;
console.log("Edad después de incrementar:", edad);

// Agregar una nueva serie a la lista
seriesFavoritas.push("Dama del ajedrez");
console.log("Series favoritas actualizadas:", seriesFavoritas);

