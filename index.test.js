const { Shamsi } = require("./index.js")

test('Shamsi convert date of 2021-08-04', () => {
    let date = Shamsi.convert('2021-08-04')
    expect(date.format('Y-m-d')).toBe('1400-05-13')
})

test('Shamsi date convert of 1400-07-13', () => {
    let date = new Shamsi(1400,7,13)
    let cdate = date.convert()
    expect(cdate.toString()).toBe(new Date('Oct 05 2021').toString())
})
test('Shamsi date convert now', () => {
    let date = new Shamsi()
    let cdate = date.convert()
    expect(cdate.toString()).toBe((new Date).toString())
})

test('Shamsi date of 1400-05-13 toString', () => {
    let date = new Shamsi(1300,5,13)
    expect(date.toString()).toBe('ش 13 مرداد 1300 00:00:00 (In Shamsi format)')
})
test('Shamsi date of "1400-05-13"', () => {
    let date = new Shamsi('1300-5-13')
    expect(date.toString()).toBe('ش 13 مرداد 1300 00:00:00 (In Shamsi format)')
})