const printQuestion = (questions,index) => {
    
        let respuetas = unordenedList(questions[index].awnsers) //save a messy array
        let container = document.getElementById('divQuest');
        let quest = document.createElement("h2")
        let txtquest = document.createTextNode(questions[index].label)
        respuetas.forEach(element => {
            let input = document.createElement

        })






}

document.getElementById('btnNext').addEventListener('click', (event) => {
    let hoy = new Date()
    let fecha = `${hoy.getDate()}-${(hoy.getMonth() + 1)}-${hoy.getFullYear()}`
    // result(fecha,puntuacion);
    document.getElementsByName('awnser').forEach(element => {
        if (element.checked) console.log(element.value)
    });

})

// function that messes up the awnser
const unordenedList = (arrayOrdened) => {
    let arrayUnordened = [];
    let itera = arrayOrdened.length
    for (let i = 0; i < itera; i++) {
        let num = Math.floor(Math.random() * arrayOrdened.length)
        arrayUnordened.push(arrayOrdened[num])
        arrayOrdened.splice(num, 1)
        console.log(arrayUnordened)
    }

}