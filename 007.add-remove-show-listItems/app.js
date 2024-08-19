const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const show = document.querySelector(".show");
const input = document.getElementById("input");
const message = document.querySelector(".message");

const shoppingList = [];

add.addEventListener("click", addItem);
remove.addEventListener("click", removeItem);
show.addEventListener("click", showList);

function addItem() {
    if (!input.value.trim()) {
      message.innerText = "you have to enter item name";
    } else {
      shoppingList.push(input.value);
      message.innerText = `[ ${input.value} ] has been added`;
    }

    input.value = "";
}

function removeItem() {
  const index = shoppingList.indexOf(input.value);

  if (shoppingList.length > 0) {
    if (!input.value.trim()) {
      message.innerText = "you have to enter item name";
    } else {
      if (shoppingList.includes(input.value)) {
        shoppingList.splice(index, 1);
        message.innerText = `""${input.value}"" has been removed`;
      } else {
        message.innerText = `""${input.value}"" doesn't exist here`;
      }
    }
  } else {
    message.innerText = `Enter items name first`;
  }

  input.value = "";
}

function showList() {
  const itemsList = document.querySelector(".itemsList");

  if (shoppingList.length >= 1) {
    itemsList.innerHTML = `<h3>the list of all items :</h3> <br>
  	<em><p>[ ${shoppingList} ] </p><em>
	`;
  } else {
    itemsList.innerText = "The list is empty";
  }
}
