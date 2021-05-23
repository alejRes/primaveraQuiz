/**
 * 
 * Questions manually loaded
 * 
 */

const questions = [];

const quest = {
    "results":[
                {
                    "category":"History","type":"multiple",
                    "difficulty":"hard",
                    "question":"How long did the Warsaw Uprising during World War II last?",
                    "correct_answer":"63 Days",
                    "incorrect_answers":[
                        "20 Days",
                        "55 Days",
                        "224 Days"
                    ]
                },{
                    "category": "Entertainment: Music",
                    "type": "multiple",
                    "difficulty": "hard",
                    "question": "Who sings the rap song &quot;Secret Wars Part 1&quot;?",
                    "correct_answer": "The Last Emperor",
                    "incorrect_answers": [
                        "MC Frontalot",
                        "Busdriver",
                        "Masta Killa"
                    ]
                },{
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "hard",
                    "question": "What is the official German name of the Swiss Federal Railways?",
                    "correct_answer": "Schweizerische Bundesbahnen",
                    "incorrect_answers": [
                        "Schweizerische Nationalbahnen",
                        "Bundesbahnen der Schweiz",
                        "Schweizerische Staatsbahnen"
                    ]
                },{
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "medium",
                    "question": "The World Health Organization headquarters is located in which European country?",
                    "correct_answer": "Switzerland",
                    "incorrect_answers": [
                        "United Kingdom",
                        "France",
                        "Belgium"
                    ]
                },{
                    "category": "Entertainment: Video Games",
                    "type": "multiple",
                    "difficulty": "medium",
                    "question": "Which of the following has Jennifer Taylor NOT voiced?",
                    "correct_answer": "Sarah Kerrigan",
                    "incorrect_answers": [
                        "Princess Peach",
                        "Zoey",
                        "Cortana"
                    ]
                }
            ]
}

/**
 * 
 * Question Fetch
 * 
 */

const getQuestions = async () => {
    
    const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    const data = await res.json()
    data.results.forEach(element => quest.results.push(element));
    return quest
}

/**
 * 
 * Fetch + printQuestions + printQuestion call
 * 
 */

const printQuestions = (quests) => {
    
    question = {
                name: quests.category,
                label: quests.question,
                answers: [
                            {label: quests.incorrect_answers[0], value: quests.incorrect_answers[0]},
                            {label: quests.incorrect_answers[1], value: quests.incorrect_answers[1]},
                            {label: quests.incorrect_answers[2], value: quests.incorrect_answers[2]},
                            {label: quests.correct_answer, value: quests.correct_answer},
                        ],
                        correct: quests.correct_answer
                    }
    questions.push(question);
}

/**
 * 
 * Question on load function
 * 
 */

const questionOnLoad = () => {
    getQuestions().then(quest => quest.results.forEach(element => printQuestions(element))).then(()=>printQuestion(questions,0))
}

/* document.getElementById("takeQuiz").addEventListener("click",()=> {
    location.assign("question.html") 
}) */

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
            result(score, fecha)
            location.assign(`results.html`)            
        }
    })
    container.appendChild(btn)
}
// funtion that print the result in result.html
const printresult = () =>{
    let contenedor = document.querySelector('#puntuacion')
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
}else if(location.pathname == "/results.html"){
    printresult();
}

