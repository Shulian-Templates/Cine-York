import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';
import { estaSeleccionado, agregarAsiento, quitarAsiento } from './index.ts';

let asientosSeleccionados: number[] = [];
let cantidadMaxima: number = 0;

// Bonus 1
export function clickearAsiento(
  asientos: number[],
  asiento: number,
  cantidadMaxima: number,
): number[] {
  let nuevosAsientos: number[] = asientos; // COMPLETAR
  return nuevosAsientos;
}

// Bonus 2
export function calcularPrecio(asientos: number[]): number {
  let total: number = 0; // COMPLETAR
  return total;
}

cuandoPasa('cambiarCantidad', ({ cantidad }: Record<string, string>) => {
  cantidadMaxima = Number(cantidad);
  asientosSeleccionados = [];
  enviarAlFrontend('asientosActualizados', asientosSeleccionados);
});

cuandoPasa('seleccionarAsiento', ({ asiento }: Record<string, string>) => {
  let num: number = Number(asiento);
  asientosSeleccionados = clickearAsiento(asientosSeleccionados, num, cantidadMaxima);
  enviarAlFrontend('asientosActualizados', asientosSeleccionados);
});

cuandoPasa('comprar', () => {
  let total: number = calcularPrecio(asientosSeleccionados);
  enviarAlFrontend('precioTotal', total);
});

iniciar();
