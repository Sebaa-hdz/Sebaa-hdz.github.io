function addToCart(productName) {
    console.log(`Agregar al carrito: ${productName}`);
    // Agrega la lógica para agregar el producto al carrito
}

function readMore(url) {
    window.location.href = url;
}

document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value;
    console.log(`Buscar termos: ${searchTerm}`);
    // Agrega la lógica para buscar termos en la base de datos
});