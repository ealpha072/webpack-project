import {mainDiv,createNavDiv} from './homepage';
createNavDiv()

function createMealDiv1(){
  let mealDiv1 = document.createElement('div');
  let contents = `
    <div>
      <img src="../src/img/hero-1.jpg" style="width:100%;height:500px;object-fit: cover;">
    <div>
  `
  mealDiv1.innerHTML = contents
  mainDiv.appendChild(mealDiv1)
}

export {createMealDiv1}