const progress = document.querySelector(".progress__section");
const progressBars = document.querySelectorAll(".progress__bar");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function hideProgress() {
  progressBars.forEach((progressBar) => {
    progressBar.style.opacity = 0;
    progressBar.style.width = 0
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = progress.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});
