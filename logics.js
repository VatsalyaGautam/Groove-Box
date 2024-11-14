console.log("Welcome to the console of GROOOOOVE BOX");
let songIndex = 0;
let audioElement = new Audio("songs/AfterDark.mp3");
const masterPlay = document.querySelector("#master-play");
let progressBar = document.querySelector("#progress-bar");
let songtime = document.querySelector(".songtime");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let durationmins = document.querySelector("#durationmins");
let durationsecs = document.querySelector("#durationsecs");
const nowPlaying = document.querySelector("#NowPlaying");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const caption = document.querySelector("#caption");
const songs = [
  { songname: "After Dark", path: "songs/AfterDark.mp3" },
  { songname: "Call Out My Name", path: "songs/CallOutMyName.mp3" },
  { songname: "Die For You", path: "songs/DieForYou.mp3" },
  { songname: "I Was Never There", path: "songs/IWasNeverThere.mp3" },
  { songname: "Metamorphosis", path: "songs/Metamorphosis.mp3" },
  { songname: "Moth To A Flame", path: "songs/MothToAFlame.mp3" },
  { songname: "See You Again", path: "songs/SeeYouAgain.mp3" },
  { songname: "Starboy", path: "songs/Starboy.mp3" },
  { songname: "Swim", path: "songs/Swim.mp3" },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    if (masterPlay.classList.contains("fa-play")) {
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    }

    if (window.innerWidth > 672) {
      gif.style.visibility = "visible";
      caption.style.visibility = "visible";
    }
  } else {
    audioElement.pause();
    if (masterPlay.classList.contains("fa-pause")) {
      masterPlay.classList.add("fa-play");
      masterPlay.classList.remove("fa-pause");
    }
    gif.style.visibility = "hidden";
    caption.style.visibility = "hidden";
  }
});

audioElement.addEventListener("timeupdate", () => {
  let progress = (
    (audioElement.currentTime / audioElement.duration) *
    100
  ).toFixed(2);
  progressBar.value = progress;
});
progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

const new_song_duration = (audioElement) => {
  let duration = audioElement.duration;
  let dmins = Math.floor(duration / 60);
  let dsecs = Math.floor(duration % 60);
  durationmins.innerHTML = dmins < 10 ? "0" + dmins : dmins;
  durationsecs.innerHTML = dsecs < 10 ? "0" + dsecs : dsecs;
};

audioElement.addEventListener("loadedmetadata", () => {
  new_song_duration(audioElement);
});
audioElement.addEventListener("timeupdate", () => {
  let currentTime = audioElement.currentTime;
  minutes.innerHTML =
    Math.floor(currentTime / 60) < 10
      ? "0" + Math.floor(currentTime / 60)
      : Math.floor(currentTime / 60);
  seconds.innerHTML =
    Math.floor(currentTime % 60) < 10
      ? "0" + Math.floor(currentTime % 60)
      : Math.floor(currentTime % 60);
});
audioElement.addEventListener("ended", () => {
  songIndex = songIndex == 8 ? 0 : songIndex + 1;
  audioElement.src = songs[songIndex].path;

  audioElement.play();
  new_song_duration(audioElement);
  nowPlaying.innerHTML = songs[songIndex].songname;
});

next.addEventListener("click", () => {
  songIndex = songIndex == 8 ? 0 : songIndex + 1;
  audioElement.src = songs[songIndex].path;

  audioElement.play();
  new_song_duration(audioElement);
  nowPlaying.innerHTML = songs[songIndex].songname;
});
prev.addEventListener("click", () => {
  songIndex = songIndex == 0 ? 8 : songIndex - 1;
  audioElement.src = songs[songIndex].path;

  audioElement.play();
  new_song_duration(audioElement);
  nowPlaying.innerHTML = songs[songIndex].songname;
});
