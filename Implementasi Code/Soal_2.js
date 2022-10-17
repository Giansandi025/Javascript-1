const pijarFood = (harga, voucher, jarak, pajak) => {
    if(voucher == "PIJARFOOD5") {
      if (harga >= 50000) {
          potongan = 0.5 * harga
           if (potongan  > 50000){
            potongan = 50000
           }
      } else {
        potongan = 0
      }
    } if (voucher == "DITRAKTIRPIJAR") {
      if (harga >= 25000){
        potongan = 0.6 * harga
        if (potongan > 30000){
          potongan = 30000
        }
      } else {
        potongan = 0
      }
  }  
  if (jarak > 2) {
    let jarakKm = jarak - 2
    biaya = 5000 + jarakKm * 3000
  } else {
    biaya = 5000
  }
  if (pajak == true) {
    totalPajak = 0.05 * harga
  } else {
    totalPajak = 0
  }
  console.log(`Harga        :  ${harga}`)
  console.log(`Potongan     :  ${potongan}`)
  console.log(`Biaya Antar  :  ${biaya}`)
  console.log(`Pajak        :  ${totalPajak}`)
  console.log(`SubTotal     :  ${harga - potongan + biaya + totalPajak}`)
}  
pijarFood(75000, "PIJARFOOD5", 5, true)

