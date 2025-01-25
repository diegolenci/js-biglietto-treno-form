
const btn = document.querySelector('.btn')

btn.addEventListener('click', function(){

    const nome = document.getElementById('nome').value
    const eta = document.getElementById('eta').value
    const km = parseInt(document.getElementById('km').value)

    console.log(nome, eta, km)

    const bigliettoFinale = document.getElementById('biglietto')

    bigliettoFinale.classList.remove('hidden')
    bigliettoFinale.classList.add('show')

    const nomePasseggero = document.getElementById('nome-passeggero')
    nomePasseggero.innerHTML = nome

    const offerta = document.getElementById('offerta')

    if( eta == "maggiorenne"){
        offerta.innerHTML = "Biglietto standard"
    } else if( eta == "minorenne"){
        offerta.innerHTML = "Biglietto ridotto"
    } else {
        offerta.innerHTML = "Biglietto over 65"
    }
})



//CALCOLO PREZZO BIGLIETTO TRENO
/*fase di preparazione variabili */
// let chilometri = parseInt ( prompt("quanti km vuoi percorrere?") );
// let eta = parseInt ( prompt("digita la tua età") )
// let tariffa = 0.21;

/*calcolo il prezzo del biglietto in base ai chilometri*/
// let prezzo = chilometri * tariffa;


/*sconto in base all'età*/
// if(eta < 18){
//     let discount = prezzo * 0.2;
//     prezzo = prezzo - discount;
// } 
// else if(eta > 65){
//     let discount = prezzo * 0.4;
//     prezzo = prezzo - discount;
// }

/*risultato*/
// console.log( 'il prezzo del tuo biglietto è:', prezzo)