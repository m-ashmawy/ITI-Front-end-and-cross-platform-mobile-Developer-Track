const container = document.querySelector(".container"),
  mainVideo = container.querySelector("video"),
  videoTimeline = container.querySelector(".video-timeline"),
  progressBar = container.querySelector(".progress-bar"),
  volumeBtn = container.querySelector(".volume i"),
  volumeSlider = container.querySelector(".left input"),
  currentVidTime = container.querySelector(".current-time"),
  videoDuration = container.querySelector(".video-duration"),
  skipBackward = container.querySelector(".skip-backward i"),
  skipForward = container.querySelector(".skip-forward i"),
  playPauseBtn = container.querySelector(".play-pause i"),
  speedBtn = container.querySelector(".playback-speed span"),
  speedOptions = container.querySelector(".speed-options"),
  pipBtn = container.querySelector(".pic-in-pic span"),
  fullScreenBtn = container.querySelector(".fullscreen i");
let currentVolume = 0.5;
let timer;

const hideControls = () => {
  if (mainVideo.paused) return;
  timer = setTimeout(() => {
    container.classList.remove("show-controls");
  }, 3000);
};
hideControls();

container.addEventListener("mousemove", () => {
  container.classList.add("show-controls");
  clearTimeout(timer);
  hideControls();
});

const formatTime = (time) => {
  let seconds = Math.floor(time % 60),
    minutes = Math.floor(time / 60) % 60,
    hours = Math.floor(time / 3600);

  if (hours == 0) {
    return `${minutes.toString().padStart(2, "0")}:\
${seconds.toString().padStart(2, "0")}`;
  }
  return `${hours.toString().padStart(2, "0")}:\
${minutes.toString().padStart(2, "0")}:\
${seconds.toString().padStart(2, "0")}`;
};

videoTimeline.addEventListener("mousemove", (e) => {
  let timelineWidth = videoTimeline.clientWidth;
  let offsetX = e.offsetX;
  let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration);
  const progressTime = videoTimeline.querySelector("span");
  offsetX =
    offsetX < 20
      ? 20
      : offsetX > timelineWidth - 20
      ? timelineWidth - 20
      : offsetX;
  progressTime.style.left = `${offsetX}px`;
  progressTime.innerText = formatTime(percent);
});

videoTimeline.addEventListener("click", (e) => {
  let timelineWidth = videoTimeline.clientWidth;
  mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
});

mainVideo.addEventListener("timeupdate", () => {
  let percent = (mainVideo.currentTime / mainVideo.duration) * 100;
  progressBar.style.width = `${percent}%`;
  currentVidTime.innerText = formatTime(mainVideo.currentTime);
});

mainVideo.addEventListener("loadeddata", () => {
  videoDuration.innerText = formatTime(mainVideo.duration);
});

const draggableProgressBar = (e) => {
  let timelineWidth = videoTimeline.clientWidth;
  progressBar.style.width = `${e.offsetX}px`;
  mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
  currentVidTime.innerText = formatTime(mainVideo.currentTime);
};

volumeBtn.addEventListener("click", () => {
  if (!volumeBtn.classList.contains("fa-volume-high")) {
    mainVideo.volume = parseFloat(currentVolume) || 0.1;
    volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
  } else {
    mainVideo.volume = 0.0;
    volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
  }
  volumeSlider.value = mainVideo.volume;
});

volumeSlider.addEventListener("input", (e) => {
  currentVolume = e.target.value;
  mainVideo.volume = currentVolume;
  if (e.target.value == 0) {
    return volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
  }
  volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
});

// speedOptions.querySelectorAll("li").forEach((option) => {
//   option.addEventListener("click", () => {
//     mainVideo.playbackRate = option.dataset.speed;
//     speedOptions.querySelector(".active").classList.remove("active");
//     option.classList.add("active");
//   });
// });

speedOptions.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    mainVideo.playbackRate = e.target.dataset.speed;
    speedOptions.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  }
});

document.addEventListener("click", (e) => {
  if (
    // e.target.tagName !== "SPAN" ||
    e.target.className !== "material-symbols-rounded"
  ) {
    speedOptions.classList.remove("show");
  }
});

fullScreenBtn.addEventListener("click", () => {
  // container.classList.toggle("fullscreen");
  document.fullscreenElement
    ? document.exitFullscreen()
    : container.requestFullscreen();
});
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    fullScreenBtn.classList.replace("fa-expand", "fa-compress");
  } else {
    fullScreenBtn.classList.replace("fa-compress", "fa-expand");
  }
});

speedBtn.addEventListener("click", () => speedOptions.classList.toggle("show"));
pipBtn.addEventListener("click", () => mainVideo.requestPictureInPicture());
skipBackward.addEventListener("click", () => (mainVideo.currentTime -= 5));
skipForward.addEventListener("click", () => (mainVideo.currentTime += 5));

// mainVideo.addEventListener("play", () =>
//   playPauseBtn.classList.replace("fa-play", "fa-pause")
// );
// mainVideo.addEventListener("pause", () =>
//   playPauseBtn.classList.replace("fa-pause", "fa-play")
// );
playPauseBtn.addEventListener("click", () => {
  if (mainVideo.paused) {
    mainVideo.play();
    playPauseBtn.classList.replace("fa-play", "fa-pause");
  } else {
    mainVideo.pause();
    playPauseBtn.classList.replace("fa-pause", "fa-play");
  }
});

videoTimeline.addEventListener("mousedown", () =>
  videoTimeline.addEventListener("mousemove", draggableProgressBar)
);
document.addEventListener("mouseup", () =>
  videoTimeline.removeEventListener("mousemove", draggableProgressBar)
);
