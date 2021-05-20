
//-	Cree una variable “name” y dele como valor su nombre - 	Luego intente cambiar el valor de “name” por un numero
//- 	¿Por qué TypeScript no le permite realizar la acción anterior? 

/*var namee:string="Talia";
console.log(namee)*/

// no permite un numero porque anteriormente definimos que el tipo de dato  fuera "string" y al 
// cambiarlo por un numero tendriamos que especificara que el tipo de dato es "number"

// -----------------------------------------------------------------------------------------------------------

//-	Cree una función llamada “greet” para poder saludar a una persona y además mostrarle su edad, es decir, la salida de la función debe ser algo parecido a “hello Josie, your age is 25”, 

/*function greet(nombre:string, edad:number) {
    console.log(`Hello ${nombre} , your age is ${edad}`)
}
greet('Josie', 25)*/



//- ¿Qué tipo de retorno le asigno TypeScript a esta función? 
// R.- Retorno por parametro

//-----------------------------------------------------------------------------------------------------------

//-	Cree una función donde el tipo de retorno “never” sea útil 

// -------------------------------------------------------------------------------------------------------------
//-	Cambie el tipo de retorno de la función “greet” a “never” 
//- ¿La acción anterior le da algún error? ¿Sí? ¿No? ¿Por qué? 

/*function greet ( nombre:string, edad:number): never{
    throw Error(`Hello ${nombre} , your age is ${edad}`);
}
greet("Josie", 25);*/

//------------------------------------------------------------------------------------

//-	Modifique la función “greet” para poder implementar una función como parámetro la cual se encargará de 
//imprimir o generar el saludo, establezca los tipos de datos necesarios para que la función cumpla con los
// requerimientos de TypeScript 
//-	Haga una llamada a la función para comprobar sus resultados 

/*function greet (nombre:string, edad:number): never{
    throw Error(`Hello ${nombre} , your age is ${edad}`);
}
function greet1(a:string, b:number, fun:(nombre:string, edad:number)=>never) {
    return fun(a, b);
}
greet1( 'Josie', 25,greet);*/

// -------------------------------------------------------------------------------------------------------------

//-	Modifique una vez más la función de “greet” para poder imprimir su año de nacimiento, 
//pero agregue un parámetro para poder imprimirlo como numero o como cadena, de manera que 
//dependiendo que argumento le pasen, lo imprima como uno de estos dos tipos de datos 

function greet (nombre:string,edad:number, fecha:number | string): never{
    throw Error(`Hello ${nombre} , your age is ${edad} your date of birth is ${fecha}`);
}
function greet1(a:string, b:number , c:number| string, fun:(nombre:string,edad:number, fecha:number | string)=>never) {
    return fun(a,b, c);
}
greet1("Josie",25, "1998", greet);
//-	Es necesario que TODOS los parámetros o variables estén tipados apropiadamente
// (no valen tipos como “any”, “unknow”, etc) 

