

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block"; 
    setTimeout(function() {
        modal.classList.add('open'); 
    }, 50); 
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove('open'); 
    modal.style.display = "none"; 
}

window.onclick = function (event) {
    var modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
        if (event.target == modal) {
            modal.style.display = "none";
            modal.classList.remove('open'); 
        }
    });
}
