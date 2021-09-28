/*
CREA UN OGGETTO DI CANZONI CHE CONTENGANO TITOLO ANNO LDURATA E AUTORE
DAI LA POSSIBILITà ALL' UTENTE DI INSERIRE UN NUOVO OGGETTO 

*/

var hitMania = {

    'canzone1':{
        'titolo':'despacito',
        'durata':'2minuti',
        'anno':2018,
        'artista':'alvaro solair'

    },
    'canzone2':{
        'titolo':'stay',
        'durata':'3.15minuti',
        'anno':2021,
        'artista':'justin bieber'

    },
    'canzone3':{
        'titolo':'monster',
        'durata':'2.3minuti',
        'anno':2020,
        'artista':'Gabryponte'

    }

}

var canzone4 = {}

canzone4.titolo=prompt('inserisci titolo') 
canzone4.durata=prompt('inserisci la durata della canzone')
canzone4.anno=Number( prompt('inserisci l\' anno della canzone'))
canzone4.artista=prompt('inserisci l\'artista della canzone ')

hitMania['canzone4']=canzone4


for(key in hitMania){

   $('#title').append('<li>'+hitMania[key]['titolo']+'</li>')
   $('#artist').append('<li>'+hitMania[key]['artista'] +'</li>')
   $('#year').append('<li>'+hitMania[key]['anno']+'</li>')
   $('#time').append('<li>'+hitMania[key]['durata']+'</li>')

}
console.log(hitMania);

for(var key in hitMania){
 
  

    for (var chiave in hitMania[key]){
        console.log('<li>'+' '+ chiave+ ":" +hitMania[key][chiave]+" " +'</li>')
        

    }
}