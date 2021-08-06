const { Shamsi } = require("./index.js")

test('Shamsi convert date of 2021-08-04', () => {
    let date = Shamsi.convert('2021-08-04')
    expect(date.format('Y-m-d')).toBe('1400-05-13')
})

test('Shamsi date convert of 1400-05-13', () => {
    let date = new Shamsi(1400,5,13)
    let cdate = date.convert()
    expect(cdate.toString()).toBe('Tue Aug 03 2021 23:30:00 GMT+0300 (GMT+03:00)')
})
test('Shamsi date convert now', () => {
    let date = new Shamsi()
    let cdate = date.convert()
    expect(cdate.toString()).toBe((new Date).toString())
})
