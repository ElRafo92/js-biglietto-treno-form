const genera = document.getElementById(`genera`);
let randomCp = document.getElementById(`randomCp`);
let carrozza = document.getElementById(`carrozza`);

genera.addEventListener(`click`, function() {
   const 

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

   let kilometri = document.getElementById(`km`).value;
   let price = kilometri * 0.21;
   let finalPrice;

   if (age == `minorenne`) { 
    finalPrice = price - (price * 0.2);
    fixedPrice = finalPrice.toFixed(2);
    document.getElementById(`costo`).innerHTML = fixedPrice;
   }
   else if (age == `anziano`) {
    finalPrice = price - (price * 0.4);
    fixedPrice = finalPrice.toFixed(2);
    document.getElementById(`costo`).innerHTML = fixedPrice;
   }
   else {
    finalPrice = price;
    document.getElementById(`costo`).innerHTML = finalPrice;
   }
});