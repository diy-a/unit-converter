let input = document.getElementById("input")

let val1 = document.getElementById("val1")
let val2 = document.getElementById("val2")
let val3 = document.getElementById("val3")
let val4 = document.getElementById("val4")
let val5 = document.getElementById("val5")
let val6 = document.getElementById("val6")

let feet = document.getElementById("feet")
let meters = document.getElementById("meters")
let galons = document.getElementById("galons")
let liters = document.getElementById("liters")
let pounds = document.getElementById("pounds")
let kg = document.getElementById("kg")


function calculate(){
    x = input.value
    val1.innerText = x
    val2.innerText = x
    val3.innerText = x
    val4.innerText = x
    val5.innerText = x
    val6.innerText = x

    feet.textContent = (x * 3.281).toFixed(3)
    meters.textContent = (x / 3.281).toFixed(3)

    galons.textContent = (x / 3.785).toFixed(3)
    liters.textContent = (x * 3.785).toFixed(3)

    pounds.textContent = (x * 2.205).toFixed(3)
    kg.textContent = (x / 2.205).toFixed(3)
}

