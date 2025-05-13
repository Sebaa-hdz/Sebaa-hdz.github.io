// Ejemplo de productos
const productos = [
    { id: 1, nombre: 'Termo F1', precio: 350, imagen: 'img/termo-f1.jpg', categoria: 'termos' },
    { id: 2, nombre: 'Playera F1', precio: 250, imagen: 'img/playera-f1.jpg', categoria: 'playeras' },
    { id: 3, nombre: 'Espinillera F1', precio: 150, imagen: 'img/espinillera-f1.jpg', categoria: 'espinilleras' },
    // Agrega más productos según sea necesario
];

// Carrito de compras
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar productos al carrito
function agregarCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    const productoEnCarrito = carrito.find(p => p.id === productoId);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1; // Incrementar cantidad si ya está en el carrito
    } else {
        carrito.push({ ...producto, cantidad: 1 }); // Agregar nuevo producto al carrito
    }

    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar carrito en localStorage
    actualizarCarrito();
    alert(`${producto.nombre} agregado al carrito!`);
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const carritoIcon = document.getElementById('carrito-icono');
    carritoIcon.textContent = carrito.reduce((total, p) => total + p.cantidad, 0); // Total de productos en el carrito
}

// Función para mostrar más productos
function verMas(categoria) {
    window.location.href = `${categoria}.html`; // Redirigir a la página correspondiente
}

// Función para buscar productos
function realizarBusqueda() {
    const query = document.getElementById('buscar').value.toLowerCase();
    const resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(query));
    
    if (resultados.length) {
        // Aquí puedes mostrar los resultados en la página
        console.log('Resultados de búsqueda:', resultados);
        // Implementa la lógica para mostrar los resultados en la UI
    } else {
        alert("No se encontraron productos.");
    }
}

// Función para alternar la visualización del chat
function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = chatbox.style.display === 'none' || chatbox.style.display === '' ? 'block' : 'none';
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito(); // Actualiza el carrito al cargar la página
});
