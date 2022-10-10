/*
Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang
menerapkan callback function dengan data sebagai berikut:
const name = [
"Abigail", "Alexandra", "Alison",
"Amanda", "Angela", "Bella",
"Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth",
"Ella", "Faith", "Olivia", "Penelope"]
Contoh:
searchName(“an”, 3, callback)
Output:
[“Alexandra”,”Amanda”,”Angela”]
*/


const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
];

function searchName(data, limit, collback){
    let listName = name.filter((string) => string.toLowerCase().includes(data.toLowerCase()))
    .filter((string, i) => i < limit); 
    collback(listName)
}
searchName("an", 3, (data) => {
    console.log(data)
})
