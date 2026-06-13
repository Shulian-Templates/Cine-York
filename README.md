# Cine Teatro York

Reservá asientos en el Cine Teatro York eligiendo la cantidad de entradas y seleccionando lugares en el mapa de la sala.

## Consigna base

Hacer esta consigna te da la aprobación y 7 puntos.

Implementá las siguientes funciones en `src/index.ts`:

**`estaSeleccionado(asientos, num)`** — Recibe un array con los números de asiento seleccionados y un número de asiento. Devuelve `true` si ese asiento ya está seleccionado, `false` si no.

**`agregarAsiento(asientos, num)`** — Recibe el array actual y un número de asiento. Devuelve un **nuevo array** con ese número agregado al final. No debe modificar el array original.

**`quitarAsiento(asientos, num)`** — Recibe el array actual y un número de asiento. Devuelve un **nuevo array** sin ese número. No debe modificar el array original.

Ejemplo:

| Llamada | Resultado |
|---------|-----------|
| `estaSeleccionado([10, 20], 10)` | `true` |
| `estaSeleccionado([10, 20], 99)` | `false` |
| `agregarAsiento([10, 20], 30)` | `[10, 20, 30]` |
| `quitarAsiento([10, 20, 30], 20)` | `[10, 30]` |

**Tip:** la "Zona de pruebas" al final de `src/index.ts` imprime los resultados en la terminal cuando corrés `npm run start`. Modificá los valores para probar tus funciones.

## BONUS

¿Querés el 10? Cada uno de estos bonus vale 1,5 puntos

### Bonus 1: Selección de asientos

Implementá la siguiente función en `src/bonus.ts`:

**`clickearAsiento(asientos, asiento, cantidadMaxima)`** — Recibe el array actual, el número de asiento clickeado y la cantidad máxima de asientos. Si el asiento ya está seleccionado lo quita; si no está y hay lugar lo agrega; si no hay lugar lo deja igual. Devuelve el nuevo array de asientos seleccionados. Usá las funciones anteriores para implementarla.

Con esta función, la interfaz gráfica queda completamente conectada: los botones de cantidad fijan el límite, y al hacer click en un asiento del mapa se selecciona o deselecciona.

Ejemplo:

| Llamada | Resultado |
|---------|-----------|
| `clickearAsiento([], 15, 2)` | `[15]` |
| `clickearAsiento([15], 15, 2)` | `[]` |
| `clickearAsiento([10, 20], 30, 2)` | `[10, 20]` (capacidad llena) |

### Bonus 2: Precio de las entradas

Implementá la siguiente función en `src/bonus.ts`:

**`calcularPrecio(asientos)`** — Recibe el array de asientos seleccionados y devuelve el precio total a pagar. Los precios por zona son:

| Asientos | Precio por entrada |
|----------|--------------------|
| 1 – 20   | 300p               |
| 21 – 50  | 200p               |
| 51 – 80  | 100p               |

Con esta función, el botón "Comprar" muestra el total en pantalla.

Ejemplo:

| Llamada | Resultado |
|---------|-----------|
| `calcularPrecio([10, 35, 70])` | `600` |
| `calcularPrecio([])` | `0` |

## ¿Qué hay que editar?

- `src/index.ts` — implementar `estaSeleccionado`, `agregarAsiento` y `quitarAsiento`
- `src/bonus.ts` — implementar `clickearAsiento` y `calcularPrecio`

Los archivos en `src/lib/` están completos, no hace falta tocarlos.

## Primeros pasos

```bash
npm install
```

## Cómo correr el programa

```bash
npm run start        # consigna base (consola)
npm run start-bonus  # bonus (interfaz gráfica)
```

## Tests

```bash
npm run test-base    # consigna base
npm run test-bonus1  # bonus 1
npm run test-bonus2  # bonus 2
npm test             # todos
```
