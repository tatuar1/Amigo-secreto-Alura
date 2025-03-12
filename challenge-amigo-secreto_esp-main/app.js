// app.js
var lista = [];
var amigoInput = document.getElementById('amigo');
var listaAmigos = document.getElementById('listaAmigos');
var resultado = document.getElementById('resultado');

function agregarAmigo() {
    var nombre = amigoInput.value;
    
    // Validación simple
    if(nombre === "" || nombre === null) {
        alert("Escribe algo!");
        return;
    }
    
    // Quitar espacios extras
    nombre = nombre.replace(/  +/g, ' ').trim();
    
    // Verificar repetidos a la antigua
    for(var i = 0; i < lista.length; i++) {
        if(lista[i].toLowerCase() === nombre.toLowerCase()) {
            alert("Ese nombre ya está!");
            amigoInput.value = '';
            return;
        }
    }
    
    lista.push(nombre);
    amigoInput.value = '';
    mostrarLista();
}

function mostrarLista() {
    var html = '';
    for(var i = 0; i < lista.length; i++) {
        html += '<div class="item-lista">' + lista[i] + '</div>'; // Línea modificada
    }
    listaAmigos.innerHTML = html;
}
function sortearAmigo() {
    if(lista.length === 0) {
        resultado.innerHTML = '<div class="error">Agrega amigos primero!</div>';
        return;
    }
    
    var randomIndex = Math.floor(Math.random() * lista.length);
    var elegido = lista[randomIndex];
    
    resultado.innerHTML = '<div class="ganador">🎉 El elegido es: <strong>' + elegido + '</strong></div>';
    
    // Limpiar la lista después del sorteo
    lista = [];
    mostrarLista();
}

// Evento para Enter
amigoInput.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
        agregarAmigo();
    }
});