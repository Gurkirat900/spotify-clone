console.log("hello");

let AudioElement= new Audio('illahi.mp3');
let Masterplay= document.getElementById('masterplay');

Masterplay.addEventListener('click', ()=> {
    console.log('button clicked');
  if(AudioElement.paused || AudioElement.currentTime<=0){
       AudioElement.play();
  }
})


