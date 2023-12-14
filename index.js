const api_url = 'https://api.quotable.io/random';

function tweet() {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");

  window.open(
    `https://twitter.com/intent/tweet?text=${quote.innerHTML}---- by ${author.innerHTML}`,
    "tweet window",
  );
}



async function getQuote(url){
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);

onclick="getQuote(api_url)";
