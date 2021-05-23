let graficDates
let graficValues
let fechas
let keys
let values
let horaPuntuacion ={}
let result=(resultado, date)=>{
    if(localStorage.getItem('quentinTarantino')==undefined){
    horaPuntuacion[date]=resultado
    localStorage.setItem(
     "quentinTarantino", JSON.stringify(horaPuntuacion));
     //console.log(horaPuntuacion)
             keys = Object.keys(horaPuntuacion )
            console.log(keys)
             values= Object.values(horaPuntuacion)
           console.log(values)
           filtrar()
            storagepaintGraphics()
            pintarUl(graficDates,graficValues)
}else{
    horaPuntuacion =JSON.parse( localStorage.getItem('quentinTarantino'))
    horaPuntuacion[date]=resultado
    localStorage.setItem(
    "quentinTarantino", JSON.stringify(horaPuntuacion));
            keys = Object.keys(horaPuntuacion )
            console.log(keys)
             values= Object.values(horaPuntuacion)
            console.log(values)
            filtrar()
            storagepaintGraphics()
            pintarUl(graficDates,graficValues)
        }
        }

// let result=(resultado, date)=>{horaPuntuacion[date]=resultado
//     localStorage.setItem(
//      "quentinTarantino", JSON.stringify(horaPuntuacion));
//      //console.log(horaPuntuacion)
//              keys = Object.keys(horaPuntuacion )
//             //console.log(keys)
//              values= Object.values(horaPuntuacion)
//            // console.log(values)
// }
     //console.log(horaPuntuacion)
 
     
    // result("10","53-8-2021 3856")
    // result("4","73-8-2021 3914")
//console.log(keys)
function filtrar() {
    
 fechas=keys.map((x)=>x.slice(0,9))
    console.log(fechas)

   


     graficDates=[]
        let numero = fechas
        let hola2 = numero.length-4//(numero.length-(numero.length-4))
        for(i=hola2;i<numero.length;i++){
            graficDates.push(numero[i])
        }
console.log(graficDates)

 graficValues=[]
        let numero2 = values
        let hola3 = numero2.length-4//(numero.length-(numero.length-4))
        for(i=hola3;i<numero2.length;i++){
            graficValues.push(numero2[i])
        }
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
                    scale: {
                        ticks: {
                          precision: 0
                        }
                      },
                scales: {
                    
                    y: {
                    beginAtZero: true,
                    endAt:10,
                    display: true,
                        title: {
                          display: true,
                          text: 'puntuaciones',
                          color: '#191',
                          font: {
                            family: 'Times',
                            size: 20,
                            // style: 'normal',
                            lineHeight: 1.2
                          },
                         // padding: {top: 30, left: 0, right: 0, bottom: 0}
                        }
                    },
                    x:{
                        display: true,
                        title: {
                          display: true,
                          text: 'fechas',
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
 
 

function pintarUl(a,b) {for (let i = 0; i < b.length; i++) {
    let texto = document.createTextNode(`${a[i]} : ${b[i]} aciertos`)
    let li = document.createElement("li")
    document.getElementById("ul").appendChild(li)
    li.appendChild(texto)
}
    
    
}

//location.assign(`home.html`)


