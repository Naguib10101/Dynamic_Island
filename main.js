let pillbtn = document.querySelector('.dynamic-island .island-pill');
let dynamicIsland = document.querySelector('.dynamic-island');
let dynamicContainer = document.querySelector('.island-container');
pillbtn.addEventListener('click' , () =>{
  dynamicIsland.classList.toggle('active');
  dynamicContainer.classList.toggle('active');
});