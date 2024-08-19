const quotes = document.querySelector(".quotes");
const publishDate = document.querySelector(".publishDate");
const img = document.querySelector("img");
const authorName = document.querySelector(".authorName");
const generate = document.querySelector(".generate");

console.log(publishDate);

const data = [
  {
    quotes: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    date: "March 4, 1933",
    image: "images/Franklin-D-Roosevelt.jpg",
  },
  {
    quotes: "I think, therefore I am.",
    author: "René Descartes",
    date: "1637",
    image: "images/Rene-Descartes.jpg",
  },
  {
    quotes:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr",
    date: "1965",
    image: "images/Martin_Luther_King,_Jr..jpg",
  },
  {
    quotes: "I have a dream.",
    author: "Martin Luther King Jr",
    date: "August 28, 1963",
    image: "images/Martin_Luther_King,_Jr..jpg",
  },
  {
    quotes: "To be, or not to be, that is the question.",
    author: " William Shakespeare",
    date: "1603 (from 'Hamlet')",
    image: "images/William_Shakespeare.jpg",
  },
  {
    quotes: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
    date: "1888",
    image: "images/Nietzsche.jpg",
  },
  {
    quotes:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    date: "April 13, 1945",
    image: "images/Franklin-D-Roosevelt.jpg",
  },
  {
    quotes: "Give me liberty, or give me death!",
    author: "Patrick Henry",
    date: "March 23, 1775",
    image: "images/Patrick_henry.jpg",
  },
  {
    quotes: "The unexamined life is not worth living.",
    author: "Socrates",
    date: "Circa 399 BC",
    image: "images/Socrate_du_Louvre.jpg",
  },
  {
    quotes: "That's one small step for a man, one giant leap for mankind.",
    author: "Neil Armstrong",
    date: "July 20, 1969",
    image: "images/Neil_Armstrong_pose.jpg",
  },
  {
    quotes: "The pen is mightier than the sword.",
    author: "Edward Bulwer-Lytton",
    date: "1839",
    image: "images/Edward.jpg",
  },
  {
    quotes: "Imagination is more important than knowledge.",
    author: "Albert Einstein",
    date: " 1929",
    image: "images/Einstein.jpg",
  },
  {
    quotes: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    date: "2001",
    image: "images/Nelson_Mandela.jpg",
  },
  {
    quotes:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    date: "1993",
    image: "images/Nelson_Mandela.jpg",
  },
  {
    quotes: "I came, I saw, I conquered.",
    author: "Julius Caesar",
    date: "47 BC",
    image: "images/Julio_César.jpg",
  },
  {
    quotes: "Injustice anywhere is a threat to justice everywhere.",
    author: "Martin Luther King Jr",
    date: "1963",
    image: "images/Martin_Luther_King,_Jr..jpg",
  },
  {
    quotes: "An eye for an eye only ends up making the whole world blind.",
    author: "Mahatma Gandhi",
    date: "Early 20th century",
    image: "images/Mahatma-Gandhi.jpg",
  },
  {
    quotes: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    date: "2005",
    image: "images/Steve_Jobs.jpg",
  },
  {
    quotes: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
    date: "Early 20th century",
    image: "images/Mahatma-Gandhi.jpg",
  },
  {
    quotes:
      "The world is a book, and those who do not travel read only one page.",
    author: "Saint Augustine",
    date: "5th century",
    image: "images/Saint_Augustine.jpg",
  },
];

generate.addEventListener("click", getQuotes);

function getQuotes() {
  let currentIndex = Math.floor(Math.random() * data.length);
  const currentData = data[currentIndex];
  img.src = currentData.image;
  quotes.innerText = currentData.quotes;
  authorName.innerText = currentData.author;
  publishDate.innerText = currentData.date;
}
