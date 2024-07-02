describe('Un suite de test dite "test suite" est juste une fonction', () => {

  let a: boolean;

  it('Il en est de même d un test dit "spec"', () => {
    a = true;

    expect(a).toBeTruthy();
    expect(a).toBe(true);
    expect(a).not.toBe(false);
  });

  it('Une test suite peut contenir plusieurs tests "spec"', () => {
    expect(null).toBeNull();
  });

  // Méthodes exécutées respectivement avant et après chaque test : "spec"
  // N exécutions
  // (Mode généralement à privilegier pour éviter les problématiques de partage de contexte)
  beforeEach(() => {
  });
  afterEach(() => {
  });

  // Méthodes exécutées respectivement avant et après l'exécution de la "test suite"
  // Une unique exécution
  beforeAll(() => {
  });
  afterAll(() => {
  });
});

