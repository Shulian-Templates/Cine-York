export function estaSeleccionado(asientos: number[], num: number): boolean {
  let esta: boolean = false; // COMPLETAR
  return esta;
}

export function agregarAsiento(asientos: number[], num: number): number[] {
  let nuevos: number[] = []; // COMPLETAR
  return nuevos;
}

export function quitarAsiento(asientos: number[], num: number): number[] {
  let nuevos: number[] = []; // COMPLETAR
  return nuevos;
}

// ---- Zona de pruebas ----
// Probá tus funciones acá
let asientosPrueba: number[] = [10, 20]; // COMPLETAR

let estaEl15: boolean = estaSeleccionado(asientosPrueba, 15);
console.log(estaEl15);

let conAsiento: number[] = agregarAsiento(asientosPrueba, 15);
console.log(conAsiento);

let sinAsiento: number[] = quitarAsiento(asientosPrueba, 10);
console.log(sinAsiento);
// -------------------------
