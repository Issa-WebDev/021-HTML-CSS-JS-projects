const form = document.getElementById("form");
const outputs = document.getElementById("outputs");
const toggler = document.getElementById("theme-toggler");
const body = document.body;

// Themes
toggler.addEventListener("click", () => {
  body.classList.toggle("theme-mode");
  if (body.classList.contains("theme-mode")) {
    toggler.style.background = "#333";
    toggler.style.color = "#fff";
    toggler.textContent = "Dark";
  } else {
    toggler.style.background = "#fff";
    toggler.style.color = "#000";
    toggler.textContent = "Light";
  }
});

// Make Request
async function fetchData(query) {
  const encodedQuery = encodeURIComponent(query);

  const API = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=8&srsearch=${encodedQuery}`;

  const response = await fetch(API);

  if (!response.ok) {
    throw new Error("Something went wrong, verify your network and try again");
  }

  const data = await response.json();
  return data;
}

// Display the outputs
function displayOutputs(output) {
  outputs.innerHTML = "";

  output.forEach((data) => {
    const url = `https://en.wikipedia.org/?curid=${data.pageid}`;
    const title = `<a href="${url} target="_blink" class="title">${data.title}</a>`;
    const link = `<a href="${url} target="_blink" class="link">${url}</a>`;
    const snippet = `<p class="snippet">${data.snippet}</p>`;

    const outputItems = document.createElement("div");
    outputItems.className = "output-items";

    outputItems.innerHTML = `
    <h2>${title}</h2>
    ${link} 👇🏻
    ${snippet}
    <p class="word-count">this article content ${data.wordcount} words</p>
    `;

    outputs.appendChild(outputItems);
  });
}

// submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = input.value.trim();

  if (!query) {
    outputs.innerHTML = `<p>Please enter a valid word or phrase.`;
  }

  outputs.innerHTML = `<p class="loader" >Loading....</p>`;

  try {
    const data = await fetchData(query);

    if (data.query.searchinfo.totalhits === 0) {
      outputs.innerHTML = `<p>There is no article about ${query} here.`;
    } else {
      displayOutputs(data.query.search);
    }
  } catch (error) {
    console.log(error);
    outputs.innerHTML = `<p>Something went wrong, verify your network and try again</p>`;
  }
});
