// EJERCICIO FOR WHILE FOR DO WHILE



//EJERCICIO 1
/*
var numero,i,total;
total = 0;
i = 1 ; 
while(i<=10){
	numero = parseInt (prompt("ingrese le numero " +i ));
	total = total+numero;
	i++;
}
alert("Su numero es : "+total);*/



//EJERCIO 2 SUMA EN DO WHILE
/*
var i,numero,total;
total=0;
i = 1
do{
	numero = parseInt(prompt("Ingrese el numero : "+i));
	total = total + numero;
	i++;
}while( i<=10 );
alert("La suma es : "+total);*/



//EJERCICIO 3 SUMA FOR
/*
var numero, total ,i;
total = 0;
for(i=1; i<=10 ; i++){
	numero = parseInt (prompt("Ingrese el numero " + i));
	total=numero+total;

}
alert(total);
*/





//EJERCICIO 4 PROMEDIO
/* FOR
var number , nota ,  i , promedio , final; 
number = parseInt(prompt("Ingrese el numero de alumnos",""));
promedio = 0;
for (i=1 ; i<=number ; i++ ){
	nota = parseInt(prompt("Ingrese la nota "+i));
	promedio = promedio+nota;
	if(i===number){
		final = (promedio/number);
		alert("su promedio es :"+final);
	}
}
*/



//WHILE
/*
var number , nota, i , promedio , final ; 
number = prompt("ingrese el numero de alumnos");
promedio =0 ; 
i = 1
while ( i<=number ){
	nota = parseInt(prompt("ingrese la nota del alumno "+i));
	promedio = promedio+nota;
	i++;
}
final = promedio/number;
alert("el promedio final es : "+final);*/



//DO WHILE
/*
 var number , nota , i , promedio , final;
 promedio = 0;
 i=1;
 number = parseInt(prompt("Ingrese el numero de alumnos"));
 do{
 	nota = parseInt(prompt("ingrese la nota del alumno "+i));
 	promedio = promedio+nota;
 	i++; 
 }while(i<=number);
 final = promedio/number;
 alert("El promedio final es : "+final);*/


//EJERCICIO 5 NUMEROS PARES
/*
for(var i= 0 ; i<=100 ; i++ ){
	if(i%2===0){
		document.write(i+" , ");
	}
}
*/



//WHILE
/*
 var  i =0 ; 
 while(i<=100){
 	if(i%2===0){
 		document.write(i+"<br>")
 	}
 	i++;
 }*/



 //DO WHILE
 /*
var i = 0;
do{
	if(i%2===0){
		document.write(i+"<br>");
	}
	i++;
}while(i<=100);*/





//EJERCICIO TRIANGULO 6
/*
for(var i = 1 ; i<=22; i++){
	for(var j =1 ; j< = 22 ; j++){
		for(var k = 1 ; k<=22 ; k++){
			if((i*i)+(j*j)===(k*k)){
				console.log("(" + i + "," + j + "," + k + ")");
			}
		}
	}
}
*/




//EJERCICIO 7 TABLAS FOR
/*
var a = prompt("Ingrese el numero","");
var total = a;
for(var i = 0 ; i<=10 ;i++ ){
	document.write( " ("+(i*total)+") ," );
}
*/





//EJECICIO 8 N potencia  FOR
/*
var potencia , base , total;
base = parseInt(prompt("Ingrese la base"));
potencia = parseInt(prompt("Ingrese la potencia"));
total =base;
for(var i=0 ; i<potencia-1 ; i++ ){
	total = total*base;
}
alert(base+"elevado a : "+ potencia + " es igual : "+ total);
*/



//EJERCICIO 9 CALIFICACION DE ALUMNOS
/*
var nota,i,total , promedio;
total = 0 ;
for(i=1 ; i<=40 ; i++){
	nota = parseInt(prompt("Ingrese la nota "+i));
	total = total+nota;
	if(i===40){
		promedio=total/40;
	}
}
alert("El promedio total es : "+promedio);
*/





//EJERCICIO 10 EL CUBO Y CUARTA DE UN NUMERO
/*
var numero , numero1 , total , i , a;
total = 0; 
for(i=1 ; i<=10 ;i++){
	numero = parseInt(prompt("ingrese el numero "+i));
	total = total + numero;
	if(i===10){
		total=total*total*total; 
			alert("el numero al cubo es "+total);

	}
	if(i===10){
		total = total/4;
		alert("Su cuarta parte es :"+total);
	}
}
*/