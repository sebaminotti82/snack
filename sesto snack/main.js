/*
step 1
CREARE UN ARRAY DI OGGETTI AUTOMOBILI CON MARCA MODELLO CAVALLI COLORE ANNO 
step 2
SE UNA MACCHINA è DI COLORE BIANCO ALLORA IMPOSTARE L'ANNO D'IMMATRICOLAZIONE A 2020
step3
RIMUOVIAMO LA PROPRIETA' CAVALLI 

*/

//STEP UNO CREO L'ARRAY DI OGGETTI AUTO

var listaAuto = [
    {
        'marca':'fiat',
        'modello':'500',
        'cavalli':90,
        'colore':'verde',
        'anno':'2018',
       },
       {
        'marca':'opel',
        'modello':'corsa',
        'cavalli':80,
        'colore':'bianco',
        'anno':'2010',
       },
       {
        'marca':'audi',
        'modello':'A1',
        'cavalli':120,
        'colore':'bianco',
        'anno':'2019',
       },
       {
        'marca':'nissan',
        'modello':'micra',
        'cavalli':70,
        'colore':'nera',
        'anno':'2005',
       },
       {
        'marca':'bmw',
        'modello':'m4',
        'cavalli':540,
        'colore':'blu elettrico',
        'anno':'2020',
       },
       {
        'marca':'porsche',
        'modello':'panamera',
        'cavalli':350,
        'colore':'bianco',
        'anno':'2018',
       },
]
console.log(listaAuto);
//fine step 1

//step 2 

for(var i = 0 ; i< listaAuto.length; i++){
   
    
    if(listaAuto[i]['colore']=='bianco'){

        listaAuto[i]['anno']='2020'
    }

}



var nuovaLista = [
    {
        'marca':'fiat',
        'modello':'500',
        'cavalli':90,
        'colore':'verde',
        'anno':'2018',
       },
       {
        'marca':'opel',
        'modello':'corsa',
        'cavalli':80,
        'colore':'bianco',
        'anno':'2010',
       },
       {
        'marca':'audi',
        'modello':'A1',
        'cavalli':120,
        'colore':'rossa',
        'anno':'2019',
       },
       {
        'marca':'nissan',
        'modello':'micra',
        'cavalli':70,
        'colore':'nera',
        'anno':'2005',
       },
       {
        'marca':'bmw',
        'modello':'m4',
        'cavalli':540,
        'colore':'blu elettrico',
        'anno':'2020',
       },
       {
        'marca':'porsche',
        'modello':'panamera',
        'cavalli':350,
        'colore':'bianco',
        'anno':'2018',
       },
]
//step 3 rimuoviamo la proprietà cavalli e per questo ho creato un nuovo array di auto per mostrare la differenza con l'array originale

for(let i = 0; i < nuovaLista.length; i++){

    delete nuovaLista[i]['cavalli']
}

console.log(nuovaLista);