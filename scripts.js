const colors = [...document.getElementsByClassName("box")];

colors.forEach((button, i) => {
  button.addEventListener("click", () => {
    const color = button.style.backgroundColor;
    state.userClicks.push(i);
    button.style.filter = "saturate(50%)";
    setTimeout(() => {
      button.style.filter = "saturate(100%)";
    }, 300);
  });
});

const sequence = Array.from({ length: 20 }, (v, k) => {
  return Math.floor(Math.random() * 4);
});

const start = document.getElementsByTagName("button")[0];

const state = {
  count: 0,
  userClicks: []
};

start.addEventListener("click", () => {
  state.count = 1;
  colors[sequence[0]].style.filter = "saturate(50%)";
  setTimeout(() => {
    colors[sequence[0]].style.filter = "saturate(100%)";
  }, 300);
});
