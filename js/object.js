//EJERCICIO 1   informacion Factura
/*var factura = {
	empresa  :  {
		nombre : "Alivane",
		direccion : "maria graham ",
		telefono : 2222222,
		rut : 2222222
	} , 
	cliente : {
		nombre : "Alivane",
		direccion : "maria graham ",
		telefono : 2222222,
		rut : 2222222
	},
	elementos : [
		{precio:10 , cantidad:20 , descripcion:"Autos rojos"},
		{precio:7 , cantidad:30 , descripcion:"Autos rojos"},
		{precio:23 , cantidad:15 , descripcion:"Autos rojos"},
		{precio:2 , cantidad:22 , descripcion:"Autos rojos"}
	],
	importeTotal : " ",
	tipoIva : 1.19 , 
	formaPago : "Efectivo"
}
factura.importe = function(){
	var total = 0 ;
	for(var i = 0 ; i<this.elementos.length ; i++){
		total = total+(this.elementos[i].precio*this.elementos[i].precio);
	}
	this.importe = total*1.19 ; 
}
factura.mostrar = function(){
	alert(importe);
}
*/



//EJERCICIO 2

/*
var monthActual = {
	firstCuatrimes : ["January","February","March","April"],
 	secondCuatrimes : ["May","Juni","july","August"],
 	thirdCuatrimes	 : ["september","Octubre","November","December"],
 	current : function(){
 		var total;
 		for(var i = 0 ; i<this.firstCuatrimes.length ; i++){
 			if(month==this.firstCuatrimes[i]){
 				total = alert("Estamos en el cuatrimes 1");
 			}
 		}
 		for(var i = 0 ; i<this.secondCuatrimes.length ; i++){
 			if(month==this.secondCuatrimes[i]){
 				total = alert("Estamos en el cuatrimes 2");
 			}
 		}
 		for(var i = 0 ; i<this.thirdCuatrimes.length ; i++){
 			if(month==this.thirdCuatrimes[i]){
 				total = alert("Estamos en el cuatrimes 3");
 			}
 		}
 		return total ; 
 	}
}
var month = prompt("Ingrese el mes actual","January,February,March,April ...");
monthActual.current();
*/



//EJERCICIO 3
/*
var future = {
	value : parseInt(prompt("Ingrese el valor")),
	tasa : parseInt(prompt("Ingrese el valor de tasa")),
	period : parseInt(prompt("Ingrese el periodo")),
	resultado : this.value*((1+this.tasa)/(100*this.period))
}
document.write("Valor = "+future.value+"<br>");
document.write("Tasa = "+future.tasa+"<br>");
document.write("Periodo = "+future.period+"<br>");
document.write("Resultado = "+future.resultado);
*/


//EJERCICIO 4
/*
var circle = {
	radio : parseInt(prompt("Ingrese el radio")),
	area : function(){
		var total =  3.1416*this.radio*this.radio;
		return total;
	},
	longitud : function(){
		var total =  this.radio*2;
		return total;
	}
}
document.write(circle.area()+" es el area del circulo"+"<br>");
document.write(circle.longitud()+" es la longitud del circulo"+"<br>");
*/


//EJERCICIO 5
/*
var numtelephone = {
	number : parseInt(prompt("ingrese el numero telefonico"))
}
document.write("El numero es "+numtelephone.number);
*/



