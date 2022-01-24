const quotes = [
    {
     quote: "The way to get started is to quit talking and begin"
     author: "Walt Disney"
    },

{
 quote:  "Life is what happens when you're busy making other person"
 author:"John Lennon"
},
{
    quote:
    "The world is a book and those who do not travel read only once"
    author:"Saint Augustine"
},
]

const quote = document.querySelector("#quote span: first-child");
const author = document.querySelector("quote span: last-child";

const todayQuote= quotes[Math.floor(Math.random() * quotes.length))];

quote.innerText = todayQuote.quoter;
author.innerText = todayQuote.author;
