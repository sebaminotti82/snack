//CREARE UN OGGETTO SEMPLICE CON NOME PALLA E PESO 10 POI DARE LA POSSIBILITA' ALL UTENTE DI CAMBIARE IL PESO


    var oggetto = { 'nome':'palla', 'peso':20 }
    for(const key in oggetto){

        document.write("<li>"+key+":"+oggetto[key]+'</li>')
    }

    // do la possibilità all' utente di modificare la proprietà peso e cambiarne il valore tramite un input e un click

    $('#bottone').click(function(){
    
        oggetto['peso']= Number($('#modifica').val()) 
        
         
          for(var key in oggetto){

            document.write('<li>'+key + ':' + oggetto[key]+'</li>')
              $('li').css('list-style','none')
          } 
           console.log(oggetto);
    })
  


 


