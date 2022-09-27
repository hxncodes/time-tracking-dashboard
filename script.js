const timeLine = document.getElementsByClassName("time-line");
const timeLineBtn = document.getElementsByClassName("btn");

// toggling timeLine buttons state
for (let i = 0; i < timeLineBtn.length; i++) {
  timeLineBtn[i].addEventListener("click", function () {
    let currentBtn = document.querySelector(".active");
    currentBtn?.classList.remove("active");
    this.classList.add("active");
  });
}
