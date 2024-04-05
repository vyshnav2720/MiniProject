
const mastersection = document.querySelectorAll('.master-container');
const sections = document.querySelectorAll('.master-container section');
const hsnap1 = document.querySelectorAll('.master-container .hsnap1');
const vsnap1 = document.querySelectorAll('.master-container .vsnap1');
const vsnap2 = document.querySelectorAll('.master-container .vsnap2');
const vsnap3 = document.querySelectorAll('.master-container .vsnap3');
const hsnap2 = document.querySelectorAll('.master-container .hsnap2');

const options = {
  threshold: 0.5 // Defines at what percentage of the target's visibility the observer's callback should be executed
};


function Snapper(className){
    if(className == "vsnap1"){
    }
    
}


const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active-section');
      Snapper(entry.target.classList[0]);

      
      sections.forEach(section => {
        if (section !== entry.target) {
          section.classList.remove('active-section');
        }
      });
    }
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach(section => {
  observer.observe(section);
});






