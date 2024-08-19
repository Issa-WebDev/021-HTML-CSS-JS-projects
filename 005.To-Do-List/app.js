const input = document.getElementById("input");
const btn = document.getElementById("btn");
const taskList = document.getElementById("taskList");

btn.addEventListener("click", () => {
  if (!input.value.trim()) {
    alert("Enter something to do");
  } else {
    const task = document.createElement("li");

    task.innerHTML = `
		<p>${input.value}</p>
		<span onclick="removeTask(this)">❌</span>`;

    taskList.appendChild(task);
  }

  input.value = "";
});

const removeTask = (span) => {
  taskList.removeChild(span.parentNode);
};
