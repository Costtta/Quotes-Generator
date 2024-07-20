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


let btn = document.getElementById("button")
console.log(btn);

let first = document.getElementById("first")
console.log(first);

let second = document.getElementById("second")
console.log(second);



let result = btn.addEventListener("click", function () {
    let test = qoutes[Math.round(Math.random()*qoutes.length)]
    first.innerHTML = test.description
    second.innerHTML = test.author
})

// console.log(test)

let test2 = Math.round(Math.random()*qoutes.length)
console.log(test2)


