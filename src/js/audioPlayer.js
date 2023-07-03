import playList from './playList';

// Constants
const playPrevBtn = document.querySelector('.play-prev');
const playPauseBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const liTracks = document.querySelectorAll('.play-item');
const audio = new Audio();

// Variables
let isPlaying = false;
let playNum = 0;

// Functions
export const playAudio = (trackIndex) => {
  // Если трек уже воспроизводится и выбран тот же трек, ставим его на паузу
  if (isPlaying && playNum === trackIndex) {
    audio.pause();
    isPlaying = false;
  } else {
    // Иначе воспроизводим выбранный трек
    playNum = trackIndex;
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlaying = true;
    audio.onended = () => {
      playNext();
    };
  }
  toggleCurrentTrack();
};

const toggleBtn = () => {
  if (isPlaying) {
    playPauseBtn.classList.add('pause');
  } else {
    playPauseBtn.classList.remove('pause');
  }
};

const toggleCurrentTrack = () => {
  liTracks.forEach((li, index) => {
    li.classList.toggle('item-active', index === playNum);
  });
};

const playNext = () => {
  if (playNum < playList.length - 1) {
    playNum += 1;
  } else {
    playNum = 0;
  }
  audio.src = playList[playNum].src;
  if (isPlaying) {
    audio.play();
  }
  toggleBtn();
  toggleCurrentTrack();
};

const playPrev = () => {
  if (playNum > 0) {
    playNum -= 1;
  } else {
    playNum = playList.length - 1;
  }
  audio.src = playList[playNum].src;
  if (isPlaying) {
    audio.play();
  }
  toggleBtn();
  toggleCurrentTrack();
};

// Event listeners
playPauseBtn.addEventListener('click', () => {
  playAudio(playNum);
  toggleBtn();
});
playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);
liTracks.forEach((li, index) => {
  li.addEventListener('click', () => {
    playAudio(index);
    toggleBtn();
  });
});
