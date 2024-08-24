const images = document.querySelectorAll('.images img');
let displayImage = 0;

function updateImage() 
{
    images.forEach((img, i) => {
        if (i === displayImage) {
            img.classList.add('visible'); // Agregar clase visible
        } else {
            img.classList.remove('visible'); // Quitar clase visible
        }
    });
}

function updateButtons() {
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');

    leftButton.disabled = displayImage === 0;
    rightButton.disabled = displayImage === images.length - 1;

    leftButton.style.backgroundColor = displayImage === 0 ? 'grey' : '#ff7e5f';
    rightButton.style.backgroundColor = displayImage === images.length - 1 ? 'grey' : '#ff7e5f';
}

document.getElementById('left-button').addEventListener('click', () => {
    if (displayImage > 0) {
        displayImage--;
        updateImage();
        updateButtons();
    }
});

document.getElementById('right-button').addEventListener('click', () => {
    if (displayImage < images.length - 1) {
        displayImage++;
        updateImage();
        updateButtons();
    }
});

updateImage();
updateButtons();
