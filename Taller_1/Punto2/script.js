/*Seleccionamos elementos del DOM*/
const btn_carrito = document.getElementById('btn-carrito');
const btn_seguir_comprando = document.getElementById('seguir');
const btn_pagar_compra = document.getElementById('pagar');

/*Modal carrito*/
const modal_carrito = document.getElementById('carrito-compras');
/* Contenedor productos*/
const contenedor_productos = document.getElementById('productos');
/** Items compras carrito*/
const items_carrito = document.getElementById('items-compra');

//Cargamos productos desde un archivo Json
let productos = []
let carritoCompras = []

fetch('./data/productos.json')
.then((response)=> response.json())
.then((data)=> data.forEach(element => {
    productos.push(element)  
}))

const addCar = (id) => {
    //Si el producto no esta en el carrito lo añadimos al carrito de compras
    if(!carritoCompras.find(p => p.id === id)){
        carritoCompras.push(productos.find(product => product.id === id))
    }else{
        const product = carritoCompras.find(p => p.id === id)
        product.cantidad = parseInt(product.cantidad) + 1
    }
    mostrarCarrito()
}
const getProducto = (img,nombre,precio,id) => {
    const product = document.createElement('div')
    product.classList.add('producto')
    const imagen = document.createElement('img') 
    imagen.src = img
    const info_producto = document.createElement('div')
    info_producto.classList.add('info-producto')

    const descripcion = document.createElement('div')
    descripcion.classList.add('descripcion')


    const nombreProducto = document.createElement('h3')
    nombreProducto.innerText = nombre
    const precioProducto = document.createElement('p')
    precioProducto.innerText = `$${precio}`

    descripcion.appendChild(nombreProducto)
    descripcion.appendChild(precioProducto)
    
    //Icono de compra
    const icono_addcar = document.createElement('img')
    icono_addcar.src = './icons/addproduct.png'
    icono_addcar.style.width = '50px'
    icono_addcar.style.height = '50px'
    icono_addcar.onclick = () => addCar(id)
        

    info_producto.appendChild(descripcion)
    info_producto.appendChild(icono_addcar)
    product.appendChild(imagen)
    product.appendChild(info_producto)
    return product
}
const eliminarProductoCarrito = (id) => {
    const nuevoArray = carritoCompras.filter((item) => parseInt (item.id) !== parseInt(id))
    carritoCompras = nuevoArray

    mostrarCarrito()
    
}
const getProductoCarrito = (img,nomb,precio,cantidad,id) => {
    const card = document.createElement('div');
    card.innerHTML = `<div class="item-compra">
    <img src=${img} alt="">
    <h3>${nomb}</h3>
    <p>$${precio}</p> 
    <div class="cantidad">
        <img onclick="restarProductoCantidadCarrito(${id})" src="./icons/menos.png" alt="">
        <p>${cantidad}</p>
        <img onclick="sumarCantidadProductoCarrito(${id})" src="./icons/mas.png" alt="">
    </div>
    <img onclick="eliminarProductoCarrito(${id})" src="./icons/eliminar.png" alt="">
    </div>`
    return card
}
const mostrarCarrito = () =>{
    modal_carrito.classList.remove('carrito-compras')
    modal_carrito.classList.add('carrito-compras-active')  

    /**
     * Cargamos productos al carrito compra
    */
   //Limpiamos buffer carrito
   items_carrito.innerHTML = ''
   //Cargamos productos
   carritoCompras.forEach(element => {
       items_carrito.appendChild(getProductoCarrito(element.imagen,element.nombre,parseFloat(element.precio) * parseInt(element.cantidad),element.cantidad,element.id))
   });
}
const sumarCantidadProductoCarrito = (id)=>{
    const productoCarrito = carritoCompras.find(p => parseInt (p.id) === parseInt(id))
    productoCarrito.cantidad = parseInt(productoCarrito.cantidad) + 1
    mostrarCarrito()
}
const restarProductoCantidadCarrito = (id)=>{
    const productoCarrito = carritoCompras.find(p => parseInt (p.id) === parseInt(id))
    if(parseInt(productoCarrito.cantidad) > 1){
        productoCarrito.cantidad = parseInt(productoCarrito.cantidad) - 1
    }else{
        eliminarProductoCarrito(id)
    }
    mostrarCarrito()
}
/*Renderizamos productos en la pagina principal*/
const cargarProductos = () =>{
    //Productos 
    productos.forEach(element => {
        contenedor_productos.appendChild(getProducto(element.imagen,element.nombre,element.precio,element.id))  
    });
   
}
setTimeout(()=>{
    cargarProductos()
},1000)

btn_carrito.addEventListener('click', () =>{
   mostrarCarrito()
})
btn_seguir_comprando.addEventListener('click',()=>{
    modal_carrito.classList.add('carrito-compras')
    modal_carrito.classList.remove('carrito-compras-active')  
})
btn_pagar_compra.addEventListener('click', ()=>{
    console.log(carritoCompras)
})

