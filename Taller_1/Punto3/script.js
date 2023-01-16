//Seleccionamos elementos del DOM
const btn_abastecer_artesanal = document.getElementById('helado-artesanal')
const btn_abastecer_bocato = document.getElementById('bocato')
const btn_abastecer_chococono = document.getElementById('chococono')
const btn_comprar_artesanal = document.getElementById('comprar-artesanal')
const btn_comprar_bocato = document.getElementById('comprar-bocato')
const btn_comprar_chococono = document.getElementById('comprar-chococono')
const btn_total_ventas = document.getElementById('total-ventas')
const btn_unidades_vendidas = document.getElementById('unidades-vendidas')


const cantidad_artesanal = document.getElementById('cantidad-artesanal')
const cantidad_bocato = document.getElementById('cantidad-bocato')
const cantidad_chococono = document.getElementById('cantidad-chococono')

let total_ventas = 0

let artesanales = 0;
let chococonos = 0;
let bocatos = 0;


btn_abastecer_artesanal.addEventListener('click', () =>{
    let cantidad = prompt('Ingrese el numero de unidades que abastecera del producto')
    if (parseInt(cantidad) > 0){
        cantidad_artesanal.innerHTML = cantidad;
    }else{
        alert('La cantidad minima es 1')
    }
})
btn_abastecer_bocato.addEventListener('click', ()=>{
    let cantidad = prompt('Ingrese el numero de unidades que abastecera del producto')
    if (parseInt(cantidad) > 0){
        cantidad_bocato.innerHTML = cantidad;
    }else{
        alert('La cantidad minima es 1')
    }
})
btn_abastecer_chococono.addEventListener('click', ()=>{
    let cantidad = prompt('Ingrese el numero de unidades que abastecera del producto')
    if (parseInt(cantidad) > 0){
        cantidad_chococono.innerHTML = cantidad
    }else{
        alert('La cantidad minima es 1')
    }
})

btn_comprar_artesanal.addEventListener('click', ()=>{
    if(parseInt(cantidad_artesanal.textContent)>0){
        cantidad_artesanal.innerHTML = parseInt(cantidad_artesanal.textContent) - 1;
        total_ventas += 1800;
        artesanales ++;
        alert('Compra realizada con exito')
    }else{
        alert('Producto agotado')
    }
})
btn_comprar_chococono.addEventListener('click', ()=>{
    if(parseInt(cantidad_chococono.textContent)>0){
        cantidad_chococono.innerHTML = parseInt(cantidad_chococono.textContent) - 1;
        total_ventas += 2000;
        chococonos++;
        alert('Compra realizada con exito')
    }else{
        alert('Producto agotado')
    }
})
btn_comprar_bocato.addEventListener('click', ()=>{
    if(parseInt(cantidad_bocato.textContent)>0){
        cantidad_bocato.innerHTML = parseInt(cantidad_bocato.textContent) - 1;
        total_ventas += 3000
        bocatos++;
        alert('Compra realizada con exito')
    }else{
        alert('Producto agotado')
    }
})

btn_total_ventas.addEventListener('click', ()=>{
    alert('El valor total de ventas de la maquina es: '+total_ventas)
})
btn_unidades_vendidas.addEventListener('click', ()=>{
    alert('La cantidad de unidades vendidas por producto es: \nHelado Artesanal: '+artesanales+'\nBocato: '+bocatos+'\nChococono: '+chococonos)
});

