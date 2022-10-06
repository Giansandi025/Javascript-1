//No 1
let name = "Gian Edrisandi";
let email = "giansandi11@gmail.com";
const address = {
  alamat : "Komp.Depkes No 62 Kec Pauh, Kota Padang "
}
let isMaried = false;
const hobby = [ "Music", "Football"];

console.log("Nama     : " + name);
console.log("Email    : " + email);
console.log("Alamat   : " + address.alamat);
console.log("IsMaried : " + isMaried);
console.log("Hobi     : " + hobby);

console.log("===========================================");


//No 2
const ganjilGenap = (num) => {
for(var i=1; i<=num;i++){
  if(i%2===0){
    console.log(i ,"merupakan bilangan genap")
  }else{
      console.log(i ,"merupakan bilangan ganjil")
    }
  }
}
ganjilGenap(10);


console.log("===========================================");

//No 3
const string = (num) => {
  let string = "";
    
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      string += i;
    }
    string += "\n";
  }
    return string;
  }
  console.log(string(5));

  