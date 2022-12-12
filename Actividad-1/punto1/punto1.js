//Punto 1

const btnRetirar = document.getElementById('btn-retirar');
const billetes = document.getElementById('billetes');

const retirarDinero = () => {

    billetes.innerHTML = ''

    let cincoMil = 0;
    let diezMil = 0;
    let veinteMil = 0;
    let cincuentaMil = 0;
    let cienMil = 0;

    
    let valor = parseInt(document.getElementById('monto').value);
    
    let monto = valor;
    //Validamos monto minimo y maximo
    if(valor > 50000 && valor < 1200000){
        //Validamos que el monto sea multiplo de 5000
        if(valor % 5000 === 0){
            //Validamos la cantidad de billetes a entregar
            while(monto !== 0){
                //Validacio billetes de 100
                if(monto - 100000 >= 0){
                    cienMil ++;
                    monto = monto - 100000
                }else if(monto - 50000 >= 0){
                    cincuentaMil++;
                    monto =monto - 50000;
                }else if(monto - 20000 >= 0){
                    veinteMil++;
                    monto =monto - 20000;
                }else if(monto - 10000 >= 0){
                    diezMil++;
                    monto =monto - 10000;
                }else if(monto - 5000 >= 0){
                    cincoMil++;
                    monto =monto - 5000;
                }
            }   
        }else{
            alert('El monto debe ser multiplo de 5.000')
        }
    }else{
        alert('El monto debe estar entre 50.000 y 1.200.000')
    }

    
    for (let index = 0; index < cienMil; index++) {
        billetes.appendChild(getbillete100())
    }
    for (let index = 0; index < cincuentaMil; index++) {
        billetes.appendChild(getbillete50())
    }
    for (let index = 0; index < veinteMil; index++) {
        billetes.appendChild(getbillete20())
    }
    for (let index = 0; index < diezMil; index++) {
        billetes.appendChild(getbillete10())
    }
    for (let index = 0; index < cincoMil; index++) {
        billetes.appendChild(getbillete5())
    }
    
    
}

btnRetirar.addEventListener('click',retirarDinero)

const getbillete100 = ()=>{
    let billete100 = document.createElement('img');
    billete100.style.width = '200px';
    billete100.style.height = '100px';
    billete100.src = 'https://http2.mlstatic.com/D_NQ_NP_670792-MCO49754453264_042022-V.jpg';
    return billete100;
}

const getbillete50 = () => {
    let billete100 = document.createElement('img');
    billete100.style.width = '200px';
    billete100.style.height = '100px';
    billete100.src = 'https://www.banrep.gov.co/billetes/50-mil/images/50000/anverso50000.png';
    return billete100;
}
const getbillete20 = () => {
    let billete100 = document.createElement('img');
    billete100.style.width = '200px';
    billete100.style.height = '100px';
    billete100.src = 'https://www.banrep.gov.co/billetes/20-mil/images/20000/anverso20000.png';
    return billete100;
}
const getbillete10 = () => {
    let billete100 = document.createElement('img');
    billete100.style.width = '200px';
    billete100.style.height = '100px';
    billete100.src = 'https://www.banrep.gov.co/billetes/10-mil/images/10000/anverso10000.jpg';
    return billete100;
}
const getbillete5 = () => {
    let billete100 = document.createElement('img');
    billete100.style.width = '200px';
    billete100.style.height = '100px';
    billete100.src = 'https://www.elcolombiano.com/documents/10157/0/803x410/0c0/0d0/none/11101/IIKU/image_content_27347562_20161109213941.jpg';
    return billete100;
}



