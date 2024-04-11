//Muestra un mensaje de bienbenida
alert("Hola, Bienvenido a la calculadora");

//Solicita al usuario que ingrese el primer numero y lo convierte en numero punto flotante
var numero1 = parseFloat(prompt("Por favor ingresa un numero de 0 al infinito"));

//Muestra el numero ingresado por el usuario
alert("Elegiste el numero " + numero1);

// Solicita al usuario que ingrese el segundo numero y lo convierte en numero punto fotante
var numero2 = parseFloat(prompt("Porfavor ingresa un segundo numero del 0 al infinito"));

//Muestra el segundo numero ingresado por el usuario
alert("Tu segundo numero es " + numero2);

//Solicita al usuario que elija la operacion
alert("Eligue la operacion que deseas hacer con los numeros " + numero1 + " y " + numero2);

//Solicita al usuario que elija una operacion y la conviere a un numero entero
var operacion = parseInt(prompt("Elige una opcion.\n1 es suma.\n2 es resta.\n3 es multiplicacion.\n4 es division."));
//Variable para almacenar el resultado de la operacion
var resultado;


//Variable para almacenar el nombe de la operacion realizada
var nombre = "";

//Verifica que operacion ha elegido el usuario y realiza la operacion correspondiente
if(operacion ==1){
    resultado = numero1 + numero2;
    nombre = " la suma es " + resultado;
} else if (operacion==2){
    resultado = numero1 - numero2;
    nombre = " la resta es " + resultado; 
} else if (operacion ==3){
    resultado = numero1 * numero2;
    nombre = " la multiplicacion es " + resultado;
} else if (operacion==4){
    if(numero2 !==0){
        resultado = numero1 / numero2;
        nombre = " la division es " + resultado;
}else{
    nombre = " no se puede dividir por cero. ";
} 
} else{
    nombre ="operacion no valida";
}
//Muestra el resultado de la operacion
alert(nombre);

//Muestra los numeros ingresados por el usuario y  el resultado de la operacion
document.write(" Los numeros que ingresaste fueron " + numero1 + " y " + numero2 + " y el resultado de la operacion de " + nombre);
