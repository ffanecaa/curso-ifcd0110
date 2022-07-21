//salida con alert entrada datos prompt// este lo hice yo
/*const number = document.getElementById('ele');
let edad;
edad = prompt('Introduce tu edad');

ele.textContent = `la edad introducida es ${edad}`;*/


/*edad=prompt('introduce tu edad');

document.getElementById('ele').innerHTML=` la edad introducida es <h1> ${edad}</h1>`;*/

//creamos un condicional para saber si han escrito un numero //

let edad;
edad = prompt('introduce tu edad');
if(Number (edad) == edad){
  if(edad<18){
    alert('tienes que ser mayor que 18 años');
    window.location.href='https//:www.google.com';
  }


document.getElementById('ele').innerHTML=` la edad introducida es <h1> ${edad}</h1>`;
}else {
    alert('tiene que ser un numero ');
    window.location.reload();
}
