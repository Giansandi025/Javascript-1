function seleksiNilai (nilaiAwal, nilaiAkhir, dataArray) {
    //validasi nilaiAwal > nilaiAkhir
    if (nilaiAwal > nilaiAkhir) 
      return console.log("nilai akhir harus lebih besar dari nilai awal")
      //validasi panjang dataArray < 5
      if (dataArray.length < 5) 
      return console.log("data array harus lebih dari 5") 
    
    //Seleksi data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir
    let hasil = []
    dataArray.forEach(number => {
      if (number > nilaiAwal && number < nilaiAkhir) 
      return hasil.push(number)
    })
      if (hasil.length === 0) 
      return console.log("Nilai tidak ditemukan")
      console.log(hasil.sort(function(a, b){return a - b}))
   }
  
  seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
  seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
  seleksiNilai(5, 17, [2, 25, 4])
  seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])