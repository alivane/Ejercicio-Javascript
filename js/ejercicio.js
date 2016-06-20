//Ejercicio #1 SUMA DE DOS NUMEROS
var a;
var b;
var resultado;
a=parseInt(prompt("El primer numero es : ",""));
b=parseInt(prompt("El segundo numero es : ",""));
resultado=a+b;
alert ("El resultado es : "+resultado);

//Ejercicio #2 Promedio
var a;
var b;
var c;
var resultado;
a =    parseInt(prompt("El rimer numeros es : ",""));
b =    parseInt(prompt("El segundo numero es : ",""));
c =    parseInt(prompt ("El tercer numero es : ",""));
resultado =(a+b+c)/3;
alert("El promedio es : ","");
//Ejercio #3 Calculo de Area
var a;
var b;
var area;
a =    parseInt(prompt("El primer lado del triangulo es : ",""));
b =    parseInt(prompt("El segundo lado detriangulo es : ",""));
area = (a*b)/2;
alert ("El area de el triangulo es : "+area);

//Ejercicio #4 	Galones
var litros;
var galon;
litros =    parseInt(prompt("Cuantos litros en total tienes? : ","Litros"));
galon = 3785/litros;
alert ("Los galones que vendiste son : ",galon);

//ejercicio #5
var hora;
var pagoh;
var dias;
var total;
hora =    parseInt(prompt("Por favor ingrese las horas trabajas por dia","horas"));
pagoh =    parseInt(prompt("Por Favor Ingrese las pago por hora","Pago por hora"));
dias =    parseInt(prompt("Por Favor ingrese los dias trabajados por semana"));
total = hora*pagoh*dias;
alert("Gana por semana: "+ total );

//Ejercicio #6
var metros;
var pulgadas;
metros =    parseInt(prompt("Por favor ingrese los Datos","metros")); //tengo que pedir metros
pulgadas= metros/0.0254;
alert ("las pulgadas son:"+ pulgadas);

//ejercicio #7 PINTURAS
var metros;
var cuadros;
var presupuesto;
metros =    parseInt(prompt("Por favor ingrese el costo por metros cuadrados","m2"));
cuadros =    parseInt(prompt("Por favor ingrese los metros cuadrados por cuadros",""));
presupuesto = metros*cuadros;
alert=("El costo por cuadro es: "+presupuesto);
//ejercicio #8 AUTOBUSES newben.cl
var km;
var costo;
var boleto;
km =    parseInt(prompt("Por favor ingrese los kilometros recorridos : ","kilometros"));
costo =    parseInt(prompt("Por favor ingrese el costo por kilometro : ","costo"));
boleto = km*costo;
alert=("El costo del viaje es : "+boleto);
//ejercicio #9 LLAMADA
var time;
var minuto;
var costo;
time =    parseInt(prompt("Por favor ingrese el tiempo de llamada"));
minuto =    parseInt(prompt("Por favor ingrese el costo por minuto"));
costo = time*minuto;
alert = ("El costo por su llamada es : "+ costo);

//Ejercicio #10 Hotel
var precio;
var dias;
var total;
precio =    parseInt(prompt ("Por favor ingrese el precio por dia de estadia : ",""));
dias =    parseInt(prompt ("Por favor ingrese los dias de hospedaje : ",""));
total = precio+dias;
alert =("El precio total por es : ","");