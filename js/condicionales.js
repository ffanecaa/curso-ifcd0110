//condiconal compuesto//
/*let num= -5;
if(num>0){
   console.log(`${num} es mayor que 0`);

} else{
    console.log(`${num} es menor que 0`);
} */// va escribir -5 es menor que 0//


//pero si es valor 0 da error pq al no cumplir la priemera escribela segundo simplente por flujo//
/*
let num=0;
if(num<0){
    console.log(`${num}es mayor que 0`);
} else{
    console.log(`${num}es menor que 0`);
} 
******entonces tenemos que usar condicionales mutiples paraevitar este error*/

/*let num=0;

if(num>0){
    console.log(`${num} es mayor que 0`);
} else if(num<0){
    console.log(`${num} es menor que 0`);()
} else{
    console.log(`${num} es igual a 0`);
}

*****Sepueden comprobar mas de una cosaa la vez. necesitamos operadores logicos
&& and y|| o */
 /*let num1= 0;
 let num2= 5;*/

 /*if( num1 >0 && num2 >0){
    console.log(`$(num1) y $(num2) son mayores que 0`)
 }  no imprime nada pq no cumple lacondicion tendriamos que poner 0 para q cumpla*/
 /*if (num1>0|| num2>0){
    console.log(`${num1 } o ${num2} son mayores que 0`);
 }
   ****ahora probaremos anidar if */

/*let num1 = 0;
let num2 = 0;

if(num1>0){
    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2<0){
        console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} es mayor que 0 y  ${num2} es iguala 0`);
    } 
}else if(num1<0){
    if(num2<0){
        console.log(`${num1} y ${num2} son menores que 0`);
    }else if(num2>0){
        console.log(`${num1} es menor que 0 y ${num2} es mayor que 0`);
    }else{
        console.log(`${num1} es menor que 0 y ${num2} es igual 0`);
    } 
}else {
    if(num2>0){
        console.log(`${num1}es igual a 0 y ${num2} es mayores que 0`);
    }else if(num2<0){
        console.log(`${num1} es igual que 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} es igual que 0 y ${num2}es igual a 0`);
    } 
}
**** no solo con mumero tb con strings*/
/*let word = 'hola mundo';

if(word.length>4){
    console.log(`${word} tiene mas de 4 letras`);
}
****booleanos  */
/*let respuesta = false;
if(respuesta) console.log(`respuesta tiene el valor true`);
if(!respuesta) console.log(`respuesta tiene el valor false`);

****** ejercicio ordena numeros de mayor a menor
numero a b c

*/
const numbers = document.getElementById('numbers');

const result = document.getElementById('resultado');

let a = prompt('introduzca primer numero');
let b = prompt('introduzca segundo numero');
let c = prompt('introduzca tercer numero');

numbers.textContent = ` los numeros introducidos son ${a},${b},${c}`;
if(a<=b && a<=c){
    if(b<c){
        resultado.textContent =` el orden es: ${a},${b},${c}`;
    }else {
       
            resultado.textContent =` el orden es: ${a},${c},${b}`;
        }
    }else{
        if(b<c){
            resultado.textContent =` el orden es: ${b},${c},${a}`;
        }else {
           
                resultado.textContent =` el orden es: ${c},${b},${a}`;
            }
    }
    




