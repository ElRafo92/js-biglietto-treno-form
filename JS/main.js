const genera = document.getElementById(`genera`);
const annulla = document.getElementById(`annulla`);
const biglietto = document.querySelector(`.biglietto`);
let randomCp = document.getElementById(`randomCp`);
let carrozza = document.getElementById(`carrozza`);

genera.addEventListener(`click`, function() {
   randomCp = Math.floor(Math.random() * 9999) + 10000;
   document.getElementById(`randomCp`).innerHTML = randomCp;
   console.log(randomCp);
    
   carrozza = Math.floor(Math.random() * 17) + 1;
   document.getElementById(`carrozza`).innerHTML = carrozza;
   console.log(carrozza);

   let nome = document.getElementById(`name`).value;
   document.getElementById(`user`).innerHTML = nome;

   let age = document.querySelector(`.list`).value;
   document.getElementById(`offerta`).innerHTML = age;

   let kilometri = Number(document.getElementById(`km`).value);
   let price = kilometri * 0.21;
   let finalPrice;

   if (age == `Minorenne`) { 
    finalPrice = price - (price * 0.2);
    fixedPrice = finalPrice.toFixed(2);
    document.getElementById(`costo`).innerHTML = `${fixedPrice} €`;
   }
   else if (age == `Anziano`) {
    finalPrice = price - (price * 0.4);
    fixedPrice = finalPrice.toFixed(2);
    document.getElementById(`costo`).innerHTML = `${fixedPrice} €`;
   }
   else {
    finalPrice = price;
    fixedPrice = finalPrice.toFixed(2)
    document.getElementById(`costo`).innerHTML = `${fixedPrice} €`;
   }

   biglietto.classList.add(`ticket-display`);
});

annulla.addEventListener(`click`, function() {
   biglietto.classList.remove(`ticket-display`);
});
