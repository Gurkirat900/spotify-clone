console.log("hello");

const AudioElement = new Audio("audios/1.mp3");
const masterplay = document.getElementById("masterplay");
let songplayicon= document.getElementsByClassName("songplayicon");
let count=0;
let myprogressbar= document.getElementById('myprogressbar');

// Function to update the masterplay icon
function updateMasterPlayIcon() {
  const playIcon = masterplay.querySelector("svg");
  if (count ==1) {
    playIcon.classList.remove('fa-circle-play');
    playIcon.classList.add('fa-circle-pause');
    // Also update the song-specific play icons
    const playIcons = document.querySelectorAll('.songplayicon i');
    playIcons.forEach((icon) => {
      icon.classList.remove('fa-circle-play');
      icon.classList.add('fa-circle-pause');
    });
   }
   else {
    playIcon.classList.remove('fa-circle-pause');
    playIcon.classList.add('fa-circle-play');
    // Also update the song-specific play icons
    const playIcons = document.querySelectorAll('.songplayicon i');
    playIcons.forEach((icon) => {
      icon.classList.remove('fa-circle-pause');
      icon.classList.add('fa-circle-play');
    });
   }
}

// play the audio and change icon
masterplay.addEventListener('click', () => {
  if (count ==0) {
    AudioElement.play();
    count=1;
  } else {
    AudioElement.pause();
    count=0;
  }
  updateMasterPlayIcon(); // Update the masterplay icon and song-specific play icons
});

 // change the progressbar
AudioElement.addEventListener('timeupdate', ()=> {
  let progress= parseInt((AudioElement.currentTime/AudioElement.duration)*100);
  myprogressbar.value=progress;
})

// change audio as well
myprogressbar.addEventListener('change', ()=> {
  AudioElement.currentTime= myprogressbar.value*AudioElement.duration/100;
})

// play song when click icon
document.getElementById('song-items').addEventListener('click', (e) => {
  const playIcons = document.querySelectorAll('.songplayicon i');
  playIcons.forEach((icon) => {
      icon.classList.remove('fa-circle-pause');
      icon.classList.add('fa-circle-play');
  });

  if (e.target.classList.contains('play')) {
      if (count==0) {
          e.target.classList.remove('fa-circle-play');
          e.target.classList.add('fa-circle-pause');
          count=1;
      } else {
          e.target.classList.remove('fa-circle-pause');
          e.target.classList.add('fa-circle-play');
          count=0;
      }
     
      const songsrc= e.target.getAttribute('data-audio-src');
      AudioElement.src=songsrc;
      AudioElement.currentTime=0; 
      if(count==1){
        AudioElement.play();
      } else{
        AudioElement.pause();
      }
      
      updateMasterPlayIcon();
  }
});
