




let keys
let values
let horaPuntuacion ={}
let result=(resultado, date)=>{horaPuntuacion[date]=resultado
    localStorage.setItem(
     "quentinTarantino", JSON.stringify(horaPuntuacion));
     //console.log(horaPuntuacion)
             keys = Object.keys(horaPuntuacion )
            //console.log(keys)
             values= Object.values(horaPuntuacion)
           // console.log(values)
}
     //console.log(horaPuntuacion)
 
    result("9","14-8-2021 158")
    result("7","53-8-2021 261")
    result("1","73-8-2021 391")
    result("4","73-8-2021 369")
    result("4","73-8-2021 3924")
    result("4","73-8-2021 3914")
//console.log(keys)
let fechas=keys.map((x)=>x.slice(0,9))
    console.log(fechas)
   


    let graficDates=[]
        let numero = fechas
        let hola2 = numero.length-4//(numero.length-(numero.length-4))
        for(i=hola2;i<numero.length;i++){
            graficDates.push(numero[i])
        }
console.log(graficDates)

let graficValues=[]
        let numero2 = values
        let hola3 = numero2.length-4//(numero.length-(numero.length-4))
        for(i=hola3;i<numero2.length;i++){
            graficValues.push(numero2[i])
        }
console.log(graficValues)

 storagepaintGraphics =() => {
    fechas = graficDates
    puntos = graficValues
            const labels = fechas;
            const data = {
                labels: labels,
                datasets: [{
                    label: 'Ultimas puntuaciones:',
                    data: puntos,
                    backgroundColor: [
                    'rgba(0, 241, 255, 0.2)'
                    
                    
                    
                    ],
                    borderColor: [
                    'RGB(0, 168, 0)'
                    
                    ],
                    borderWidth: 3
                }]
            };
            const config = {
                type: 'bar',
                data: data,
                options: {
                scales: {
                    y: {
                    beginAtZero: true,
                    endAt:10
                    },
                    x:{
                        display: true,
                        title: {
                          display: true,
                          text: 'ultimas partidas ',
                          color: '#191',
                          font: {
                            family: 'Times',
                            size: 20,
                            // style: 'normal',
                            lineHeight: 1.2
                          },
                         // padding: {top: 30, left: 0, right: 0, bottom: 0}
                        }
                    }
                }
                },
            };




            var myChart = new Chart(
                document.getElementById('myChart'),
                config
            );

            function pintarResultados(){
    console.log (puntos.map((x)=>`tu puntuacion es:${x}`))




            }pintarResultados(puntos)
 } 
 storagepaintGraphics()
 

function pintarUl(a,b) {for (let i = 0; i < b.length; i++) {
    let texto = document.createTextNode(`${a[i]} : ${b[i]} aciertos`)
    let li = document.createElement("li")
    document.getElementById("ul").appendChild(li)
    li.appendChild(texto)
}
    document.createTextNode(``)
    
}
pintarUl(graficDates,graficValues)