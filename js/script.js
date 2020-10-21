var kmToGo = prompt("Inserisca i chilometri da percorrere :");

// debug
console.log(kmToGo);

var eta = prompt("Inserisca la sua età :");

// debug
console.log(eta);

var priceTicket = 0.21;

if (eta < 18){

  alert("Hai diritto ad uno sconto del 20%!");

  document.getElementById("price").innerHTML =('Il prezzo del tuo biglietto è di : ' + ((priceTicket * kmToGo) * 0.8 ).toFixed(2) + "\u20AC");
} else if (eta > 65){

  alert("Hai diritto ad uno sconto del 40%!");

  document.getElementById("price").innerHTML =('Il prezzo del tuo biglietto è di : ' + ((priceTicket * kmToGo) * 0.6 ).toFixed(2) + "\u20AC");

} else {

  document.getElementById("price").innerHTML =('Il prezzo del tuo biglietto è di : ' + (priceTicket * kmToGo).toFixed(2) + "\u20AC");

}
