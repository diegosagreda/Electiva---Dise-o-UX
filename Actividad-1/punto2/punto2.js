
const btnCalcular = document.getElementById('btn-calcular');
const respuesta = document.getElementById('respuesta');



btnCalcular.addEventListener('click',()=>{
    let horas = parseInt (document.getElementById('horas').value);
    let minutos = parseInt (document.getElementById('minutos').value);
    let segundos = parseInt (document.getElementById('segundos').value);

    const horaAux=(parseInt(horas,10))*15;
    const minutosAux=(parseInt(minutos,10))*0.25;
    const segundosAux=(parseInt(segundos,10))*0.00416666667;

    const grados=horaAux+minutosAux+segundosAux;
    const totalMinutos=grados*60;
    
    const totalSegundos=totalMinutos*60;

    let retorno=`Arco recorrido: ${Math.round(grados)}°${Math.round(totalMinutos)}'${Math.round(totalSegundos)}''`
  
    respuesta.innerHTML = retorno;

    
})