let dropButton = document.querySelector('.dropdown')
let dropBar = document.querySelector('.dropBar')

dropButton.onmouseover = function () {
    dropBar.style.display = 'block'
}

dropButton.onmouseleave = function () {
    dropBar.style.display = 'none'
}

var typed = new Typed('#typed-code', {
    strings: 
    [
        "Java", "Springboot", "HTML", 
        "Javascript", "Github", "Postman",
        "SQL", "Git", "CSS"
    ],
    loop: true,
    loopCount: Infinity,
    typeSpeed: 100,
    backSpeed: 120,
    backDelay: 2000
  });


/* Populationg the blog div, pulling articles from Dev.to */
const BLOG_DIV = document.getElementById("blog-container")

let request = new XMLHttpRequest();
request.open("GET", "https://dev.to/api/articles?username=siaust")
request.onload = function() {
    console.log(request.response)
    let response = JSON.parse(request.response)
    for (let i = 0; i < response.length; i++) {
        console.log(response[i].title)
        let card = document.createElement("div")
        card.className = "blog-card"

        let title = document.createElement("p")
        title.innerHTML = response[i].title
        let desc = document.createElement("p")
        desc.innerHTML = response[i].description
        let date = document.createElement("p")
        date.innerHTML= response[i].published_timestamp

        let link = document.createElement("a")
        link.href = response[i].url
        link.target = "_blank"
        let button = document.createElement("button")
        button.className = "btn btn-sm btn-outline-secondary"
        let span = document.createElement("i")
        span.className = "fas fa-link"
        button.append(span)
        link.append(button)

        card.append(title, desc, date, link)

        BLOG_DIV.appendChild(card)


    }
}
request.send()

