
const btn_calcular = document.getElementById('calcular');
const btn_ok = document.getElementById('ok');
const modal = document.getElementById('modal');
const head = document.getElementById('head');
const mensaje = document.getElementById('mensaje');
const titulo = document.getElementById('titulo');
const icono = document.getElementById('icono');
const accion = document.getElementById('accion');


btn_calcular.addEventListener('click', () =>{
    const lado_a = document.getElementById('ladoa').value;
    const lado_b = document.getElementById('ladob').value;
    const lado_c = document.getElementById('ladoc').value;

    //Validacion numerica
    if(!isNaN(lado_a) && !isNaN(lado_b) && !isNaN(lado_c)){

        //Validacion division entre cero
        if(lado_a === '0' || lado_c === '0' ){
            modal.classList.remove('modal-inactive');
            modal.classList.add('modal');
            head.classList.add('head-error');
            mensaje.innerText = 'Division por cero'
            titulo.innerText = 'Error'
            icono.setAttribute('src','./img/error.png')
        }else{
            //validamos valores negativos
            if(parseFloat(lado_a) < 0 || parseFloat(lado_b) < 0 || parseFloat(lado_c) < 0){
                modal.classList.remove('modal-inactive');
                modal.classList.add('modal');
                head.classList.add('head-error');
                mensaje.innerText = 'Se han digitado valores negativos'
                titulo.innerText = 'Error'
                icono.setAttribute('src','./img/error.png')
            }else{
                //Realizamos calculos
                let area = 0;
                //calculamos s
                let s = (parseFloat(lado_a) + parseFloat(lado_b) + parseFloat(lado_c)) / 2;
                area = Math.sqrt(s*( (s-parseFloat(lado_a)) * (s - parseFloat(lado_b)) * (s - parseFloat(lado_c))))
    
                //Renderizamos valor
                modal.classList.remove('modal-inactive');
                modal.classList.add('modal');
                head.classList.add('head-info');
                head.classList.remove('head-error');
                head.classList.remove('head-adver');
                mensaje.innerText = `Area = ${area}`
                titulo.innerText = 'Informacion'
                icono.setAttribute('src','./img/info.png')
            }

        }

       
    }else{
        modal.classList.remove('modal-inactive');
        modal.classList.add('modal');
        head.classList.add('head-adver');
        head.classList.remove('head-error');
        head.classList.remove('head-info');
        
        mensaje.innerText = 'Se han digitado valores no numericos'
        titulo.innerText = 'Advertencia'
        icono.setAttribute('src','./img/ad1.png')
    }

    //Validacion cajas vacias
    if(lado_a === '' || lado_b === '' || lado_c === ''){
        modal.classList.remove('modal-inactive');
        modal.classList.add('modal');
        head.classList.add('head-adver');
        mensaje.innerText = 'Existen campos vacios'
        titulo.innerText = 'Advertencia'
        icono.setAttribute('src','./img/ad1.png')
    }

})
btn_ok.addEventListener('click', ()=>{
    modal.classList.remove('modal');
}
)