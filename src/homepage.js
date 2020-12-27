const mainDiv = document.querySelector('.container-fluid');

function createHomepage(){
  let navDiv = document.createElement('div'),
      bodyDiv = document.createElement('div'),
      footerDiv = document.createElement('div');

  bodyDiv.setAttribute('class','body-div')
  let contents = `
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Raymond</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto nav nav-pills">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Our Chefs</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Pages
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Book a table</a>
            <a class="dropdown-item" href="#">Make Reservations</a>
            <div class="dropdown-divider">Talk to us</div>
            <a class="dropdown-item" href="#">Awards</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Delievery</a>
        </li>
      </ul>
      
    </div>
  </nav> `

  let footer = `
      <footer class="bg-light text-center text-lg-start">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <form action="">
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-auto mb-4 mb-md-0">
              <p class="pt-2"><strong>Sign up for our newsletter</strong></p>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-5 col-12 mb-4 mb-md-0">
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input type="email" id="form5Example2" class="form-control" />
                <label class="form-label" for="form5Example2">Email address</label>
              </div>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-auto mb-4 mb-md-0">
              <!-- Submit button -->
              <button type="submit" class="btn btn-primary mb-4">Subscribe</button>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </form>
      </div>
      
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2020 Copyright:
        <a class="text-dark" href="#/">RaymondHotel.com</a>
      </div>
      <!-- Copyright -->
    </footer>
  
  `,

  aboutUs = `
      <div>
          <div>
              <img src="../src/img/about1.jpg" alt="">
          </div>
          <div class="section-heading">
              <h2>About Us</h2>
          </div>
          <div class="about-us-content">
              <span>restaurant style</span>
              <p>Sed commodo augue eu diam tincidunt, sit amet auctor lectus semper. Mauris porttitor diam at fringilla tempor. Integer molestie rhoncus nisi a euismod. Etiam scelerisque eu enim et vestibulum. Mauris finibus, eros a faucibus varius, dui risus mattis massa, sed lobortis ante ante eget justo. Nam eu dolor lorem. Praesent blandit leo sit amet velit accumsan ultrices. Vestibulum nec libero vel sapien dictum euismod eu ac justo.</p>
          </div>
      </div>
  `


  navDiv.innerHTML = contents
  footerDiv.innerHTML =footer
  bodyDiv.innerHTML = aboutUs
  mainDiv.append(navDiv,bodyDiv,footerDiv)
}

export default createHomepage