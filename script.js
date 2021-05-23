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
    backSpeed: 50,
    backDelay: 2000
  });
  