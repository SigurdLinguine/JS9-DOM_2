// Perfect Number

let ost = []

document.getElementById("check").addEventListener(
    "click", function () {
        let number = document.getElementById("number").value

        for (let i = 0; i < number; i++) {
            if (number % i == 0) {
                ost.unshift(i)
            }
        }
        let perf = 0
        for (let i = 0; i < ost.length; i++) {
            perf = perf + ost[i]
        }
        console.log(perf)
        if (perf == number) {
            document.getElementById("result").innerHTML = "Perfect Number!"
        } else {
            document.getElementById("result").innerHTML = "Ikke Perfect Number"
        }
        perf = 0
        ost = []
})


document.getElementById("random").addEventListener(
    "click", function () {
        let random = Math.round(Math.random()*100)

        for (let i = 0; i < random; i++) {
            if (random % i == 0) {
                ost.unshift(i)
            }
        }
        let perf = 0
        for (let i = 0; i < ost.length; i++) {
            perf = perf + ost[i]
        }
        if (perf == random) {
            document.getElementById("result").innerHTML = `Nummer ${random} er et Perfect Number!`
        } else {
            document.getElementById("result").innerHTML = `Nummer ${random} er ikke et Perfect Number`
        }
        perf = 0
        ost = []
})

// Colors

function byttFarge() {
    let red = document.getElementById("red").value
    let green = document.getElementById("green").value
    let blue = document.getElementById("blue").value
    let farge = `rgb(${red}, ${green},${blue})`
    document.body.style.backgroundColor = farge
}

document.getElementById("red").addEventListener("input", byttFarge)
document.getElementById("green").addEventListener("input", byttFarge)
document.getElementById("blue").addEventListener("input", byttFarge)

function colorPickerFarge() {
    let colorPickerFarge = document.getElementById("colorPicker").value
    document.body.style.background = colorPickerFarge
}
document.getElementById("colorPicker").addEventListener("input", colorPickerFarge)

function tilbakestillFarge() {
    document.getElementById("red").value = 0
    document.getElementById("green").value = 200
    document.getElementById("blue").value = 200
}
window.onload = tilbakestillFarge()
