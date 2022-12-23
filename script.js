const characters = {
     uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
     lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
     symbols: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"],
     numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
} 

// Initializing Variables

let randomCharacter;
const passField1 = document.getElementById("field_one");
const passField2 = document.getElementById("field_two");
const generateBtn = document.getElementById("gen_btn");
const passSlider = document.getElementById("passlen_slider");
const sliderValue = document.getElementById("slider_value");
const settingBtn = document.getElementById("setting_btn");
const settingScr = document.getElementById("setting_scr");
const uppercase = document.getElementById("chkbx_uppercase");
const lowercase = document.getElementById("chkbx_lowercase");
const symbol = document.getElementById("chkbx_symbol");
const number = document.getElementById("chkbx_number");





function getLowercase() {
return characters.lowercase[Math.floor(Math.random() * characters.lowercase.length)];
}

function getUppercase() {
return characters.uppercase[Math.floor(Math.random() * characters.uppercase.length)];
}

function getNumber() {
return characters.numbers[Math.floor(Math.random() * characters.numbers.length)];
}

function getSymbol() {
return characters.symbols[Math.floor(Math.random() * characters.symbols.length)];
}


generateBtn.addEventListener("click", getRandomPassword);


function getRandomPassword() {

     passField1.textContent = "";
     passField2.textContent = "";

     for (let i = 0; i <= passSlider.value; i++) {
          randomCharacter = genRandomPassword();
          passField1.textContent += randomCharacter
     }

     for (let i = 0; i <= passSlider.value; i++) {
           randomCharacter = genRandomPassword();
          passField2.textContent += randomCharacter
     } 

     function genRandomPassword() {
          let randomPassword = [];
          if (uppercase.checked) {
          randomPassword.push(getUppercase());
          }
          if (lowercase.checked) {
          randomPassword.push(getLowercase());
          }
          if (number.checked) {
          randomPassword.push(getNumber());
          }
          if (symbol.checked) {
          randomPassword.push(getSymbol());
          }
          if (randomPassword.length === 0) return "*";
          return randomPassword[Math.floor(Math.random() * randomPassword.length)];
          }

          console.log(genRandomPassword())

}




passField1.addEventListener('click', () => {
      navigator.clipboard.writeText(passField1.textContent);
      alert(passField1.textContent + " Copied");
})


passField2.addEventListener('click', () => {
      navigator.clipboard.writeText(passField2.textContent);
      alert(passField2.textContent + " Copied");
})


passSlider.oninput = function() {
   sliderValue.textContent = "Length : " + this.value;
}


settingBtn.addEventListener('click', () => {
     settingScr.classList.toggle('settings-scr');
     settingBtn.classList.toggle('setting-btn-active')
})
