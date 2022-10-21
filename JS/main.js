// richiesta età e kilometri da percorrere
const age = Number (prompt('Please insert your age:'));
console.log (age)

const Km = Number (prompt('Please insert the Km of your travel:'));
console.log (Km)

const price = (Km * 0.21);
console.log (price)

let realPrice;
let fixedNum;
if (age < 18) {
    realPrice = (price - (price * 0.2));
    fixedNum = realPrice.toFixed(2);
    console.log (fixedNum);
    document.getElementById ('realPrice').innerHTML = `${fixedNum} $`;
} else if (age >= 65){
    realPrice = (price - (price * 0.4));
    fixedNum = realPrice.toFixed(2);
    console.log (fixedNum);
    document.getElementById ('realPrice').innerHTML = `${fixedNum} $`;
} 
else {
    const fixedPrice = price.toFixed(2);
    console.log (fixedPrice);
    document.getElementById ('realPrice').innerHTML = `${fixedPrice} $`; 
}