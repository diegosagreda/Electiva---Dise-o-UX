const nube_1 = document.getElementById('nube-1');
const nube_2 = document.getElementById('nube-2');

let manzanas_nube1 = Math.floor(Math.random()*5) + 1
let manzanas_nube2 = Math.floor(Math.random()*5) + 1

const imagenManzana = document.createElement('img')
imagenManzana.src = 'https://media.istockphoto.com/id/1141529240/es/vector/simple-manzana-en-estilo-plano-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=LVaXkw5udL6sGP5cQT7PHq122aaZrYs2RUDwk7-hOh8='
imagenManzana.style = 'width: 50px'



nube_2.appendChild(imagenManzana)
