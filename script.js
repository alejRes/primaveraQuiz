let questions = [{
    name: 'Matemáticas',
    label: 'Cual es el resultado de multiplicar 4 x 5',
    answers: [
        { label: '20', value: '20' },
        { label: '15', value: '15'},
        { label: '12', value: '12' },
        { label: '16', value: '16'},
    ],
    correct: '20'
},
{
    name: 'Dibujos',
    label: '¿Qué animal es piolin?',
    answers: [
        { label: 'Un canario' , value: 'Un canario'},
        { label: 'Un gato', value: 'Un gato'  },
        { label: 'Un perro', value: 'Un perro'  },
        { label: 'Un elefante', value: 'Un elefante'  },
    ],
    correct: 'Un canario'
},
{
    name: 'Dibujos',
    label: '¿Qué animal es piolin?',
    answers: [
        { label: 'Un canario' , value: 'Un canario'},
        { label: 'Un gato', value: 'Un gato'  },
        { label: 'Un perro', value: 'Un perro'  },
        { label: 'Un elefante', value: 'Un elefante'  },
    ],
    correct: 'Un canario'
},
{
    name: 'Dibujos',
    label: '¿Qué animal es piolin?',
    answers: [
        { label: 'Un canario' , value: 'Un canario'},
        { label: 'Un gato', value: 'Un gato'  },
        { label: 'Un perro', value: 'Un perro'  },
        { label: 'Un elefante', value: 'Un elefante'  },
    ],
    correct: 'Un canario'
},
{
    name: 'Dibujos',
    label: '¿Qué animal es piolin?',
    answers: [
        { label: 'Un canario' , value: 'Un canario'},
        { label: 'Un gato', value: 'Un gato'  },
        { label: 'Un perro', value: 'Un perro'  },
        { label: 'Un elefante', value: 'Un elefante'  },
    ],
    correct: 'Un canario'
},
{
    name: 'Dibujos',
    label: '¿Qué animal es piolin?',
    answers: [
        { label: 'Un canario' , value: 'Un canario'},
        { label: 'Un gato', value: 'Un gato'  },
        { label: 'Un perro', value: 'Un perro'  },
        { label: 'Un elefante', value: 'Un elefante'  },
    ],
    correct: 'Un canario'
},
{
    name: 'Dibujos',
    label: '¿Qué animal es piolin?',
    answers: [
        { label: 'Un canario' , value: 'Un canario'},
        { label: 'Un gato', value: 'Un gato'  },
        { label: 'Un perro', value: 'Un perro'  },
        { label: 'Un elefante', value: 'Un elefante'  },
    ],
    correct: 'Un canario'
}]

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
    console.log(questions[index].answers)
    let respuetas = unordenedList(questions[index].answers) //save a messy array
    
    let container = document.getElementById('divQuest');
    let quest = document.createElement("h2")
    let txtquest = document.createTextNode(questions[index].label)
    quest.appendChild(txtquest)
    container.appendChild(quest)
    respuetas.forEach((element, i) => {
        let input = document.createElement("input")
        input.setAttribute('type', 'radio')
        input.setAttribute('name', 'awnser')
        input.setAttribute('id', `awnser${i + 1}`)
        input.setAttribute('value', element.value)
        let label = document.createElement('label')
        label.setAttribute('for', `awnser${i + 1}`)
        label.innerText = element.label
        container.appendChild(label)
        container.appendChild(input)
    })
    let btn = document.createElement('button')
    btn.innerText="Siguiente"
    btn.setAttribute("id","btnNext")
    btn.addEventListener('click', (event) => {
        
        /* document.getElementsByName('awnser').forEach(element => {
            if (element.checked) {
                console.log(element.value)
                console.log(event.target.innerText)
            }
        });
        if(index!=(questions.length-1)){
            index++
            container.innerHTML=""
            printQuestion(questions,index)
        } */
        changeCheck(questions[index].correct,index,event,container)
    })
    container.appendChild(btn)
}
// function that change and check the targets
const changeCheck =(ansTrue, i,e,container)=>{
    document.getElementsByName('awnser').forEach(element => {
        if (element.checked) {
            console.log(element.value)
            console.log(e.target.innerText)
        }
    });
    if(i!=(questions.length-1)){
        i++
        container.innerHTML=""
        printQuestion(questions,i)
    }

}

printQuestion(questions,0)

/* document.getElementById('btnNext').addEventListener('click', (event) => {
    let hoy = new Date()
    let fecha = `${hoy.getDate()}-${(hoy.getMonth() + 1)}-${hoy.getFullYear()} ${event.timeStamp}`

    console.log(fecha)
    // result(fecha,puntuacion);
    document.getElementsByName('awnser').forEach(element => {
        if (element.checked) console.log(element.value)
        
    });
}) */

// function that messes up the awnser
/* const unordenedList = (arrayOrdened) => {
    let arrayUnordened = [];
    let itera = arrayOrdened.length
    for (let i = 0; i < itera; i++) {
        let num = Math.floor(Math.random() * arrayOrdened.length)
        arrayUnordened.push(arrayOrdened[num])
        arrayOrdened.splice(num, 1)
        return arrayUnordened
    }
} */

