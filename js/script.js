function getRandom(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
}

// definisco una variabile costante
var PRICE_KM = 0.21;

// prendo il bottone dall'HTML
var genBtnEl = document.getElementById('generateButton');

// do istruzioni al bottone su come reagire al click
genBtnEl.addEventListener('click', function(){


// prendo gli elementi che mi servono dall'html
var nameAndSurnameEl = document.getElementById("nameAndSurname").value;
var kmToGoEl = document.getElementById("kmToGo").value;
var discMessageEl = document.getElementById("discMessage");
var groupAgeEl = document.getElementById("groupAge").value;
console.log(nameAndSurnameEl, kmToGoEl, groupAgeEl);

if (groupAgeEl == "minorenne"){

  discMessageEl.innerHTML = "Hai diritto ad uno sconto del 20%!";

  var priceEl = document.getElementById("price").innerHTML = (((kmToGoEl * PRICE_KM) * 0.8 ).toFixed(2) + "\u20AC" );
} else if (groupAgeEl == "over65"){

	discMessageEl.innerHTML = "Hai diritto ad uno sconto del 40%!";

  var priceEl = document.getElementById("price").innerHTML = (((kmToGoEl * PRICE_KM) * 0.6 ).toFixed(2) + "\u20AC" );


} else if (groupAgeEl == "18-65"){

	discMessageEl.innerHTML = "Non hai diritto a nessuno sconto";

  var priceEl = document.getElementById("price").innerHTML = ((kmToGoEl * PRICE_KM).toFixed(2) + "\u20AC" );

}
//aggiorno gli input presi e li rinserisco in output sull'HTML
var ticketNameEl = document.getElementById('namePassenger');
ticketNameEl.innerHTML = nameAndSurnameEl;

document.getElementById("wagon").innerHTML =( getRandom(1, 20));
document.getElementById("seat").innerHTML =( getRandom(90000, 100000));

});

// prendo il bottone dall'HTML
var delBtnEl = document.getElementById('deleteButton');

delBtnEl.addEventListener('click', function(){

   var nameAndSurnameEl = document.getElementById('nameAndSurname');
	 var groupAgeEl = document.getElementById("groupAge");
	 var kmToGoEl = document.getElementById("kmToGo");
	 var ticketNameEl = document.getElementById('namePassenger').innerHTML = "";
   var discMessage = document.getElementById("discMessage").innerHTML = "";
	 var priceEl = document.getElementById("price").innerHTML = "";
	 document.getElementById("wagon").innerHTML ="";
	 document.getElementById("seat").innerHTML ="";
	 nameAndSurnameEl.value = "";
	 kmToGoEl.value = "";
	 groupAgeEl.value = "default";
	});
