
import {mainDiv,createNavDiv,createFooter,createHomepage} from './homepage';
import {createMenuPage}  from './menu';
//createNavDiv()
createMenuPage();
createFooter()
//createHomepage();

/*let menuTab = document.getElementById('menu-link'),
    homeTab = document.getElementById('home-link');
console.log(homeTab)

homeTab.addEventListener('click',(e)=>{
  mainDiv.innerHTML = '';
  createHomepage();
})

menuTab.addEventListener('click',(e)=>{
  mainDiv.innerHTML ='';
  createNavDiv();

  createFooter();
})*/

