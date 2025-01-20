
let inputName = document.getElementById('nome-field')
let inputKm = document.getElementById('km-field')
let selectEta = document.getElementById('eta-field')



//CALCOLO PREZZO BIGLIETTO TRENO
/*fase di preparazione variabili */
let chilometri = parseInt ( prompt("quanti km vuoi percorrere?") );
let eta = parseInt ( prompt("digita la tua età") )
let tariffa = 0.21;

/*calcolo il prezzo del biglietto in base ai chilometri*/
let prezzo = chilometri * tariffa;


/*sconto in base all'età*/
if(eta < 18){
    let discount = prezzo * 0.2;
    prezzo = prezzo - discount;
} 
else if(eta > 65){
    let discount = prezzo * 0.4;
    prezzo = prezzo - discount;
}

/*risultato*/
console.log( 'il prezzo del tuo biglietto è:', prezzo)