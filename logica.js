let productos = [
    { index: 1, nombre: 'Laptop', precio: 1200 },
    { index: 2, nombre: 'Sillas', precio: 1500 },
    { index: 3, nombre: 'Mesa', precio: 800 },
    { index: 4, nombre: 'Monitor', precio: 900 }
];

let carritoCompras = [];
const IGV_RATE = 0.18;  
const DESCUENTO_LIMITE = 3000;  
const DESCUENTO_RATE = 0.10;  


function mostrarProductos() {
    const listaProductos = document.getElementById('productos-lista');
    listaProductos.innerHTML = '<h2>Productos disponibles:</h2>';

    productos.forEach(producto => {
        listaProductos.innerHTML += `<p>${producto.index}. ${producto.nombre}: S/ ${producto.precio.toFixed(2)}</p>`;
    });
}


function agregarAlCarrito() {
    const productoIndex = document.getElementById('producto-index').value;
    const productoSeleccionado = productos.find(prod => prod.index == productoIndex);

    if (productoSeleccionado) {
        carritoCompras.push(productoSeleccionado);
        mostrarCarrito();
        calcularTotales();
    } else {
        alert('Su inidce no se encuentra');
    }
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('carrito-lista');
    listaCarrito.innerHTML = '';

    carritoCompras.forEach(producto => {
        listaCarrito.innerHTML += `<p>${producto.nombre}: S/ ${producto.precio.toFixed(2)}</p>`;
    });
}

function calcularTotales() {
    let subtotal1 = carritoCompras.reduce((acc, producto) => acc + producto.precio, 0);

    let descuento = subtotal1 > DESCUENTO_LIMITE ? subtotal1 * DESCUENTO_RATE : 0;
    let subtotal2 = subtotal1 - descuento;
    let igv = subtotal2 * IGV_RATE;
    let total = subtotal2 + igv;

    document.getElementById("subtotal1").textContent = `Subtotal 1 (suma de productos): S/ ${subtotal1.toFixed(2)}`;
    document.getElementById("descuento").textContent = `Descuento: S/ ${descuento.toFixed(2)}`;
    document.getElementById("subtotal2").textContent = `Subtotal 2 (Subtotal 1 - Descuento): S/ ${subtotal2.toFixed(2)}`;
    document.getElementById("igv").textContent = `IGV (18%): S/ ${igv.toFixed(2)}`;
    document.getElementById("total").textContent = `Total a Pagar (Subtotal 2 + IGV): S/ ${total.toFixed(2)}`;
}

mostrarProductos();
