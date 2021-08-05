const { Shamsi } = require("./index.js")

test('Shamsi date of 2021-08-04', () => {
    let date = new Shamsi('2021-08-04')
    expect(date.format('Y-m-d')).toBe('1400-05-13')
})
