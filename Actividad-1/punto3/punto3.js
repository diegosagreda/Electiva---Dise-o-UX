
const btnCalcular = document.getElementById('calcular');
const txthoras = document.getElementById('horas');
const txtminutos = document.getElementById('minutos');
const txtsegundos = document.getElementById('segundos');
const txtsegundosOperar = document.getElementById('segundosOperar');

const form = document.getElementById('formulario');
btnCalcular.addEventListener('click', (e) =>{
    e.preventDefault()
    const horas = txthoras.value;
    const minutos = txtminutos.value;
    const segundos = txtsegundos.value;
    const segundosOperar = txtsegundosOperar.value;
    const operacion = document.getElementById('operacion').value;




    //Pasamos la hora digitada a segundos
    const horasEnSegundos = horas*3600;
    const minutEnSegundos = minutos*60;

    //Sumamos los datos para encontrar la hora dada en segundos
    const horaSegundos = parseInt(horasEnSegundos) + parseInt(minutEnSegundos) +parseInt(segundos) + parseInt(segundosOperar);
    //Restamos los datos
    const horasRestadas = (parseInt(horasEnSegundos) + parseInt(minutEnSegundos) +parseInt(segundos)) - parseInt(segundosOperar)

    //Hora a  operarar

    let horaOperar = 0

    //Seleccionamos el tipo de operacion

    if(operacion === 'sumar'){
        horaOperar = horaSegundos
    }else{
        horaOperar = horasRestadas
    }

    const horasFinal    = (Math.floor(horaOperar / 3600)).toString();
    const minutosFinal  = (Math.floor(horaOperar / 60 )%60).toString();
    const segundosFinal = (Math.round(horaOperar % 60)).toString();

    form.innerHTML =`${horasFinal} : ${minutosFinal} : ${segundosFinal}`
    
    console.log(horasFinal,minutosFinal,segundosFinal)
 
    
})