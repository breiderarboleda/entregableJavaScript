
// Función sumArray: Suma de todos los elementos de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - La suma de todos los elementos del array
    const sumArray = (array) => {
    if (array.length === 0) {
      return 0; 
    }
    const number = array.reduce((acum, actual) => acum + actual, 0);
    return number;
    };

    const array = [1, 2, 3, 4, 5];
  
  // Función filterEvenNumbers: Filtrar números pares de un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con solo los números pares del array original
    const filterEvenNumbers = (array) => {
    const Array = array.filter(num => num % 2 === 0);
    
    return Array;
    };

    const Array2 = [1, 2, 3, 4, 5, 6];
  
  // Función findMaxNumber: Encontrar el mayor número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El mayor número en el array
    const findMaxNumber = (array) => {
    if (array.length === 0) {
      return undefined; 
    }
  
    const Number = Math.max(...array);
    return Number;
    };

    const Array3 = [1, 7, 3, 9, 5];
  
  // Función toUpperCaseStrings: Convertir un array de strings a mayúsculas
  // Parámetros: array (Array) - Un array de strings
  // Devuelve: Array - Un nuevo array con todas las strings convertidas a mayúsculas
    const toUpperCaseStrings = (array) => {
    const Array = array.map(str => str.toUpperCase());
    
    return Array;
    };
  
    const Array4 = ['breider', 'elias', 'arboleda'];

  // Función calculateAverage: Calcular el promedio de un array de números
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El promedio de los números en el array
    const calculateAverage = (array) => {
    if (array === null || array === undefined || array.length === 0) {
        return NaN;
    }
    const sum = array.reduce((acumu, actual) => acumu + actual, 0);
    const number = sum / array.length;
    return number;
    };
  
    const Array5 = [1, 2, 3, 4, 5];
  
  // Función sortNumbersAscending: Ordenar un array de números de forma ascendente
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los números ordenados de forma ascendente
    const sortNumbersAscending = (array) => {
    const Array = array.slice().sort((a, b) => a - b);
    
    return Array;
    };
  
    const Array6 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  
  // Función findFirstElement: Encontrar el primer elemento que cumple una condición en un array
  // Parámetros: 
  // - array (Array) - Un array de elementos
  // - condition (Function) - Una función de condición que devuelve true o false
  // Devuelve: Any - El primer elemento que cumple con la condición, o undefined si ninguno lo hace
    const findFirstElement = (array, condition) => {
    for (let i = 0; i < array.length; i++) {

      if (condition(array[i])) {
        return array[i]; 
      }
    }
    return undefined; 
    };

    const esPar = (number) => number % 2 === 0;
    const Array7 = [1, 3, 5, 6, 7, 8];
  
  // Función countElements: Contar la cantidad de elementos en un array
  // Parámetros: array (Array) - Un array de elementos
  // Devuelve: Number - La cantidad de elementos en el array
    const countElements = (array) => {
    const number = array.length;
    return number; 
    };

    const Array8 = [1, 2, 3, 4, 5];
  
  // Función concatenateArrays: Concatenar dos arrays
  // Parámetros: 
  // - array1 (Array) - El primer array a concatenar
  // - array2 (Array) - El segundo array a concatenar
  // Devuelve: Array - Un nuevo array que es la concatenación de los dos arrays proporcionados
    const concatenateArrays = (array1, array2) => {
    const array = array1.concat(array2); 
    return array
    };

    const Array9 = [1, 2, 3];
    const Array9_1 = [4, 5, 6];
  
  // Función squareNumbers: Calcular el cuadrado de cada número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los cuadrados de los números en el array original
    const squareNumbers = (array) => {
    const Array = array.map(num => num * num);
    
    return Array;
    };

    const Array10 = [1, 2, 3, 4, 5];

  // Función flecha para agregar habilidades a un jugador de un juego
    const agregarHabilidad = (jugador, nuevaHabilidad) => {
    if (!jugador.habilidades) {
        jugador.habilidades = [];
    }
    
    if (!jugador.habilidades.includes(nuevaHabilidad)) {
        jugador.habilidades.push(nuevaHabilidad);
    }
    
    return jugador;
    };

    const jugador = {
    nombre: "Breider",
    nivel: 10,
    habilidades: ["Ataque", "Defensa"]
    };

    const Array11 = agregarHabilidad(jugador, "Rapidez");

// Función para calcular la duración total de reproducción de todas las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'duracion'.
// Retorna:
// - Un número que representa la duración total de todas las películas en minutos.
const calcularDuracionTotal = (peliculas) => {
    if (peliculas.length === 0) {
        return 0; 
    }
    
    const dTotal = peliculas.reduce((acumulador, pelicula) => {
        if (pelicula.duracion >= 0) { 
            acumulador += pelicula.duracion;
        }
        return acumulador;
    }, 0);

    return dTotal;
};

    const Array12 = [
    { titulo: 'Pelicula1', duracion: 120 },
    { titulo: 'Pelicula2', duracion: 90 },
    { titulo: 'Pelicula3', duracion: 150 }
    ];

// Función para buscar películas por título y género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'genero'.
// - titulo: String que representa el título a buscar.
// - genero: String que representa el género a buscar.
// Retorna:
// - Un array de objetos que representan películas que coinciden con el título y el género especificados.
    const buscarPeliculas = (peliculas, titulo, genero) => {
        const peliFilt = peliculas.filter(pelicula => {
            const tituloCoincide = pelicula.titulo.toLowerCase().includes(titulo.toLowerCase());
            const generoCoincide = pelicula.genero.toLowerCase().includes(genero.toLowerCase());
            
            return tituloCoincide && generoCoincide;
        });
        
        return peliFilt;
    };

    const Array13 = [
        { titulo: 'Avengers', genero: 'Ciencia Ficcion' },
        { titulo: 'Spaceman', genero: 'Drama' },
        { titulo: 'Jumanji', genero: 'Aventura' },
        { titulo: 'Grown Ups', genero: 'Comedia' }
    ];

// Función para calcular el promedio de puntajes de las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'puntaje'.
// Retorna:
// - Un número que representa el promedio de puntajes de todas las películas.
    const calcularPromedioPuntajes = (peliculas) => {
        const peliculasConPuntajeValido = peliculas.filter(pelicula => pelicula.puntaje >= 0 && typeof pelicula.puntaje === 'number');
        
        if (peliculasConPuntajeValido.length === 0) {
            return 0;
        }

        const sumaPuntajes = peliculasConPuntajeValido.reduce((acumulador, pelicula) => acumulador + pelicula.puntaje, 0);
        const promedio = sumaPuntajes / peliculasConPuntajeValido.length;

        return promedio;
    };

    const Array14 = [
        { puntaje: 7 },
        { puntaje: 8 },
        { puntaje: -2 }, 
        { puntaje: 6 }
    ];

// Función para filtrar películas por año de lanzamiento.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'año'.
// - año: Número que representa el año de lanzamiento a filtrar.
// Retorna:
// - Un array de objetos que representan películas lanzadas en el año especificado.
    const filtrarPorAño = (peliculas, año) => {
        const añoNum = parseInt(año); 

        const peliculasFiltradas = peliculas.filter(pelicula => pelicula.año === añoNum);
        
        return peliculasFiltradas;
    };

    const Array15 = [
        { título: 'Batman', año: 2005 },
        { título: 'Karate Kid', año: 2010 },
        { título: 'King Kong', año: 2005 },
        { título: 'Jurassic World', año: 2015 }
    ];

// Función para calcular el promedio de duración de las películas por género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'duracion' y 'genero'.
// - genero: String que representa el género de las películas a considerar.
// Retorna:
// - Un número que representa el promedio de duración de las películas del género especificado.
    const calcularPromedioDuracionPorGenero = (peliculas, genero) => {
        const generoLowerCase = genero.toLowerCase();
        const peliculasDelGenero = peliculas.filter(pelicula => pelicula.genero.toLowerCase() === generoLowerCase);
        
        if (peliculasDelGenero.length === 0) {
            return 0;
        }
        
        const sumaDuraciones = peliculasDelGenero.reduce((acumulador, pelicula) => acumulador + pelicula.duracion, 0);
        const promedio = sumaDuraciones / peliculasDelGenero.length;
        
        return promedio;
    };

    const Array16 = [
        { titulo: 'Jumanji', genero: 'Aventura', duracion: 120 },
        { titulo: 'Spaceman', genero: 'Drama', duracion: 90 },
        { titulo: 'Jumanji2', genero: 'Aventura', duracion: 150 },
        { titulo: 'Grown Ups', genero: 'Comedia', duracion: 100 }
    ];

// Clase base que representa un vehículo
    class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca || "Toyota";
        this.modelo = modelo || "Camry";
        this.año = año || 2022;
    }
        obtenerInformacion() {
            return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
        }
    }  


// Clase que representa un automóvil
    class Automovil extends Vehiculo {
    constructor(marca = "Toyota", modelo = "Camry", año = 2022, color = "Negro", cilindrada = 2000, potencia = 150, numPuertas = 4, numAsientos = 5, tipoTransmision = "Automática") {
        super(marca, modelo, año);
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numPuertas = numPuertas;
        this.numAsientos = numAsientos;
        this.tipoTransmision = tipoTransmision;
    }
        obtenerInformacion() {
            return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Puertas: ${this.numPuertas}, Asientos: ${this.numAsientos}, Transmisión: ${this.tipoTransmision}`;
        }
    }

// Clase que representa una motocicleta
    class Motocicleta extends Vehiculo {
        constructor(marca = "Marca", modelo = "Modelo", año = 2022, color = "Negro", cilindrada = 150, potencia = 100, numRuedas = 2, tipo = "Deportiva") {
            super(marca, modelo, año);
            this.color = color;
            this.cilindrada = cilindrada;
            this.potencia = potencia;
            this.numRuedas = numRuedas;
            this.tipo = tipo;
        }
        obtenerInformacion() {
            return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Ruedas: ${this.numRuedas}, Tipo: ${this.tipo}`;
        }
    }

// Clase que representa un camión
    class Camion extends Vehiculo {
        constructor(marca = "Marca", modelo = "Modelo", año = 2022, color = "Blanco", cilindrada = 3000, potencia = 200, numEjes = 2, capacidadCarga = 10, tipoCarroceria = "Furgón") {
            super(marca, modelo, año);
            this.color = color;
            this.cilindrada = cilindrada;
            this.potencia = potencia;
            this.numEjes = numEjes;
            this.capacidadCarga = capacidadCarga;
            this.tipoCarroceria = tipoCarroceria;
        }
        obtenerInformacion() {
            return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Ejes: ${this.numEjes}, Capacidad de Carga: ${this.capacidadCarga}, Tipo de Carrocería: ${this.tipoCarroceria}`;
        }
    }


// Clase que representa un autobús
    class Autobus extends Vehiculo {
        constructor(marca = "Marca", modelo = "Modelo", año = 2022, color = "Blanco", cilindrada = 4000, potencia = 250, capacidadPasajeros = 50, tipoCombustible = "Diesel", tipoMotor = "Combustión Interna") {
            super(marca, modelo, año);
            this.color = color;
            this.cilindrada = cilindrada;
            this.potencia = potencia;
            this.capacidadPasajeros = capacidadPasajeros;
            this.tipoCombustible = tipoCombustible;
            this.tipoMotor = tipoMotor;
        }
        obtenerInformacion() {
            return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Pasajeros: ${this.capacidadPasajeros}, Combustible: ${this.tipoCombustible}, Tipo de Motor: ${this.tipoMotor}`;
        }
    }



// Clase que representa una bicicleta
    class Bicicleta extends Vehiculo {
        constructor(marca = "Marca", modelo = "Modelo", año = 2022, tipo = "Montaña", numMarchas = 21, material = "Aluminio", suspencion = "Delantera", frenos = "Disco", tipoManubrio = "Recto") {
            super(marca, modelo, año);
            this.tipo = tipo;
            this.numMarchas = numMarchas;
            this.material = material;
            this.suspencion = suspencion;
            this.frenos = frenos;
            this.tipoManubrio = tipoManubrio;
        }
        obtenerInformacion() {
            return `${super.obtenerInformacion()}, Tipo: ${this.tipo}, Marchas: ${this.numMarchas}, Material: ${this.material}, Suspensión: ${this.suspencion}, Frenos: ${this.frenos}, Tipo de Manubrio: ${this.tipoManubrio}`;
        }
    }


/**
 * Por favor no borrar el código que hasta de aqui en adelante.
 */

// Exportar las funciones para su uso en otros archivos.
 
  module.exports = { 
    sumArray, 
    filterEvenNumbers, 
    findMaxNumber, 
    toUpperCaseStrings, 
    calculateAverage, 
    sortNumbersAscending, 
    findFirstElement, 
    countElements, 
    concatenateArrays, 
    squareNumbers,
    agregarHabilidad,
    calcularDuracionTotal,
    buscarPeliculas,
    calcularPromedioPuntajes,
    filtrarPorAño,
    calcularPromedioDuracionPorGenero,
    Vehiculo, Automovil, Motocicleta, Camion, Autobus, Bicicleta
  };
  