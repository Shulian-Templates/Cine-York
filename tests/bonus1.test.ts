import { vi, describe, it, expect } from 'vitest';

vi.mock('../src/lib/ui.ts', () => ({
  cuandoPasa: vi.fn(),
  enviarAlFrontend: vi.fn(),
  iniciar: vi.fn(),
}));

import { clickearAsiento } from '../src/bonus.ts';

describe('Cine Teatro York Bonus', () => {
  describe('clickearAsiento', () => {
    it('agrega el asiento si no estaba seleccionado y hay lugar', () => {
      expect(clickearAsiento([], 15, 2)).toEqual([15]);
    });

    it('quita el asiento si ya estaba seleccionado', () => {
      expect(clickearAsiento([10, 15], 15, 2)).toEqual([10]);
    });

    it('no agrega si la capacidad está llena', () => {
      expect(clickearAsiento([10, 20], 30, 2)).toEqual([10, 20]);
    });

    it('no modifica el array original', () => {
      const asientos: number[] = [10, 20];
      clickearAsiento(asientos, 30, 5);
      expect(asientos).toEqual([10, 20]);
    });
  });
});
