var next = window.document.getElementById("next")
var prev = window.document.getElementById("prev")
var leo = window.document.getElementById("leonardo")
var bru = window.document.getElementById("bruna")

function rollNext(){
    leo.style = "display:none"
    bru.style = "display:flex"
    prev.style = "display:flex"
    next.style = "display:none"
}
function rollPrev(){
    leo.style ="display:flex"
    bru.style ="display:none"
    prev.style ="display:none"
    next.style ="display:flex"
}