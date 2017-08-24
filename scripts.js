const [red, blue, yellow, green] = [...document.getElementsByClassName("box")];

[red, blue, yellow, green].forEach(button => {
  button.addEventListener("click", () => {
    const color = button.style.backgroundColor;
    button.style.filter = "saturate(50%)";
    setTimeout(() => {
      button.style.filter = "saturate(100%)";
    }, 300);
  });
});

const colors = ["red", "blue", "yellow", "green"];

const sequence = Array.from({ length: 20 }, () => {
  return colors[Math.floor(Math.random() * 4)];
});

console.log(sequence);
