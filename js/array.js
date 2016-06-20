// - - - - - - - - - - - - - - - - -- - - -- - - - - - - - - - - - - - 






//ARRAY
/*
var num =  [ 3,5,10,16,13,2,8,14,20,1,36,27,45,41,7,28,31,21,64,100 ];
var res = [ ];
for(i=0; i<num.length; i++){
	if(num[i]%2!=0){
		res.push(num[i]);
	}
}console.log(res);

*/








// EJERCICIO 1  DOCUMENTO DNI
/*
var letras  = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni , i , total , letra;
total=0;
dni = parseInt(prompt("Ingrese el rut sin guion"));
letra = prompt("ingrese ingrese la letra en MAYUSCULA");
i=0
if(dni<9999999  || dni>999999999 ){
	alert("El rut es invalido ");
}else if(dni>0){ 
		total=dni%23;
		document.write(letras[total]+" Es la letra de su rut");
		if(letra==letras[total]){
			alert("su letra coincide");
		}else{
			alert("su letra no coincide");
		}
}*/





//EJERCICIO 2 CICLO FOR
/*
var nombre = ["alisson","valentina","katerine","jhoselin"];
nombre.push("valdia","carina","lenais");
var i ;
for(i=0 ; i<nombre.length ; i++){
	document.write(nombre[i]+"-");
}*/


//EJERCICIO 3 MESES
/*
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var i ;
for(i=0 ; i<12 ; i++){
	alert("El mes es : "+ meses[i]);
}*/



//EJERCICIO 4 OPERACIONES CON ARRAY
/*var valores = [true, 5, false, "hola", "adios", 2];
var i ; 
for (i=0 ; i<6 ; i++){
	if(valores[i]>1){
		alert("El numero "+valores[i] +" es mayor que 1");
	}else{
		alert("El numero "+valores[i]+" es menor o igual que 1");
	}
}*/



//EJERCICIO 5 
var numero, total , i;
total = 0 ; 
for(i=1 ; i<=10 ; i++){
	numero = parseInt(prompt("Inserte el numero "+i));
	total = total+numero;
}
alert("La suma es : "+total);
