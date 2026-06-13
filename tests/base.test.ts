import { vi, describe, it, expect } from 'vitest';

vi.mock('../src/lib/ui.ts', () => ({
  cuandoPasa: vi.fn(),
  enviarAlFrontend: vi.fn(),
  iniciar: vi.fn(),
}));

import { estaSeleccionado, agregarAsiento, quitarAsiento } from '../src/index.ts';

describe('Cine Teatro York', () => {
  describe('estaSeleccionado', () => {
    it('devuelve true si el asiento está en la lista', () => {
      expect(estaSeleccionado([10, 20, 30], 20)).toBe(true);
    });

    it('devuelve false si el asiento no está en la lista', () => {
      expect(estaSeleccionado([10, 20, 30], 5)).toBe(false);
    });

    it('devuelve false para lista vacía', () => {
      expect(estaSeleccionado([], 1)).toBe(false);
    });
  });

  describe('agregarAsiento', () => {
    it('devuelve un nuevo array con el número agregado al final', () => {
      expect(agregarAsiento([10, 20], 30)).toEqual([10, 20, 30]);
    });

    it('no modifica el array original', () => {
      const asientos: number[] = [10, 20];
      agregarAsiento(asientos, 30);
      expect(asientos).toEqual([10, 20]);
    });

    it('agrega a lista vacía', () => {
      expect(agregarAsiento([], 15)).toEqual([15]);
    });
  });

  describe('quitarAsiento', () => {
    it('devuelve un nuevo array sin el número', () => {
      expect(quitarAsiento([10, 20, 30], 20)).toEqual([10, 30]);
    });

    it('no modifica el array original', () => {
      const asientos: number[] = [10, 20, 30];
      quitarAsiento(asientos, 20);
      expect(asientos).toEqual([10, 20, 30]);
    });

    it('devuelve el mismo array si el número no estaba', () => {
      expect(quitarAsiento([10, 20, 30], 99)).toEqual([10, 20, 30]);
    });

    it('devuelve array vacío si era el único elemento', () => {
      expect(quitarAsiento([15], 15)).toEqual([]);
    });
  });

});
