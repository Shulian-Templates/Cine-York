import { vi, describe, it, expect } from 'vitest';

vi.mock('../src/lib/ui.ts', () => ({
  cuandoPasa: vi.fn(),
  enviarAlFrontend: vi.fn(),
  iniciar: vi.fn(),
}));

import { calcularPrecio } from '../src/bonus.ts';

describe('Cine Teatro York Bonus 2', () => {
  describe('calcularPrecio', () => {
    it('devuelve 0 para una selección vacía', () => {
      expect(calcularPrecio([])).toBe(0);
    });

    it('asientos 1–20 valen $300 cada uno', () => {
      expect(calcularPrecio([1, 20])).toBe(600);
    });

    it('asientos 21–50 valen $200 cada uno', () => {
      expect(calcularPrecio([21, 50])).toBe(400);
    });

    it('asientos 51–80 valen $100 cada uno', () => {
      expect(calcularPrecio([51, 80])).toBe(200);
    });

    it('calcula correctamente una selección mixta', () => {
      expect(calcularPrecio([10, 35, 70])).toBe(600);
    });
  });
});
