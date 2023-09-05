const modal = document.querySelector('.modal');
const show_modal_btn = document.querySelector('.show-modal-btn');
const close_modal_btn = document.querySelector('.close-modal-btn');
const container = document.querySelector('.container')

show_modal_btn.addEventListener('click', (e) => {
    modal.style.display = 'block';
    container.style.opacity = 0.6;
    e.stopPropagation();
})

close_modal_btn.addEventListener('click', () => {
    modal.style.display = 'none';
})

modal.addEventListener('click', (e) => {
    e.stopPropagation();
})

window.addEventListener('click', (e) => {
    modal.style.display = 'none';
    container.style.opacity = 1;
})