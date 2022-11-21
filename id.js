const quote = [
  " 1. When you have a dream, you've got to grab it and never let go.",
  " 2. So many books, so little time",
  " 3. I'm not afraid of death, I just don't want to",
  " 4. I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  " 5. You only live once, but if you do it right, once is enough.",
  " 6. Nothing is impossible. The word itself says Im possible and I'm doing it",
  " 7. I am not a product of my circumstances. I— Audrey Hepburn"
];

const colours = ["red", "blue", "ff6347", "green", "Tomato", "DodgerBlue", "Violet"];

const colourst = ["yellow", "greenyellow", "darkgreen", "cyan"];


function newQuote() {
  const randomNumber = Math.floor(Math.random() * quote.length);
  document.getElementById("Quote_Show").innerHTML = quote[randomNumber];

  var element = document.getElementById("Quote_Show");
  element.style.backgroundColor = colours[randomNumber];

  var element = document.getElementById("Quote_Show");
  element.style.color = colourst[randomNumber];

}


let hour = new Date().getHours();
var span = document.getElementById("SKY");
if (hour > 20) {
  span.textContent = "NIGHT";
}
else {
  span.textContent = "DAY";
}

// var date = new Date();
// var current_time = date.getHours();
// var span = document.getElementById("SKY");
// if (current_time = 1) {
//   span.textContent = "NIGHT";
// }
// else {
//   span.textContent = "DAY";
// }
