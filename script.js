// Animation js with H2 IN CSS
function animateTitle(titleElement){
    titleElement.classList.remove('appear')
    setTimeout(() => {
     titleElement.classList.add('appear')
    }, 500)
}

//Variables
let container = document.getElementById("title")
let container1 = document.getElementById("question-container1")
let container2 = document.getElementById("question-container-2")
let container3 = document.getElementById("question-container-3")
let container4 = document.getElementById("question-container-4")
let container5 = document.getElementById("question-container-5")

//Buttons
let startClick = document.getElementById("start")
let startClick1 = document.getElementById("start-1")
let startClick2 = document.getElementById("start-2")
let startClick3 = document.getElementById("start-3")
let startClick4 = document.getElementById("start-4")
let startClick5 = document.getElementById("start-5")
let resultContainer = document.getElementById("resultContainer")

// select display name from html elements
container1.style.display = "none"
container2.style.display = "none"
container3.style.display = "none"
container4.style.display = "none"
container5.style.display = "none"
resultContainer.style.display = "none"

//Results corrects display
const correctAnswer ={
    form1:"Jupiter",
    form2:"1939",
    form3:"Miguel de Cervantes",
    form4:"Nitrogen",
    form5:"Piano"
}
let userAnswer ={
    form1:null,
    form2:null,
    form3:null,
    form4:null,
    form5:null
}

let correctCount = 0
startClick.addEventListener("click",function () {
    container.style.display = "none"
    container1.style.display = "block"
    animateTitle(document.querySelector('#question-container1 .title-css'))
})

startClick1.addEventListener("click", function (){
    let selector = document.querySelector("#form1 input[name='answer']:checked")
    if (selector){
        container1.style.display = "none"
        container2.style.display = "block"
        animateTitle(document.querySelector('#question-container-2 .title-css'))
        const selectedAnswer = selector.value
        userAnswer.form1 = selectedAnswer
        if(selectedAnswer === correctAnswer.form1){
            document.getElementById("feedback1").textContent = "Correct!"
            correctCount++
        }else {
            document.getElementById("feedback1").textContent = "InCorrect!"
        }
    }else {
        alert("Please select an answer before proceeding.")
        container1.style.display = "block"
    }
})

startClick2.addEventListener("click", function () {

    let selector = document.querySelector("#form2 input[name='answer']:checked")
    if (selector){
        container2.style.display = "none"
        container3.style.display = "block"
        animateTitle(document.querySelector('#question-container-3 .title-css'))
        const selectedAnswer = selector.value
        userAnswer.form2 = selectedAnswer
        if(selectedAnswer === correctAnswer.form2){
            document.getElementById("feedback2").textContent = "Correct!"
            correctCount++
        }else {
            document.getElementById("feedback2").textContent = "InCorrect!"
        }
    }else {
        alert("Please select an answer before proceeding.")
        container2.style.display = "block"
    }
})


startClick3.addEventListener("click", function () {

    let selector = document.querySelector("#form3 input[name='answer']:checked")
    if (selector){
        container3.style.display = "none"
        container4.style.display = "block"
        animateTitle(document.querySelector('#question-container-4 .title-css'))
        const selectedAnswer = selector.value
        userAnswer.form3 = selectedAnswer
        if(selectedAnswer === correctAnswer.form3){
            document.getElementById("feedback3").textContent = "Correct!"
            correctCount++
        }else {
            document.getElementById("feedback3").textContent = "InCorrect!"
        }
    }else {
        alert("Please select an answer before proceeding.")
        container3.style.display = "block"
    }
})

startClick4.addEventListener("click", function () {

    let selector = document.querySelector("#form4 input[name='answer']:checked")
    if (selector){
        container4.style.display = "none"
        container5.style.display = "block"
        animateTitle(document.querySelector('#question-container-5 .title-css'))
        const selectedAnswer = selector.value
        userAnswer.form4 = selectedAnswer
        if(selectedAnswer === correctAnswer.form4){
            document.getElementById("feedback4").textContent = "Correct!"
            correctCount++
        }else {
            document.getElementById("feedback4").textContent = "InCorrect!"
        }
    }else {
        alert("Please select an answer before proceeding.")
        container4.style.display = "block"
    }
})

startClick5.addEventListener("click", function () {

    let selector = document.querySelector("#form5 input[name='answer']:checked")
    if (selector){
        container5.style.display = "none"
        const selectedAnswer = selector.value
        userAnswer.form5 = selectedAnswer
        if(selectedAnswer === correctAnswer.form5){
            document.getElementById("feedback5").textContent = "Correct!"
            correctCount++
        }else {
            document.getElementById("feedback5").textContent = "InCorrect!"
        }
        resultContainer.style.display = "block"

        let result = `<h2 class="title-css" id="titlefinish">Thanks for playing</h2>
        <p id="finish1">Your got : ${correctCount} out of 5 questions correct.</p>
        <ul>`



        for (let i = 1; i <= 5; i++){
            let questionNum = `form${i}`
            let feedBack = userAnswer[questionNum] === correctAnswer[questionNum] ? "Correct" : "Incorrect"
            result += `<li>${i}. ${questionNum}: ${feedBack} - your answer: ${userAnswer[questionNum]}</li>`
        }

        result += `</ul> <button id="restart">Restart Quiz</button>`
        resultContainer.innerHTML = result

        animateTitle(document.querySelector('#titlefinish'))

        let restarts = document.getElementById("restart")
        restarts.addEventListener("click", function () {
            window.location.reload()
        })


        //container.style.display = "block"

    }else {
        alert("Please select an answer before proceeding.")
        container5.style.display = "block"
    }
})

