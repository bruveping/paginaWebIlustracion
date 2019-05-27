let boton01 = document.getElementById('elboton01');
let boton02 = document.getElementById('elboton02');
let unaImagen = document.getElementById('laImagen');

    let m = 0;
boton01.addEventListener('click',                   
          function aumenta () {
   m++;
    let indice = Math.abs(m % 8);
    unaImagen.src = 'img/laimg'+indice+'.jpg'
 //   console.log('lacantidad es'+ indice);    
}            
                      );

boton02.addEventListener('click',                   
          function disminuye () {
   m--;
    let indice = Math.abs(m % 8);
    unaImagen.src = 'img/laimg'+indice+'.jpg'
   // console.log('lacantidad es'+ indice);    
}            
                      );