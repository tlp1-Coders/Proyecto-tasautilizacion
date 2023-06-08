document.getElementById ('DOMContentLoaded', function(){
    let pagoMetodo = document.getElementsByName('pagoMetodo');
    let pagoForms = document.getElementsByClassName('pagoForm');
})

for (let i = 0; i < pagoMetodo.length; i++) {
    pagoMetodo[i].addEventListener('change', function() {
      let seleccionarMetodo = this.value;

      for (let j = 0; j < pagoForms.length; j++) {
        pagoForms[j].style.display = 'none';
      }
      document.getElementById(seleccionarMetodo + 'Form').style.display = 'block';
      });
    }
  
    document.getElementById('submitPago').addEventListener('click', function() {
      let seleccionarMetodo = document.querySelector('input[name="pagoMetodo"]:checked').value;
      
      alert('Pago realizado con éxito utilizando ' + seleccionarMetodo);
    });

