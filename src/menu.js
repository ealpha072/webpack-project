import {mainDiv,createNavDiv,createFooter} from './homepage';
//createNavDiv()

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

function createMealDiv2(){
  let mealDiv2 = document.createElement('div');
  mealDiv2.setAttribute('id','meals-menu')

  let contents =`
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="d-sm-flex align-items-center">
        <div class="dish-thumb">
            <img src="../src/img/menu-img/dish-1.png" alt="">
        </div>
        <div class="dish-description">
            <h3>Lorem Ipsum Dolor Sit Amet</h3>
            <p>Sed commodo augue eu diam tincidunt, sit amet auctor lectus semper. <br>
            Mauris porttitor diam at fringilla tempor.</p>
        </div>
        <div class="dish-value">
            <h3>$45</h3>
        </div>
      </div>
      <div class="d-sm-flex align-items-center">
        <div class="dish-thumb">
            <img src="../src/img/menu-img/dish-1.png" alt="">
        </div>
        <div class="dish-description">
          <h3>Lorem Ipsum Dolor Sit Amet</h3>
          <p>Sed commodo augue eu diam tincidunt, sit amet auctor lectus semper. <br>
          Mauris porttitor diam at fringilla tempor.</p>
        </div>
        <div class="dish-value">
          <h3>$45</h3>
        </div>
      </div>
      <div class="d-sm-flex align-items-center">
        <div class="dish-thumb">
            <img src="../src/img/menu-img/dish-1.png" alt="">
        </div>
        <div class="dish-description">
          <h3>Lorem Ipsum Dolor Sit Amet</h3>
          <p>Sed commodo augue eu diam tincidunt, sit amet auctor lectus semper.<br>
           Mauris porttitor diam at fringilla tempor.</p>
        </div>
        <div class="dish-value">
          <h3>$45</h3>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div class="d-sm-flex align-items-center">
        <div class="dish-thumb">
            <img src="../src/img/menu-img/dish-2.png" alt="">
        </div>
        <div class="dish-description">
          <h3>Lorem Ipsum Dolor Sit Amet</h3>
          <p>Sed commodo augue eu diam tincidunt, sit amet auctor lectus semper.</p>
        </div>
        <div class="dish-value">
          <h3>$45</h3>
        </div>
      </div>
      <div class="d-sm-flex align-items-center">
        <div class="dish-thumb">
            <img src="../src/img/menu-img/dish-2.png" alt="">
        </div>
        <div class="dish-description">
          <h3>Lorem Ipsum Dolor Sit Amet</h3>
          <p>Sed commodo augue eu diam tincidunt, sit amet auctor lectus semper.</p>
        </div>
        <div class="dish-value">
          <h3>$45</h3>
        </div>
      </div>
      <div class="d-sm-flex align-items-center">
        <div class="dish-thumb">
            <img src="../src/img/menu-img/dish-2.png" alt="">
        </div>
        <div class="dish-description">
          <h3>Lorem Ipsum Dolor Sit Amet</h3>
          <p>Sed commodo augue eu diam tincidunt, sit amet auctor lectus semper. </p>
        </div>
        <div class="dish-value">
          <h3>$45</h3>
        </div>
      </div>
    </div>    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  
  `
  mealDiv2.innerHTML =contents;
  mainDiv.appendChild(mealDiv2)
}

function createMenuPage(){
  createNavDiv();
  createMealDiv1();
  createMealDiv2();
  createFooter();
}

export {createMenuPage}