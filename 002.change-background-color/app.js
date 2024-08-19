const allbtn = document.querySelectorAll("input");
const body = document.body;

allbtn.forEach((element) => {
  element.addEventListener("click", () => {
    body.className = "";
    let value = element.value;

    switch (value) {
      case "blue":
        body.classList.add("blue");
        break;
      case "red":
        body.classList.add("red");
        break;
      case "orange":
        body.classList.add("orange");
        break;
      case "green":
        body.classList.add("green");
        break;
      case "violet":
        body.classList.add("violet");
        break;
      case "pink":
        body.classList.add("pink");
        break;
      case "maroon":
        body.classList.add("maroon");
        break;
      case "lime":
        body.classList.add("lime");
        break;
      default:
        break;
    }
  });
});
