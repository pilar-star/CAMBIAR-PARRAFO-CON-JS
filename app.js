const boton = document.getElementById('cambiarBtn');
boton.addEventListener('click', function(event) {
    const parrafo = document.getElementById('parrafo')
    const colores = ['red', 'blue', 'green', 'orange', 'purple'];
    function parrafoColorAleatorio() {
        const fondo = Math.floor(Math.random() * colores.length);
        const colorElegido = colores[fondo];
        return colorElegido;};
    parrafo.style.backgroundColor = parrafoColorAleatorio();
    function parrafoTextoAleatorio() {
        const textos = ['¡PUEDE SER ABC!', '¡SER PUEDE HOLA!', '¡PUEDE CAMBIAR!', '¡CAMBIANDO CONSTANTEMENTE!'];
        const indice = Math.floor(Math.random() * textos.length);
        const textoElegido = textos[indice];
        return textoElegido;}
    parrafo.textContent = parrafoTextoAleatorio();
  console.log('¡Botón clickeado!');
});

const restaurarBtn = document.getElementById('restaurarBtn');
restaurarBtn.addEventListener('click', function(event) {
    const parrafo = document.getElementById('parrafo');
    parrafo.textContent = 'Este es un párrafo que cambiará cuando hagas clic en un botón y volverá a su estado original con el otro botón.';
    parrafo.style.backgroundColor = 'rgb(153, 157, 240)';
    console.log('¡Párrafo restaurado!');
});

const parrafo = document.getElementById('parrafo');
parrafo.addEventListener('mouseover', function(event) {
    const tamaños = ['10px', '15px', '20px', '25px', '40px'];
    function parrafoTamañoAleatorio() {
        const indice = Math.floor(Math.random() * tamaños.length);
        const tamañoElegido = tamaños[indice];
        return tamañoElegido;}
    parrafo.style.fontSize = parrafoTamañoAleatorio();
    console.log('¡Mouse sobre párrafo!');
});

