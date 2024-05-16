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