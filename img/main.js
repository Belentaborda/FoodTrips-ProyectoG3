const openModal = document.querySelector('.ver-fotos');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal-show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal-show');
});



const openMap = document.querySelector('.ver-mapa');
const map = document.querySelector('.map');
const closeMap = document.querySelector('.close-map');

openMap.addEventListener('click', (m)=>{
    m.preventDefault();
    map.classList.add('show-map');
});

closeMap.addEventListener('click', (m)=>{
    m.preventDefault();
    map.classList.remove('show-map');
});