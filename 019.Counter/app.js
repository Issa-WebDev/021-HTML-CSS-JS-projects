const input = document.getElementById("input");
const increment = document.getElementById("increment");
const save = document.getElementById("save");
const saved = document.getElementById("saved");

let count = 0;

increment.addEventListener("click", () => {
  count += 1;
  input.value = count;
});

save.addEventListener("click", () => {
  saved.innerText += ` | ${input.value}  | `;
  input.value = 0;
  count = 0;
});
