//Snap to section upon "EXPLORE"
document.addEventListener('DOMContentLoaded', function() {
    const exploreButton = document.querySelector('.hero__explore-button');
    const page1Section = document.querySelector('.page1');

    exploreButton.addEventListener('click', function() {
        page1Section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});





//Circular Text
const hero_circle_text = document.querySelector(".hero .hero__circle-text p")
hero_circle_text.innerHTML = hero_circle_text.innerText.split("").map(
    (char, i) => `<span style="transform:rotate(${i * 13}deg)">${char}</span>`
).join("")

// -----------



//Scroll Snap
const container = document.querySelector('.master-containe');
const items = document.querySelectorAll('.pages');





