//1. Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta
//contoh penggunaannya(kecuali : split, reverse, join, foreach, map)

//1. Filter 
/*
filter() merupakan method array di JavaScript yang berfungsi untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu.

Method ini mengembalikan array baru yang berisi elemen yang sesuai dengan kriteria yang dicari atau lulus pengujian fungsi callback.

Mirip seperti find(), alih-alih mengembalikan satu elemen, filter() mengembalikan semua elemen.

Method ini mengembalikan array baru, tidak mengubah array asli atau sumber.

Mari kita pelajari lebih lanjut method array filter() mulai dari sintaks dan contoh penggunaannya.
*/
//contoh

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const value = values.filter((elemen) => elemen % 2 === 0);

console.log(value); // [ 2, 4, 6, 8 

//2. Push
/*
Saat mengelola data array terkadang kita perlu menambahkan elemen baru, salah satu cara yang bisa kita gunakan adalah menggunakan method push().

Method array push() berfungsi untuk menambahkan satu atau lebih elemen ke akhir array termasuk array multidimensi, method ini mengembalikan panjang array baru.
*/

const mahasiswa1 = ['budi', 'bayu'];
const panjang = mahasiswa1.push('yaya', 'bambang');

console.log(mahasiswa1); // [ 'budi', 'bayu', 'yaya', 'bambang' ]
console.log(panjang);

//3. Pop
/* 
pop() merupakan method array di JavaScript yang berfungsi untuk menghapus elemen terakhir dari array.

Method ini mengubah panjang array dan mengembalikan elemen yang dihapus.
 */

const mahasiswa2 = ['', 'andre', 'doni'];
const mahasiswaDihapus = mahasiswa2.pop();

console.log(mahasiswa2); // [ 'gian', 'andre' ]
console.log(mahasiswaDihapus); // doni

//4. Slice
/* 
slice() merupakan method array di JavaScript yang berfungsi menyalin sebagian elemen array ke array baru.

Elemen yang ingin disalin ditentukan menggunakan indeks, indeks awal dan akhir. Method ini tidak mengubah array asli.
 */

const hewan = ['kucing', 'bebek', 'ayam', 'kambing', 'semut'];

const hewanBaru = hewan.slice(1, 4);

console.log(hewanBaru); // [ 'bebek', 'ayam', 'kambing' ]


//5. Find
/* 
find() merupakan method array di JavaScript yang berfungsi untuk mencari elemen tertentu dalam array yang sesuai dengan fungsi pengujian yang disediakan.

Dengan method ini Anda bisa mencari satu elemen tertentu di dalam array berdasarkan kriteria yang ditentukan.
 */

const values1 = [1, 2, 3, 4, 5, 6];

const value1 = values1.find((elemen) => elemen < 5);

console.log(value1); // 1


//6. Reduce
/* 
reduce() merupakan method array di JavaScript yang mengeksekusi fungsi callback pada setiap elemen array, nilai hasil kalkulasi pada elemen sebelumnya digunakan untuk melakukan kalkulasi pada elemen berikutnya.

Setelah menjalankan fungsi callback untuk semua elemen array, method ini menghasilkan nilai tunggal.
 */

const arrAngka = [1, 2, 3, 4, 5];

const result = arrAngka.reduce((nilaiSebelumnya, nilaiSaatIni) => {
  return nilaiSebelumnya + nilaiSaatIni;
});

console.log(result);

//7. Sort
/* 
sort merupakan method array di JavaScript yang berfungsi untuk mengurutkan array
Tapi, kita bisa mengatur urutannya sesuai kebutuhan entah itu ascending (naik) maupun descending (menurun) menggunakan fungsi pembanding yang diterima method sort.
 */

const angka = [3, 1, 5, 0, 10, 13, 20, 27];
angka.sort();
console.log(angka);

//8.Include
/* 
includes merupakan method array yang berfungsi untuk mengetahui apakah sebauh array mengandung nilai tertentu atau tidak, mengembalikan nilai true jika ya atau false jika tidak.

Dengan menggunakan method ini kita tidak perlu melakukan perulangan secara manual untuk mengecek setiap elemen array.
 */

const buah = ['mangga', 'pisang', 'apel'];

const adaApel = buah.includes('apel');
const adaAnggur = buah.includes('anggur');

console.log(adaApel); // true
console.log(adaAnggur);

//9. Concat
/* 
Method concat berfungsi untuk menggabungkan dua atau lebih array menjadi satu array baru.

Method ini tidak mengubah array sumber, tapi mengembalikan array baru.

Method ini dapat membantu kita ketika kita memiliki beberapa array terpisah dan kita ingin menggabungkan semuanya ke dalam satu array.
 */

const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

const arr3 = arr1.concat(arr2);

console.log(arr3); // [ 'a', 'b', 'c', 1, 2, 3 ]

//10. Some
/* 
Method some() berfungsi untuk menguji apakah setidaknya satu elemen array lulus ketika diuji dengan fungsi callback yang disediakan. Tidak mengubah array sumber.

Method ini akan mengembalikan nilai true jika setidaknya satu elemen array lulus atau mengembalikan nilai truthy ketika diuji dengan menggunakan fungsi callback.
 */

const mahasiswa = [
    { nama: 'budi', nilai: 85 },
    { nama: 'bambang', nilai: 75 },
    { nama: 'nina', nilai: 90 },
  ];
  
  const adaYgLulus = mahasiswa.some((mahasiswa) => mahasiswa.nilai >= 80);
  
  console.log(adaYgLulus);