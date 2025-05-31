const galleryImages = document.querySelectorAll('.gallery-img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const closeBtn = document.querySelector('.close-btn');

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.classList.remove('hidden');
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.add('hidden');
});