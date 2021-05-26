describe(
  'Prueba',
  () => {
    describe(
      'Suma',
      () => {
        it('Suma 2 numeros', () => {
          const suma = (a, b) => {
            return a + b
          }

          expect(suma(1,2)).toEqual(3)
        })
      }
    )
  }
)