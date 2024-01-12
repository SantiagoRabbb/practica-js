let frase = prompt('Ingrese una frase: ')

let fraseLista = [];


for (let i = 0; i < frase.length; i++){
  if(frase.charAt(i) === 'a' || frase.charAt(i) === 'e' || frase.charAt(i) === 'i' || frase.charAt(i) === 'o' || frase.charAt(i) === 'u'){
    fraseLista.push(frase[i]);
  }
};
alert(fraseLista.toString());

