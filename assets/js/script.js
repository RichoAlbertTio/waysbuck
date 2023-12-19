// digunakan untuk ceklis produk
var productLinks = document.querySelectorAll('.product-link');
productLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var ceklisElement = link.querySelector('.ceklis');
    ceklisElement.style.display = (ceklisElement.style.display === 'none') ? 'inline-block' : 'none';
  });
});