/*
snack 3 crea un array con dieci oggetti zucchine dividi in due array separati le zucchine che misurano più di 15 cm e meno di 15 cm
infine stampa il peso dei due gruppi di zucchine
*/
var zucchineCorte = []
var zucchineLunghe=[]
var zucchine = [
    {
     'varietà':'zucchino nero di milano',
     'lunghezza':'20',
     'peso':0.1,
    },
    {
     'varietà':'zucchino romanesco',
     'lunghezza':'12',
     'peso':0.08,
    },
    {
     'varietà':'zucchino siciliano',
     'lunghezza':'80',
     'peso':1.3,
    },
    {
     'varietà':'zucchina striata di napoli',
     'lunghezza':'10',
     'peso':0.06,
    },
    {
     'varietà':'zucchina bianca triestina',
     'lunghezza':'16',
     'peso':0.1,
    },
    {
     'varietà':'zucchino tondo di piacenza',
     'lunghezza':'10',
     'peso':0.3,
    },
    {
     'varietà':'zucchino tondo di nizza',
     'lunghezza':'30',
     'peso':0.2,
    },
    {
     'varietà':'zucchina trombetta di albenga',
     'lunghezza':'20',
     'peso':1.5,
    },
    {
     'varietà':'zucchina patisson',
     'lunghezza':'14',
     'peso':0.8,
    },
    {
     'varietà':'zucchino giallo',
     'lunghezza':'11cm',
     'peso':0.4,
    },
    
]

console.log(zucchine);

// ciclo all'interno dell'array delle zucchine e tramite un if valuto se pusharle nelle corte o lunghe
for(var i = 0; i < zucchine.length; i++){

    if(zucchine[i].lunghezza <='15'){

        zucchineCorte.push(zucchine[i])

    }else if(zucchine[i].lunghezza >'15'){

        zucchineLunghe.push(zucchine[i])
    }
}
console.log(zucchineCorte,   zucchineLunghe);

// calcolo il peso delle zucchine corte
var pesoCorte = 0
for(var i = 0; i < zucchineCorte.length; i++){

    pesoCorte+=zucchineCorte[i].peso
   
}
 console.log("il peso delle zucchine corte è di" + " " + pesoCorte.toFixed(2)+ " kg");
 var pesoLunghe = 0
for(var i = 0; i < zucchineLunghe.length; i++){

    pesoLunghe+=zucchineLunghe[i].peso
   
}
 console.log("il peso delle zucchine Lunghe è di" + " " + pesoLunghe.toFixed(2)+ " kg");