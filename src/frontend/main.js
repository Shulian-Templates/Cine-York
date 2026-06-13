const botonesEntradas = document.querySelectorAll('.cantidad');

botonesEntradas.forEach((boton) => {
  boton.addEventListener('click', () => {
    botonesEntradas.forEach((b) => b.classList.remove('seleccionado'));
    boton.classList.add('seleccionado');
    emitirEvento('cambiarCantidad', { cantidad: boton.dataset.cantidad });
  });
});

document.getElementById('teatro').addEventListener('click', (evento) => {
  const rect = evento.target.closest('.asiento');
  if (rect === null) return;
  emitirEvento('seleccionarAsiento', { asiento: rect.dataset.asiento });
});

document.getElementById('boton-comprar').addEventListener('click', () => {
  emitirEvento('comprar', {});
});

window.addEventListener('precioTotal', (evento) => {
  document.getElementById('precio-total').textContent = `Total: ${evento.detail}p`;
});

window.addEventListener('wsConectado', () => {
  botonesEntradas[0].click();
}, { once: true });

window.addEventListener('asientosActualizados', (evento) => {
  const seleccionados = evento.detail;
  document.querySelectorAll('.asiento').forEach((rect) => {
    const num = Number(rect.dataset.asiento);
    let estaSeleccionado = false;
    for (let i = 0; i < seleccionados.length; i++) {
      if (seleccionados[i] === num) {
        estaSeleccionado = true;
        break;
      }
    }
    rect.classList.toggle('seleccionado', estaSeleccionado);
  });
});
