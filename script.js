const modal = document.getElementById("modal");
const closeButton = document.getElementById("close");
const modalGrid = document.getElementById("modal-grid");
const galleryItems = document.querySelectorAll(".gallery-item");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentGalleryIndex = 0; 
 
galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        currentGalleryIndex = parseInt(item.dataset.index);  
        openModal(currentGalleryIndex);  
    });
}); 

function openModal(index) {
    modal.style.display = "block"; 
    updateModalContent(index);  
}
 
function updateModalContent(index) {
    modalGrid.innerHTML = "";  

    const item = galleryItems[index]; 
    const images = item.querySelectorAll("img"); 

    images.forEach(img => {
        const modalImg = document.createElement("img"); 
        modalImg.src = img.src;  
        modalImg.alt = img.alt;  
        modalGrid.appendChild(modalImg); 
    });
}
 
closeButton.addEventListener("click", () => {
    modal.style.display = "none";  
});
 
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none"; 
    }
});
  
prevButton.addEventListener("click", () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;  
    updateModalContent(currentGalleryIndex);  
});
 
nextButton.addEventListener("click", () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;  
    updateModalContent(currentGalleryIndex); 
});