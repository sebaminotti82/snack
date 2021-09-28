//CREARE UN ARRAY DI DIECI OGGETTI ZUCCHINE  CONTENTETE NOME CATEGORIA PESO E LUNGHEZZA ,ESTRAPOLARE IL PESO TOTALE DELLE 10 ZUCCHINE

var zucchine = [
    {
    'nome':'zucchino romano',
    'peso':0.08,
    'lunghezza':'20cm'
    },
    {
    'nome':'zucchino nero',
    'peso':0.2,
    'lunghezza':'100cm'
    },
    {
    'nome':'zucchino striato',
    'peso':0.1,
    'lunghezza':'20cm'
    },
    {
    'nome':'zucchina salentina',
    'peso':1.3,
    'lunghezza':'100cm'
    },
    {
    'nome':'zucchino giallo',
    'peso':0.30,
    'lunghezza':'40cm'
    },
    {
    'nome':'zucchino romano',
    'peso':0.06,
    'lunghezza':'14cm'
    },
    {
    'nome':'zucchino cinese',
    'peso':0.05,
    'lunghezza':'10cm'
    },
    {
    'nome':'zucchino abruzzese',
    'peso':0.09,
    'lunghezza':'14cm'
    },
    {
    'nome':'zucchino romano',
    'peso':1.20,
    'lunghezza':'120cm'
    },
    {
    'nome':'zucchino lombardo',
    'peso':1.10,
    'lunghezza':'140cm'
    },
]


// tramite ciclo for ciclo all'interno del mio array 
//mi creo una variabile d'appoggio che sara' il peso totale delle zucchine e la inizializzo a 0
var totale = 0
for(let i = 0; i < zucchine.length; i++){
       document.write(
        '<li>'+'il peso è di:'+zucchine[i].peso + ", " +' il nome della varietà è : ' + zucchine[i].nome + " , " + ' la lunghezza è di :'+" " + zucchine[i].lunghezza   
        )
        $('li').css('list-style','none').css('font-size','2vw')
       totale +=zucchine[i].peso
       
      $('li').css('color','blue')
      
}
document.write('<br>'+'<b>'+'il peso totale delle zuchine è di :'+'</b>' + " " + totale + 'kg')
$('b').css('color','red')
console.log(totale);
