let dropButton = document.querySelector('.dropdown')
let dropBar = document.querySelector('.dropBar')

dropButton.onmouseover = function () {
    dropBar.style.display = 'block'
}

dropButton.onmouseleave = function () {
    dropBar.style.display = 'none'
}