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

for (var i=1; i<49; i++) {
    
    img = new Image();
    img.src = `/gallery/crochet/${i}.webp`;

    let anchor = document.createElement('a');
    anchor.setAttribute('href', img.src);
    anchor.setAttribute('rel', "noopener noreferrer");
    anchor.setAttribute('target', "_blank");
    
    imgcontainer.appendChild(anchor);
    anchor.appendChild(img);
}