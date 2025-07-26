const numeroWhatsApp = "5491157587325";
const catalogo = document.getElementById("catalogo");

productos.forEach(prod => {
  const div = document.createElement("div");
  div.className = "producto";
  
  div.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}" />
    <h2>${prod.nombre}</h2>
    <p class="precio">$${prod.precio.toLocaleString("es-AR")}</p>
    <a class="btn-whatsapp" target="_blank" href="${generarLinkWhatsApp(prod)}">Consultar</a>
  `;
  
  catalogo.appendChild(div);
});

function generarLinkWhatsApp(producto) {
  const mensaje = `Hola! Quiero consultar por:\n\n${producto.nombre}\nPrecio: $${producto.precio.toLocaleString("es-AR")}\n\nImagen: ${window.location.origin}/${producto.imagen}`;
  return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
}
