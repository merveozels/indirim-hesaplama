function calculateDiscount() {
  let cost = document.getElementById('cost');
  let sale = document.getElementById('sale');
  let result = cost.value - (cost.value * (sale.value / 100));
//  inputtan deger almak istiyorsan (veri.value kullanilir)
  if (result >= 0) {
    alert('İndirimli fiyat: ' + result);
  } else {
    alert('Hatalı değer girdiniz');
  }
}