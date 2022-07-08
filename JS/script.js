// communication skills
{
  let progressBar = document.querySelector(".circular-progress");
  let valueContainer = document.querySelector(".value-container");

  let progressValue = 0;
  let progressEndValue = 89;
  let speed = 45;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
      #ef0d50 ${progressValue * 3.6}deg,
      #f4db7d ${progressValue * 3.6}deg
    )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
// Management Skills
{
  let progressBar = document.querySelector(".circular-progress2");
  let valueContainer = document.querySelector(".value-container2");

  let progressValue = 0;
  let progressEndValue = 92;
  let speed = 45;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #ef0d50 ${progressValue * 3.6}deg,
        #f4db7d ${progressValue * 3.6}deg
      )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
// creativity
{
  let progressBar = document.querySelector(".circular-progress3");
  let valueContainer = document.querySelector(".value-container3");

  let progressValue = 0;
  let progressEndValue = 94;
  let speed = 45;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #ef0d50 ${progressValue * 3.6}deg,
        #f4db7d ${progressValue * 3.6}deg
      )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}
