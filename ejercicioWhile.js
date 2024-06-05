/*
Duda general: Cómo hacer para que el document.write funcione.

1. MULTIPLOS DE 5 
Crea un programa que pregunte al usuario un número. 
Mostrar los números que son múltiplos de 5 desde 1 
hasta el número introducido por el usuario.
*/

var digito = parseInt(prompt("EJERCICIO 1. Ingresa un número. Ver resultado en Consola."));
var index = 1;
while (index <= digito)
{
    if(index % 5 === 0) 
    {
        console.log("Los números múltiplos de 5, del 1 hasta el "+digito+" son: "+ (index + ","));
    }
    index = index + 1;
}

/*
2. DOS NUMEROS ENTRE EL 1 Y 50
Crea un programa que solicite al usuario 2 números 
entre 1 y 50. Posteriormente mostrar en consola los números 
del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al 
mostrar los números indicados por el usuario.

Duda: Como hacer para que no se me duplique el número que ingresó
el usuario
*/

var n1 = parseInt(prompt("EJERCICIO 2. Ver resultado en Consola. Primero, ingresa un número entre el 1 y el 50"))
var n2 = parseInt(prompt("Ahora, ingresa otro número entre el 1 y el 50"))
var i = 1

while (i<=50)
{
    console.log(i)
    i = i + 1
    if (i === n1)
    console.log(n1 + "¡Lotería!")
    else if (i === n2)
    console.log(n2 + "¡Lotería!")
}

/*
3. NUMEROS Y ARREGLOS. Crea un programa que solicite al usuario
números, si lo que este introduce es un número guardarlo en un 
arreglo. Para terminar el capturar el usuario debe ingresar el 
número 0. Finalmente mostrar la lista de números capturados en 
pantalla o en la consola.
*/

var arraaaynum = []
do {
    var numbersss = prompt("EJERCICIO 3.Introduce un número.");
    arraaaynum.push(numbersss);
} while(numbersss != 0)

alert("Los números introducidos anteriormente fueron: " + arraaaynum)


/*
4. PALABRAS CAPTURADAS. Crea un programa que solicite al usuario 
letras o palabras, si es así guardar el resultado. Para terminar 
de capturar el usuario no debe escribir valor alguno. Al 
terminar de capturar, mostrar en pantalla la concatenación de 
todas las palabras capturadas.

Duda: Intenté poner null en la condicionante de while, pero no
funciona, así que solo puse un espacio, y así sale el programa.
*/

var arraywords = []
do {
    var words = prompt("EJERCICIO 4.Introduce alguna palabra.");
    arraywords.push(words);
} while(words != " ")

alert("Las palabras ingresadas fueron las siguientes: " + arraywords)

/*
5. DIA DE LA SEMANA. Crea un programa que solicite al usuario 
un día de la semana (ej: lunes, jueves, domingo, etc). El 
programa mostrará un mensaje personalizado para cada día de la 
semana por medio de un alert. Y seguirá pidiendo al usuario 
introducir otro día. En caso de que el día introducido sea 
domingo mostrar al usuario el mensaje “Ve a descansar” y 
terminar la captura de información.
*/

do {
    var diaSemana = prompt("EJERCICIO 5. Escribe algún día de la semana.");
    if (diaSemana != "domingo" && diaSemana === "lunes")
        alert("¡Buen inicio de semana!")
    else if (diaSemana != "domingo" && diaSemana === "martes")
        alert("Como dice el dicho: 'Ni te cases ni te embarques'.")
    else if (diaSemana != "domingo" && diaSemana === "miercoles")
        alert("Ánimo, vas a la mitad de la semana!")
    else if (diaSemana != "domingo" && diaSemana === "jueves")
        alert("Otro poco más, sí se puede!.")
    else if (diaSemana != "domingo" && diaSemana === "viernes")
        alert("¡Los viernes son mis días favoritos!")
    else if (diaSemana != "domingo" && diaSemana === "sabado")
        alert("Espero que tengas buen fin de semana.")
} while(diaSemana != "domingo")

if (diaSemana = "domingo")
{
    alert("Ve a descansar, buen muchacho.")
}