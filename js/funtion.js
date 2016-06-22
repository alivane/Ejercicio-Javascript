//EJERCICIO 1

/*
function numMenor(a,b,c){
	var menor = "";
	if((a<b)&&(a<c)){
		menor = alert ("El menor es "+a);
	}else if((b<a)&&(b<c)){
		menor = alert("El menor es "+b);
	}else if((c<a)&&(c<b)){
		menor = alert("El menor es "+c);
	}
	return menor ;
}
a=parseInt(prompt("Introduce el numero"));
b=parseInt(prompt("Introduce el numero"));
c=parseInt(prompt("Introduce el numero"));
numMenor(a,b,c);
*/







//EJERCICIO 2
/*
function parImpar(num){
	if(num%2 == 0){
		return (document.write("El numero "+num+" es un numero PAR"));
	}
	return (document.write("El numero "+num+" es un numero IMPAR"));
}
parImpar(parseInt(prompt("ingrese el numero")));
*/






//EJERCICIO 3

/*
var numeros = [];
 
numeros.push(prompt("Introduce el primer número: "));
numeros.push(prompt("Introduce el segundo número: "));
numeros.push(prompt("Introduce el tercer número: "));
 
var ordenados = numeros.sort(function (a,b) {
    return a - b;
});
 
alert(ordenados);

*/



//EJERCICIO 4 Mayusculas minusculas
/*
function mayusMin(cadena){
	var resultado = "";
	if(cadena == cadena.toUpperCase()){
		resultado = alert ("Es Mayuscula");
	}else if (cadena == cadena.toLowerCase()){
		resultado = alert("Es minuscula");
	}else{
		resultado = alert("Es Mixto");
	}
	return resultado ; 
}
cadena=prompt("INGRESA LA PALABRA");
mayusMin (cadena);*/





//EJERCICIO 5
/*
function palindromo(palabra){
	var resultado = true;
	for(var i = 0 ; i<palabra.length ; i++){
		if(palabra.charAt(i) == palabra.charAt(palabra.length-(i+1))){
			resultado="Es un palindromo";
		}else{
			resultado = "No es un palindromo";
		}
	}
	return resultado;
}
var palabra = prompt("ingrese el palindromo");
document.write(palindromo(palabra));
*/




//EJERCICIO 6
/*
function operacion(a,b){
	var resultado = 0;
	if(operar == "multiplicacion"){
		resultado =alert( a*b);
	}else if(operar =="division"){
		resultado = alert(a/b);
	}else if(operar =="resta"){
		resultado = alert(a-b);
	}else if(operar =="suma"){
		resultado = alert(a+b);
	}
	return (resultado); 
}
var operar = prompt("ingrese la operacion que dese hacer","multiplicacion,division,resta,suma");
a = parseInt(prompt("Ingrese el numero "));
b = parseInt(prompt("Ingrese el numero "));
alert(operacion(a,b));
*/






//EJERCICIO 7
/*
function cuadrados(a,b){ 
	var numero = a+b;
	var cuadrado = numero*numero ;
	return cuadrado; 
}
a = parseInt(prompt("Ingrese el numero "));
b = parseInt(prompt("Ingrese el numero "));
alert(cuadrados(a,b));
*/




//EJERCICIO 8

/*
No pude sacer el numero primo
*/






//EJERCICIO 9
/*
function multiplo(a){
	var resultado;
	for(var i = 0 ; i<100 ; i++){
		if(i%a ==0){
			resultado = document.write(i+" es multiplo de "+a+"<br>");
		}
	}
	return resultado;
}
a = parseInt(prompt("Ingrese el numero"));
multiplo(a);
*/





//EJERCICIO 10

/*
function cantidad(numero){
	var div , i , res ;
	div = 10 ; 
	res= 0;
	i = 0 ;  
	do{
		res = numero/div ; 
		i++;
		div = div*10 ; 
	}while(res>=1);
	return alert(i);
}
numero = parseInt(prompt("ingrese los numero"));
cantidad(numero);
*/









