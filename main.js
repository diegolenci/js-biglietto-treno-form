//BOTTONE GENERA CHE SI ATTIVA AL CLICK
const btn = document.querySelector('.btn')
btn.addEventListener('click', function(){

    //COSTANTI E VAR CON I DATI DELL'UTENTE
    const nome = document.getElementById('nome').value
    const eta = document.getElementById('eta').value
    const km = parseInt(document.getElementById('km').value)
    let tariffa = 0.21

    console.log(nome, eta, km)

    //BIGLIETTO FINALE
    const bigliettoFinale = document.getElementById('biglietto')

    bigliettoFinale.classList.remove('hidden')
    bigliettoFinale.classList.add('show')
    //COSTANTI DATI DEL BIGLIETTO
    const nomePasseggero = document.getElementById('nome-passeggero')
    const carrozza = document.getElementById('carrozza')
    const codice = document.getElementById('codice')
    const offerta = document.getElementById('offerta')
    const costo = document.getElementById('costo')
    
    nomePasseggero.innerHTML = nome

    //CONDIZIONI TARIFFA IN BASE ALL'ETA
    if( eta == "maggiorenne"){
        offerta.innerHTML = "Biglietto standard"
        costo.innerHTML = (tariffa * km).toFixed(2)
    } else if( eta == "minorenne"){
        offerta.innerHTML = "Biglietto ridotto"
        costo.innerHTML = ((tariffa * km) * 0.80).toFixed(2)
    } else {
        offerta.innerHTML = "Biglietto over 65"
        costo.innerHTML = ((tariffa * km) * 0.60).toFixed(2)
    }

    carrozza.innerHTML = randomNumber(1,99)
    codice.innerHTML = randomNumber(1111.9999)
})

//FUNZIONE NUMERO RANDOM PER CARROZZA E CODICE CP
function randomNumber(min,max){
    return Math.floor(Math.random() * max) + min
}