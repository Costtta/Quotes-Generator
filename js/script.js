let btn = document.getElementById("btn")
console.log(btn)

let quote = document.getElementById("quote")
console.log(quote)

let author = document.getElementById("author")
console.log(author);

let qoutes=[

    {
      description:"Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
      author:"― Marilyn Monroe"
    }
    ,
    {
        description:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe"
        ,
        author:"-- ― Albert Einstein"
      }
      ,
      
    {
        description:"It's not what happens to you, but how you react to it that matters."
        ,
        author:"--Epictetus"
      }  
      ,
      
      {
        description:"A room without books is like a body without a soul."
        ,
        author:"― Marcus Tullius Cicero"
    }
    ]

    let randomQuotes = function () {
        let result = qoutes[Math.floor(Math.random()*qoutes.length)]
        quote.textContent = result.description
        author.textContent = result.author
        console.log(result)
    }