// API
const API_ENDPOINT = 'https://yesno.wtf/api';
let boton = document.getElementById("button");
let entrada = document.getElementById("input");
let respuesta = document.getElementById("answer");



boton.addEventListener("click", function(){
    function fetchAnswer(){
        fetch(API_ENDPOINT)
        .then(respuesta => respuesta.json())
        .then(data => (respuesta.innerHTML = data.answer))
    }

} )



