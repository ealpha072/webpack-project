const div = document.querySelector('.container')
const button = document.querySelector('.contain')

function sayHello(){
  
  div.innerHTML = ''
  div.innerHTML = 'This is my desire'
}

button.addEventListener('click',(e)=>{
  e.preventDefault();
  sayHello();
})