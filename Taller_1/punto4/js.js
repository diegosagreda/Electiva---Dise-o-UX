const nube_1 = document.getElementById('nube-1');
const nube_2 = document.getElementById('nube-2');
const nuber_1 = document.getElementById('nuber-1');
const nuber_2 = document.getElementById('nuber-2');

const nuber1 = document.getElementById('nuber1');
const nuber2 = document.getElementById('nuber2');

const number1 = document.getElementById('nube1r1');
const number2 = document.getElementById('nube1r2');

//Operaciones

const btn_igual = document.getElementById('btn-igual');
const btn_reset = document.getElementById('btn-reset');
const btn_continuar = document.getElementById('btn-continuar');
const btn_terminar = document.getElementById('btn-terminar');
const img_carita = document.getElementById('imagen-carita');
const modal_rta = document.getElementById('modal-rta');
const txt_resultado = document.getElementById('txt-resultado');
const modal = document.getElementById('modal');


const nube = document.getElementById('manzanas');

const resultado_1 = document.getElementById('resultado-1');
const resultado_2 = document.getElementById('resultado-2');


const btn_calcular = document.getElementById('calcular');
const label_operacion = document.getElementById('operacion');

let manzanas_nube1 = Math.floor(Math.random()*5) + 1
let manzanas_nube2 = Math.floor(Math.random()*5) + 1
let posicion_resultado = Math.floor(Math.random()*2) +1
let numero_entre_1_10 = Math.floor(Math.random()*10) + 1 
let opcion_elegida = ''

let totalPreguntas = 0;
let buenas = 0
let malas = 0

const generarNumero = () =>{
    numero_entre_1_10 =  Math.floor(Math.random()*10) + 1 ;
}

const getImagenManzana = ()=>{
    let manzana = document.createElement('img');
    manzana.style.width = '40px';
    manzana.style.height = '40px';
    manzana.src = './img/manzana.png'
    return manzana;
}

const cargarInicioJuego = () =>{
    if(localStorage.getItem('totalPreguntas')){
    }else{
        localStorage.setItem('totalPreguntas',totalPreguntas);
        localStorage.setItem('buenas',buenas);
        localStorage.setItem('malas',malas);
    }

    label_operacion.innerHTML = `${manzanas_nube1} + ${manzanas_nube2} =`
    for(let i = 0; i < manzanas_nube1; i++){
        nube_1.appendChild(getImagenManzana())
    }
    for(let i = 0; i < manzanas_nube2; i++){
        nube_2.appendChild(getImagenManzana())
    }
    //console.log(posicion_resultado)
    //Seteamos la informacion de los posible resultados
    let resultado_correcto =parseInt(manzanas_nube1) + parseInt(manzanas_nube2)
    
    while(numero_entre_1_10 === resultado_correcto){
        generarNumero()
    }
    
    //Definimos la posicion del resultado
    if(posicion_resultado === 1){
        resultado_1.innerHTML = resultado_correcto 
        resultado_2.innerHTML = numero_entre_1_10
        //Renderizamos manzanas
        for(let i = 0; i < resultado_correcto; i++){
            nuber_1.appendChild(getImagenManzana())
        }
        for(let i = 0; i < numero_entre_1_10; i++){
            nuber_2.appendChild(getImagenManzana())
        }
    }else if(posicion_resultado === 2){
        resultado_2.innerHTML = resultado_correcto 
        resultado_1.innerHTML = numero_entre_1_10
        //Renderizamos manzanas
        for(let i = 0; i < resultado_correcto; i++){
            nuber_2.appendChild(getImagenManzana())
        }
        for(let i = 0; i < numero_entre_1_10; i++){
            nuber_1.appendChild(getImagenManzana())
        }
    }
}

//Eventos de las dos soluciones posibles
number1.addEventListener('click', ()=>{
   
    if(!number1.classList.contains('active_nube1r1')){
        if(!number2.classList.contains('active_nube1r1')){
            number1.classList.add('active_nube1r1');
        }else{
            number1.classList.add('active_nube1r1');
            number2.classList.remove('active_nube1r1');
        }
    }else{
        number1.classList.remove('active_nube1r1');
    }
    //Verificamos rta
    opcion_elegida = resultado_1.innerHTML;
})
number2.addEventListener('click', ()=>{
   
    if(!number2.classList.contains('active_nube1r1')){
        if(!number1.classList.contains('active_nube1r1')){
            number2.classList.add('active_nube1r1');
        }else{
            number2.classList.add('active_nube1r1');
            number1.classList.remove('active_nube1r1');
        }
    }else{
        number2.classList.remove('active_nube1r1');
    }
    opcion_elegida = resultado_2.innerHTML;
})

btn_igual.addEventListener('click', ()=>{

    if(opcion_elegida !== ''){
        let resultado_correcto =parseInt(manzanas_nube1) + parseInt(manzanas_nube2)
        
        if(parseInt(resultado_correcto) === parseInt(opcion_elegida)){
            img_carita.setAttribute('src','./img/feliz.png')
            txt_resultado.innerHTML = 'Correcto'
            localStorage.setItem('buenas',parseInt(localStorage.getItem('buenas'))+1)
        }else{
            img_carita.setAttribute('src','./img/triste.png')
            txt_resultado.innerHTML = 'Incorrecto'
            localStorage.setItem('malas',parseInt(localStorage.getItem('malas'))+1)
        }
        modal_rta.classList.remove('ocultar');
        totalPreguntas++;
    
        let nuevaPregunta = parseInt(localStorage.getItem('totalPreguntas'))+1;
        localStorage.setItem('totalPreguntas', nuevaPregunta)
    
        opcion_elegida = ''
    }else{
        alert('Selecciona una respuesta')
    }
})

btn_continuar.addEventListener('click', ()=>{
    modal_rta.classList.add('ocultar');
    window.location.reload()
})
const finalizar = () =>{
    modal_rta.classList.add('ocultar');
    window.location.reload()
    localStorage.clear()
}
btn_terminar.addEventListener('click', ()=>{
    modal.innerHTML =`
        <h2>Fin del Juego</h2>
        <hr/>
        <h3>Total Preguntas: <span>${localStorage.getItem('totalPreguntas')}</span></h3>
        <h3>Total aciertos: <span>${localStorage.getItem('buenas')}</span></h3>
        <h3>Total desaciertos: <span>${localStorage.getItem('malas')}</span></h3>
        <button onclick="finalizar()">Fin</button>
    `
})
btn_reset.addEventListener('click',()=>{
    alert('Nuevo Juego')
    finalizar()
})
cargarInicioJuego()