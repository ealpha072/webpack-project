const mainDiv = document.querySelector('.container-fluid');

function createNavBar(){
  let navDiv = document.createElement('div'),
      bodyDiv = document.createElement('div'),
      footerDiv = document.createElement('div');

  bodyDiv.setAttribute('class','body-div')
  let contents = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Raymond</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More Items
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Book a table</a>
            <a class="dropdown-item" href="#">Make Reservations</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
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
  
  `

  let bodycontent =`<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis felis et lectus facilisis, et scelerisque sapien blandit. Morbi eget magna id urna malesuada pharetra. In euismod quam quis lobortis gravida. Nulla facilisis rhoncus ligula, sed viverra nibh elementum suscipit. Phasellus tempus purus vel pharetra tincidunt. Nunc nec ornare mauris, ac rhoncus massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.

    Praesent euismod, purus mollis tincidunt fermentum, dui quam varius nibh, eu efficitur ex ante ut mauris. Suspendisse hendrerit pulvinar lorem. Maecenas fringilla, dolor ac pharetra ultrices, eros mi aliquet massa, ut tempor felis velit ut libero. Proin eu pellentesque turpis. In porttitor ipsum ut lorem euismod sodales. Phasellus id facilisis urna. Donec tincidunt viverra urna, at tincidunt diam ultricies sed. Ut eget auctor sapien. Nam eu dui eget nisi tristique porttitor vel nec lorem.
    
    Vivamus aliquet augue non nisi viverra imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum, est a laoreet elementum, quam turpis tincidunt dolor, eget tempus augue libero sit amet velit. Vivamus commodo ipsum elit. Vestibulum vitae metus ut ante accumsan consectetur at ut tellus. Mauris tristique pretium dolor quis blandit. Donec laoreet volutpat justo, a suscipit ligula pharetra eget. Suspendisse sed elit faucibus, pretium sapien vitae, sollicitudin nisl. Pellentesque tellus nulla, mattis eu condimentum vel, sodales a tortor. Donec rhoncus blandit imperdiet. Pellentesque tristique libero nec nibh maximus elementum.
    
    Vestibulum sagittis lacus eu urna ultrices, at consectetur ligula congue. Etiam tempus sapien ipsum, sed hendrerit nunc pharetra vel. Proin id condimentum massa. Nam dictum fermentum mattis. Nullam consequat sed lectus ut rhoncus. Nam porttitor congue semper. Phasellus cursus elit sapien, eu venenatis enim tincidunt eu. Donec varius odio a mi pulvinar, ac facilisis felis facilisis. Sed luctus ante in nulla dictum, at auctor velit cursus. Nam a mauris tincidunt, malesuada nisi et, posuere ipsum. Nulla euismod, magna et egestas accumsan, ante turpis interdum dui, non dapibus ante nunc at neque. Nam faucibus, turpis ac congue elementum, ligula erat semper justo, ac tempus magna tortor ac erat. Duis fermentum libero et lorem fringilla auctor. Duis vitae purus in arcu ultricies commodo. Mauris eu auctor nulla.
    
    Quisque dignissim, mi ac imperdiet dictum, purus ipsum vestibulum odio, ac lacinia arcu arcu ut odio. Phasellus pharetra urna arcu, id semper purus porttitor sed. Cras id neque eu lorem ullamcorper dapibus nec varius augue. Vestibulum varius vulputate fringilla. Vivamus sagittis eros eget elit ultricies, eget dignissim nulla egestas. Fusce ultrices, ipsum id mollis pretium, metus ipsum placerat neque, et gravida velit nibh ac sem. Donec ante dolor, mattis id elit eu, tempus volutpat velit. Pellentesque vulputate pellentesque libero sed dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In malesuada nibh arcu, at ornare quam laoreet et. Praesent consequat tristique dui nec tincidunt. Sed et felis nec nulla aliquam ultrices sollicitudin tempus quam. In magna quam, tristique id tristique at, scelerisque sit amet lacus.
  
  </P>`
  navDiv.innerHTML = contents
  footerDiv.innerHTML =footer
  bodyDiv.innerHTML = bodycontent
  mainDiv.append(navDiv,bodyDiv,footerDiv)
}

export default createNavBar