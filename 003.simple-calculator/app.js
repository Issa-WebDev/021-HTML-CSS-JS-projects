const display = document.getElementById("display");

// add value of button
function addValue(value) {
  display.value += value;
}

// remove value
function removeValue() {
  display.value = display.value.slice(0, -1);
}

// clear the display
function clearDisplay() {
  display.value = "";
}

// give the result
function result() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "error";
  }
}
