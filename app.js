const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const generateEl = document.getElementById("generate");

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvxyz";
const nums = "0123456789";

function getUpperCaseLetter() {
  return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}
function getLowerCaseLetter() {
  return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
}
function getNumber() {
  return nums[Math.floor(Math.random() * nums.length)];
}

function passwordGenerator() {

    const len = lengthEl.value;
    let password = '';

    for(let i =0;i<len;i++) {

        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;

}

function generateX() {
    const xs = [];
    if(uppercaseEl.checked) {
        xs.push(getUpperCaseLetter());
    }
    if(lowercaseEl.checked) {
        xs.push(getLowerCaseLetter());
    }
    if(numberEl.checked) {
        xs.push(getNumber());
    }

    if(xs.length === 0) return "";
    return xs[Math.floor(Math.random()*xs.length)];
} 

copyEl.addEventListener("click", () => {
    const textToCopy = pwEl.innerText;
    
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    
    tempTextArea.select();
    document.execCommand("copy");
    
    document.body.removeChild(tempTextArea);
    
    copyEl.textContent = "Copied!";
    setTimeout(() => {
      copyEl.textContent = "Copy to clipboard";
    }, 1500);   
  });

generateEl.addEventListener('click',passwordGenerator);



