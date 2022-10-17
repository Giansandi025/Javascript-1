//Membalikkan Kata 
const reverseWord = (kata) => {
    const words = kata.split(" ")  
    const reWords = words.reverse() 
    return reWords.join(" ") 
}
console.log(reverseWord('Saya Belajar Javascript'));


//Cek Palindrome
function palindromeCheck (str) {
  const kata = str.toLowerCase().split("").reverse().join("");
  if(kata === str) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromeCheck('malam'));
console.log(palindromeCheck('motor'));





