'use strict'

var gSize = 100

function onBallClick(clickedEl) {
    gSize += 50
    clickedEl.style.width = gSize + 'px'
    clickedEl.style.height = gSize + 'px'
    clickedEl.innerText = gSize
    if (gSize >= 400) {
        limitBallSize(clickedEl)
    }
}

function limitBallSize(clickedEl) {
    gSize = 100
    clickedEl.style.width = gSize + 'px'
    clickedEl.style.height = gSize + 'px'
    clickedEl.innerText = gSize
}