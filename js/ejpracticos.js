//EJERCICIO PRACTICOS




//EJERCICIO 1 FOR
/*var i , estatura , personas , total , promedio;
personas = parseInt(prompt("Ingrese el numero de personas "));
total = 0; 
for(i=1 ; i<=personas ; i++){
	estatura=parseInt(prompt("Ingrese la estatura de la persona "+i));
	total = total+estatura;
}
promedio = total/personas;
alert("El promedio final de las estaturas son : "+promedio);*/




//EJERCICIO 2 WHILE
/*
var cantidad , i , total , numero ; 
cantidad = parseInt(prompt("ingrese la cantidad de numeros"));
i = 1 ; 
while(i<=cantidad){
	numero = parseInt(prompt("ingrese el numero "+i));
	if(numero===0) {
		document.write("El numero "+numero+" es igual a 0"+"<br>")
	}
	if(numero<0) {
		document.write("El numero "+numero+" es menor a 0" +"<br>")
	}
	if(numero>0){
		document.write("El numero "+numero+" es mayor a 0"+ "<br>");
	}
	i++;
}*/





//EJERCICIO 3 FIBONACCI sucesor FOR

/*var actual , ant1 , ant2 ,i , numero;
ant1 = 0 ;
ant2 = 1 ; 
numero = parseInt(prompt("ingrese el numero"));
if ( numero ==0 ){
	actual = 0 ; 
}else if( numero == 1 ){
	actual = 1 ; 
}else for(i=2 ; i<=numero ; i ++){
	actual = ant1+ant2 ; 
	ant1 = ant2;
	ant2 = actual;
	document.write(actual+" , ")
}
document.write( "  " +actual+" Es el numero sucesor ");*/



//ELERCICIO 4 AGUASCALIENTES FOR
/*var kil1 , kil2 , i , total ; 
kil1 = 70 ; 
kil2 = 150 ; 
total = kil2 - kil1 ; 
document.write("se encuentran en el kilometro "+total);*/




//EJERCICIO 6
/*
var deposito , total , i , mes ; 
total = 0 ;
for (i=1 ; i<=12 ; i++){
	deposito = parseInt(prompt("ingrese la cantidad depositada en el mes "+i));
	mes = document.write("Deposito el mes "+i+" = " +deposito+"<br>");
	total = total+deposito;
} 
document.write("Usted ahorro "+total);*/
  


//EJERCICIO 7
/*
var hours , day , i ,total , sueldo;
i=1
day=0;
sueldo = parseInt(prompt("Ingrese el sueldo por hora"));
do{
	hours =parseInt(prompt("ingrese las horas trabajadas el dia "+i));
	total = sueldo*hours;
    day = day+total;
      document.write("El sueldo por dia "+i+" = "+total+"<br>");
      i++;
}while(i<=6);
document.write("SU SUELDO ES : "+day);*/



//EJERCICIO 8
/*
var productos , total , i ,venta ; 
productos = parseInt(prompt("ingrese cuantas ventas realizo"));
for(i=1 ; i<=productos ; i++){
	venta = parseInt(prompt("ingrese el precio de la venta ")+i);
	if(venta>1000){
		document.write("La venta "+i +" fue mayor a 1000"+"<br>");
	}
	else if(venta>500 || venta==1000){
			document.write("La venta "+i+" es mayor a 500 "+"<br>");
		}
		else if(venta<=500){
				document.write("La venta "+i+" es menor o igual a 500 "+"<br>");
			}

}*/




//EJERCICIO 9 MENSUALIDAD
/*
var i ,total, mes;
total=0;
for(i=1 ; i<=20 ; i++){
	mes = (2*i)*10;
	document.write("el numero es "+mes+"-");
}*/


