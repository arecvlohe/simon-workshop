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
