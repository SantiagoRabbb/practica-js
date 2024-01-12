let numero = prompt('Ingrese un número para verificar si es divisible en 2, 3, 5 o 7: ');

// const divisores = [2, 3, 5, 7];

if (numero % 2 === 0) {
  alert(`El número ${numero} es divisible en 2`);
} else if (numero % 3 === 0) {
  alert(`El número ${numero} es divisible en 3`);
} else if (numero % 5 === 0) {
  alert(`El número ${numero} es divisible en 5`);
} else if (numero % 7 === 0) {
  alert(`El número ${numero} es divisible en 7`);
} else {
  alert('El número ingresado no es divisible por ninguno de los divisores anteriores')
};


/* for (let i = 0; i < numero.length; i++) {
  
} */