
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

    //Pasamos la hora digitada a segundos
    const horasEnSegundos = horas*3600;
    const minutEnSegundos = minutos*60;
    //Sumamos los datos para encontrar la hora dada en segundos
    const horaSegundos = parseInt(horasEnSegundos) + parseInt(minutEnSegundos) +parseInt(segundos) + parseInt(segundosOperar);


    const horasFinal    = (Math.floor(horaSegundos / 3600)).toString();
    const minutosFinal  = (Math.floor(horaSegundos / 60 )%60).toString();
    const segundosFinal = (Math.round(horaSegundos % 60)).toString();

    form.innerHTML =`${horasFinal} : ${minutosFinal} : ${segundosFinal}`
    
    console.log(horasFinal,minutosFinal,segundosFinal)
 
    
})