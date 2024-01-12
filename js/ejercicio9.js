let frase = prompt('Ingrese una frase: ')

let fraseLista = [];


for (let i = 0; i < frase.length; i++){
  if(frase.charAt(i) === 'a' || frase.charAt(i) === 'e' || frase.charAt(i) === 'i' || frase.charAt(i) === 'o' || frase.charAt(i) === 'u'){
    fraseLista.push(frase[i]);
  }
};
alert(fraseLista.toString());



/* let frase = 'Hola';
let letra = frase[0];

document.write(`El caracter que está en la posición 1 es ${frase.charAt(1)}.`);
document.write('<br>')
let posicion = frase.charAt(0);
document.write(posicion); */