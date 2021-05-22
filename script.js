let questions = [{
    name: 'Matemáticas',
    label: 'Cual es el resultado de multiplicar 4 x 5',
    answers: [
        { label: '20', value: '20' },
        { label: '15', value: '15' },
        { label: '12', value: '12' },
        { label: '16', value: '16' },
    ],
    correct: '20'
},
{
    name: 'Dibujos',
    label: '¿Qué animal es piolin?',
    answers: [
        { label: 'Un canario', value: 'Un canario' },
        { label: 'Un gato', value: 'Un gato' },
        { label: 'Un perro', value: 'Un perro' },
        { label: 'Un elefante', value: 'Un elefante' },
    ],
    correct: 'Un canario'
},
{
    name: 'Literatura',
    label: "Who sings the rap song &quot;Secret Wars Part 1&quot;?",
    answers: [
        { label: 'Un canario', value: 'Un canario' },
        { label: 'Un gato', value: 'Un gato' },
        { label: 'Un perro', value: 'Un perro' },
        { label: 'Un elefante', value: 'Un elefante' },
    ],
    correct: 'Un canario'
},
{
    name: 'Dibujos',
    label: '¿Qué animal es piolin?',
    answers: [
        { label: 'Un canario', value: 'Un canario' },
        { label: 'Un gato', value: 'Un gato' },
        { label: 'Un perro', value: 'Un perro' },
        { label: 'Un elefante', value: 'Un elefante' },
    ],
    correct: 'Un canario'
},
{
    name: 'Dibujos',
    label: '¿Qué animal es piolin?',
    answers: [
        { label: 'Un canario', value: 'Un canario' },
        { label: 'Un gato', value: 'Un gato' },
        { label: 'Un perro', value: 'Un perro' },
        { label: 'Un elefante', value: 'Un elefante' },
    ],
    correct: 'Un canario'
},
{
    name: 'Dibujos',
    label: '¿Qué animal es piolin?',
    answers: [
        { label: 'Un canario', value: 'Un canario' },
        { label: 'Un gato', value: 'Un gato' },
        { label: 'Un perro', value: 'Un perro' },
        { label: 'Un elefante', value: 'Un elefante' },
    ],
    correct: 'Un canario'
},
{
    name: 'Dibujos',
    label: '¿Con que nombre se conozo al sonido que hacen las gallinas?',
    answers: [
        { label: 'Cacarear', value: 'Cacarear' },
        { label: 'Rebuznar', value: 'Rebuzanar' },
        { label: 'Ladrar', value: 'Ladrar' },
        { label: 'Ulular', value: 'Ulular' },
    ],
    correct: 'Cacarear'
}]

let score = 0;
// function that messes up the awnser
const unordenedList = (arrayOrdened) => {
    let arrayUnordened = [];
    let itera = arrayOrdened.length
    for (let i = 0; i < itera; i++) {
        let num = Math.floor(Math.random() * arrayOrdened.length)
        arrayUnordened.push(arrayOrdened[num])
        arrayOrdened.splice(num, 1)
    }
    return arrayUnordened
}

// function that paint targets
const printQuestion = (questions, index) => {
    let respuetas = unordenedList(questions[index].answers) //save a messy array
    let container = document.getElementById('divQuest');
    let quest = document.createElement("h2")
    quest.innerHTML=questions[index].label
    container.appendChild(quest)
    respuetas.forEach((element, i) => {
        let input = document.createElement("input")
        input.setAttribute('type', 'radio')
        input.setAttribute('name', 'answer')
        input.setAttribute('id', `answer${i + 1}`)
        input.setAttribute('value', element.value)
        input.setAttribute('class', 'answer')
        let label = document.createElement('label')
        label.setAttribute('for', `answer${i + 1}`)
        label.innerHTML = element.label
        container.appendChild(label)
        container.appendChild(input)
    })
    let btn = document.createElement('button')
    btn.innerText = "Siguiente"
    btn.setAttribute("id", "btnNext")
    
    if (index == (questions.length - 1)) {
        btn.innerText = ""
        btn.innerText = "Finalizar"

    }
    btn.addEventListener('click', (event) => {
        
        if (btn.textContent != "Finalizar") {
            score = checkAnswer(score,questions[index].correct)
            changeCheck(index, container)
        } else {
            let hoy, fecha;
            hoy = new Date()
            fecha = `${hoy.getDate()}-${(hoy.getMonth() + 1)}-${hoy.getFullYear()} ${event.timeStamp}`
            score = checkAnswer(score,questions[index].correct)
            results(score, fecha)
            location.assign(`results.html`)            
        }
    })
    container.appendChild(btn)
}
// funtion that print the result in result.html
const printresult = () =>{
    let contenedor = document.querySelector('body')
    let  points = JSON.parse(localStorage.getItem('score'))
    let labelPts = document.createElement("p")
    let txt = document.createTextNode(`${points}/10`)
    labelPts.appendChild(txt)
    contenedor.appendChild(labelPts)    
}

// function that save the score 
const checkAnswer = (score, aswTrue) =>{
    document.getElementsByName('answer').forEach(element => {
        
        if (element.checked) {
            if(element.value == aswTrue){
                score++
                let scoreSave = JSON.stringify(score)
                localStorage.setItem("score", scoreSave)
            }                
        }
    });
    return score
}

// function that change and check the targets
const changeCheck = (i, container) => {
   
    if (i != (questions.length - 1)) {
        i++
        container.innerHTML = ""
        printQuestion(questions, i)
    }
}

if(location.pathname =="/question.html"){
    questionOnLoad()
    printQuestion(questions, 0)
}else if(location.pathname == "/results.html"){
    printresult();
}




