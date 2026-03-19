// declaracion de variables
const verde=document.getElementById("verde");
const rojo=document.getElementById("rojo");
const azul=document.getElementById("azul");
const amarillo=document.getElementById("amarillo");
const morado=document.getElementById("morado");
const body=document.getElementById("body")

// Eventos
verde.addEventListener("click", ()=>{
    body.style.backgroundColor="green"
})
rojo.addEventListener("click", ()=>{
    body.style.backgroundColor="red"
})
azul.addEventListener("click", ()=>{
    body.style.backgroundColor="blue"
})
amarillo.addEventListener("click", ()=>{
    body.style.backgroundColor="yellow"
})
morado.addEventListener("click", ()=>{
    body.style.backgroundColor="violet"
})

// variable.propiedad
// variable.accion(parametro1,parametro2)
// morado.addEventListener("evento", ()=>{

// })



// //////////////////////////////////////
const saludar=document.getElementById("saludar");
const nombre=document.getElementById("nombre");
const parrafo=document.getElementById("saludo");
saludar.addEventListener("click", ()=>{
    parrafo.textContent="Hola "+nombre.value
    // nombre.value
})