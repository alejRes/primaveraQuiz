/**
 * 
 * Questions manually loaded
 * 
 */

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
                            {label: 'Ninguna', value: 'Ninguna'},
                        ],
                        correct: quests.correct_answer
                    }
    printQuestion(question);
}

/**
 * 
 * Dummy printQuestion
 * 
 */

const printQuestion = (q) => {
    console.log(q);
}

/**
 * 
 * Question on load function
 * 
 */

/*
!- If an eventListener is added on home.html "Take Quiz button". The product of the function call stays on home. Since the only way to access question.html is via this button the functions to produce the questions are called on page load.
 */

const questionOnLoad = () => {
    getQuestions().then(quest => quest.results.forEach(element => printQuestions(element)))
}








