//SCRIVIAMO UNA FUNZIONE CHE ACCETTI UNA STRINGA E CHE CE LA RESTITUISCA GIRATA
//ESEMPIO , IO SCRIVO CIAO E CIO' CHE RESTITUIRA' SARA' OAIC

function giraParola(parola) {
    var arrayParola = []
    
    for(let i = 0; i < parola.length; i++){

            arrayParola.push(parola[i])
    }
  console.log(arrayParola.join(''));
    var reverse =''

    for(let i = parola.length -1 ; i >= 0; i--){

        reverse+= arrayParola[i]
    }
    return reverse 
}

var tuaParola = giraParola(prompt('inserisci la tua parola'))

console.log(tuaParola);

//funzione con i metodi split reverse e join
function parolaGirata(parola){
var reverseString=''
console.log(parola);
reverseString+=parola.split("").reverse().join("")
    return reverseString
}

var test2 = parolaGirata(prompt(''))
console.log(test2);