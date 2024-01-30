let homeS = document.getElementById("homes")
let guestS = document.getElementById("guests")
let score = 0
let scoreg = 0

function btn1() {
    score += 1
    homeS.textContent = score
}
function btn2() {
    score += 2
    homeS.textContent = score
}
function btn3() {
    score += 3
    homeS.textContent = score
}
function btn1g() {
    scoreg += 1
    guestS.textContent = scoreg
}
function btn2g() {
    scoreg += 2
    guestS.textContent = scoreg
}
function btn3g() {
    scoreg += 3
    guestS.textContent = scoreg
}

function newgame() {
    score = 0
    scoreg = 0
    guestS.textContent = scoreg
    homeS.textContent = score
}








