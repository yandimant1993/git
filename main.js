'use strict'

var gSize = getRandomInt(20, 61)

function onBallClick(clickedEl) {
    var color = getRandomColor()
    // gSize += 50
    clickedEl.style.backgroundColor = color
    gSize = getRandomInt(20, 61)
    clickedEl.style.width = gSize + 'px'
    clickedEl.style.height = gSize + 'px'
    clickedEl.innerText = gSize
    // if (gSize >= 400) {
    //     limitBallSize(clickedEl)
    // }
}

// function limitBallSize(clickedEl) {
//     gSize = getRandomInt(20, 61)
//     clickedEl.style.width = gSize + 'px'
//     clickedEl.style.height = gSize + 'px'
//     clickedEl.innerText = gSize
// }