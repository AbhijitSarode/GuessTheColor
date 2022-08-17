var nuimberOfSquares = 6
var colors = generataRandomColors(nuimberOfSquares)

var squares = document.querySelectorAll('.square')
var colorDisplay = document.querySelector('#color-display')
var messgeDisplay = document.querySelector("#message")
var h1 = document.querySelector('h1')
var resetBtn = document.querySelector('#reset')

var modeButtons = document.querySelectorAll('.mode') // --RF1: Select game mode from HTML--

/*      Development
var pickedColor = colors[3]
*/
var pickedColor = pickColor()
colorDisplay.textContent = pickedColor 


resetBtn.addEventListener('click', function(){
    //Generate all new colors
    colors = generataRandomColors(nuimberOfSquares)
    //Pick a new random color from the array
    pickedColor = pickColor()

    // Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor

    //Change the colors of the squares
    for(var i = 0; i< squares.length; i++) {
        squares[i].style.background = colors[i]
    }
    h1.style.backgroundColor = "steelblue"
    resetBtn.textContent = "new colors"
    messgeDisplay.textContent = ""
})

/*      Refoctorization
easyBtn.addEventListener('click', function(){
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    nuimberOfSquares = 3
    colors = generataRandomColors(nuimberOfSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor

    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.display = "none"
        }
    }
})

hardBtn.addEventListener('click', function(){
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    colors = generataRandomColors(nuimberOfSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor

    for(var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i]
            squares[i].style.display = "block"
    }
})
*/

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
        modeButtons[0].classList.remove('selected')    
        modeButtons[1].classList.remove('selected')    
        this.classList.add('selected')



    })
    
}

for(var i = 0; i< squares.length; i++) {
    //Add intial colors to squares
    squares[i].style.background = colors[i]

    //Add click listeners to squares
    squares[i].addEventListener('click', function(){
        //Grab color of the clicked square
        var tappedColor = this.style.background
        //Compare color of the pickeColor
        if (tappedColor === pickedColor) {
            messgeDisplay.textContent = "Correct👏"
            h1.style.backgroundColor = pickedColor
            changeColors()
            resetBtn.textContent = "Play Again?"
        } else {
            this.style.background = "#f5feff"
            messgeDisplay.textContent = "Try again"
        }
    })
}

function changeColors(){
    for(var i = 0; i< squares.length; i++) {
        squares[i].style.background = pickedColor
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * 6)
    console.log(colors)
    return colors[random]
}

function generataRandomColors(number) {
    // make an array
    var arr = []
    //add 'x' number of random colors to array
    for (let i = 0; i < number; i++) {
        arr.push(randomColor())
        
    }
    //return the array
    return arr
}

function randomColor() {
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    console.log(`${red}, ${green}, ${blue}`)
    return `rgb(${red}, ${green}, ${blue})`
}