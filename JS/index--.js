let numero = 12;
/*
un numero ariba
*/
console.log(numero);

let personaje = {

    nombre: "tanjiro",
    categoria: "anime",
    nombre_del_anime: "demon_slayer",
    edad_del_prota: 16,

};

console.log(personaje);

//array
//es como una lista en python hasta ahora pero asi

let animales = ["vaca","burro"];
console.log(animales);
animales[4] = "toro";// asi añades otro elemento al array
// para saber longitud del array

console.log(typeof animales);

function saludando(){

    alert("Bienvenido al apartado de agendar citas en JB the Draftsman")

}

//saludando();

function suma(a,b,c){
    console.log(arguments)
    return a + b * c;

}
console.log(suma(2,2,4));

//parametros son los a,b,c y los argumentos son 2,2,4 para saber todos los argumentos se pone console.log(arguments);
// subrayando todo lo que quieres comentar y dandole a ctrl y / se comentara todo

// incrementacion
let a = 1;
console.log(++a);// en este caso a se duplica o sea sube y luego se muestra a=2
console.log(a++);//en este caso se imprime o sea a =2  y sube sin que lo veas a=3
console.log(a); // a=3

//decrementacion o sea que va bajando

let b = 3;
console.log(--b); //en este caso b disminulle y se muestra b=2
console.log(b--); //b se muestra o sea b=2 y  disminulle sin que lo sepas b=1
console.log(b); // b=1

/*
si quieres comparar un nemero con un string con == va a salir true porque solo esta verificando
si es la misma informacion pero si quieres verificar que si ademas de que si es la misma informacion
es el mismo tipo de tipo pones === si 3 veces, eso ademas de verificar la informacion te verifica si
es el mismo tipo por ende, tienen la misma informacion? si, son el mismo tipo? no, o sea saldra false por todo.

pero si lo que quieres es preguntar si son diferentes tanto en data como en tipo pones !==
*/

/*
operadores logicos
and es dos &&
or es dos paralelas || y not es !(delante de la variable o numero donde lo uses)
*/

/*
tambien puedes usar el || en por ejemplo
 */

let usuario = "";
let username = usuario || "anonimo";

//console.log(username); saldra que usename es anonimo por que la variable usuario esta vacia y yo creo que lo vacio
//es false

let usuario1 = "";
let username1 = usuario && "anonimo";

//console.log(username1) no imprime nada por que si una de las dos son falsas ya todo valio

