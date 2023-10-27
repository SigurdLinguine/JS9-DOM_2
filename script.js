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

// Sliders

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


// Set Color

document.getElementById("setColor").addEventListener("click", function () {
    document.body.style.backgroundColor = document.getElementById("colorInput").value
})


// Random Color

let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

document.getElementById("randomColor").addEventListener("click", function () {
    let randomNumber = Math.round(Math.random() * 49)
    document.body.style.backgroundColor = colorArray[randomNumber]
})
