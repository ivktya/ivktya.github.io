// tab changer
document.addEventListener("DOMContentLoaded", () => {

    'use strict';
    
    const tabs = document.querySelectorAll('.tab');
    const boxes = document.querySelectorAll('.box');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const i = parseInt(tab.dataset.index);
            
            boxes.forEach((b, j) => b.classList.toggle('hidden', j !== i));
        });
    });
});

const imgcontainer = document.getElementById('gallery');

// var crochet = [];

for (var i=1; i<49; i++) {
    
    img = new Image();
    img.src = `/gallery/crochet/${i}.webp`;
    imgcontainer.appendChild(img);
}