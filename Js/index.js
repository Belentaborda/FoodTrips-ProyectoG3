document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var category = document.getElementById('category').value;
    var agree = document.getElementById('agree').checked;
  
    if (!name || !email || !message || !category || !agree) {
      alert('Por favor complete todos los campos obligatorios.');
      event.preventDefault(); // Evitar que se envíe el formulario
    }
  });

  document.getElementById('upload').addEventListener('change', function() {
    var fileName = this.files[0] ? this.files[0].name : 'No se ha seleccionado ningún archivo';
    document.getElementById('file-name').textContent = fileName;
  });