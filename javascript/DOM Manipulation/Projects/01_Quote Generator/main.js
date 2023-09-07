/*
quoteList[2]["quote"]
quoteList[2]["author"]

random integer between 0 to length of the quoteList(excluding last)
*/

const quoteList = [
    {
        quote: "Code like poetry should be short and concise.",
        author: "Santosh Kalwar"
    },
    {
        quote: "It’s not a bug; it’s an undocumented feature.",
        author: "Anonymous"
    },
    {
        quote: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        quote: "Code is like humor. When you have to explain it, it’s bad.",
        author: "Cory House"
    },
    {
        quote: "Make it work, make it right, make it fast.",
        author: "Kent Beck"
    },
    {
        quote: "Clean code always looks like it was written by someone who cares.",
        author: "Robert C. Martin"
    },
    {
        quote: "Of course, bad code can be cleaned up. But it’s very expensive.”",
        author: "Robert C. Martin"
    },
    {
        quote: "Programming is the art of algorithm design and the craft of debugging errant code.",
        author: "Ellen Ullman"
    },
    {
        quote: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
        author: "Rick Cook"
    },
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    }
]

let index, i;
let new_quote_btn = document.querySelector(".new-quote-btn");
let quote, author;
let quote_box = document.querySelector(".quote");
let author_box = document.querySelector(".author")

new_quote_btn.addEventListener('click', () => {
    index = Math.floor(Math.random() * quoteList.length);  // 0 * 5 = 0,  0.999 * 5 = 4.9999
    quote = quoteList[index]["quote"];
    author = quoteList[index]["author"];
    quote_box.innerText = quote;
    author_box.innerText = author;
})

