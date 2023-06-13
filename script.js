var randomNum = Math.floor(Math.random() * 10);  // Ixtiyoriy raqamni generatsiya qilish
var attempts = 0;  // Urinishlar soni



function checkGuess() {
  var guess = parseInt(document.getElementById('guess').value);
  console.log(randomNum)
  if (guess < randomNum) {
    document.getElementById('result').innerText = "Siz taxmin qilayotgan son men o`ylagan sondan kichik";
    attempts++;
  } else if (guess > randomNum) {
    document.getElementById('result').innerText = "Siz taxmin qilayotgan son men o`ylagan sondan katta";
    attempts++;
  } else if (guess == randomNum){
    attempts++;
    document.getElementById('result').innerText = "To'g'ri! Siz " + attempts + " urinishda topdingiz.";
    
    
  }
}

function updateRandomNum() {
  randomNum = Math.floor(Math.random() * 10);  // Yangi ixtiyoriy raqamni generatsiya qilish
  attempts = 0;
  document.getElementById('result').innerText = "";
  document.getElementById('guess').value = "";
  document.getElementById('reload').style.display  = null;

}
