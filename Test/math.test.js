const mathLib = require("../src/mathLib")

test("add 20 + 30 work", () => {
    expect(mathLib.add(20, 30)).toBe(50)
})

test("add 2.4 + 30 work", () => {
    expect(mathLib.add(2.4, 30)).toBe(32.4)
})

test("sub 30 - 20 work", () => {
    expect(mathLib.sub(30, 20)).toBe(10)
})

test("mul 20 + 2 work", () => {
    expect(mathLib.mul(20, 2)).toBe(40)
})

test("pow 2**4 work", () => {
    expect(mathLib.pow(2, 4)).toBe(16)
})

test("div 30/2 work", () => {
    expect(mathLib.div(30, 2)).toBe(15)
})

test("mean [2, 3, 1, 3, 1] work", () => {
    expect(mathLib.mean([2, 3, 1, 3, 1])).toBe(2)
})