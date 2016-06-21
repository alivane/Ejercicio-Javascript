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
mayusMin ("ALISSON");*/





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

















