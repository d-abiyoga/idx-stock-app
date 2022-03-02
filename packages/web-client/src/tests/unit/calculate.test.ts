import { calculate } from '../../utils/calculate'
describe('calculate.newAveragePrice', () => {
  it("should calculate average correctly", () => {
    const currAvgPrice = 100;
    const currShareQuantity = 1;
    const addBuyPrice = 200;
    const addBuyQuantity = 1;
    expect(calculate.newAvgPrice(currAvgPrice, currShareQuantity,addBuyPrice,addBuyQuantity)).toBe(150)
  })

  it("should calculate average correctly", () => {
    const currAvgPrice = 100;
    const currShareQuantity = 1;
    const addBuyPrice = 100;
    const addBuyQuantity = 1;
    expect(calculate.newAvgPrice(currAvgPrice, currShareQuantity,addBuyPrice,addBuyQuantity)).toBe(100)
  })
})

describe('calculate.equity', () => {
  it("should calculate equity correctly", () => {
    const AvgPrice = 100;
    const ShareQuantity = 1;
    expect(calculate.equity(AvgPrice, ShareQuantity)).toBe(10000)
  })

  it("should calculate equity correctly when input is 0", () => {
    const AvgPrice = 0;
    const ShareQuantity = 0;
    expect(calculate.equity(AvgPrice, ShareQuantity)).toBe(0)
  })
})

describe('calculate.currPotGL', () => {
  it("should calculate correctly (addBuyPrice > currAvgPrice)", () => {
    const marketPrice = 100;
    const currAvgPrice = 50;
    expect(calculate.currPotGL(marketPrice, currAvgPrice)).toBe(100)
  })

  it("should calculate correctly (addBuyPrice < currAvgPrice)", () => {
    const marketPrice = 75;
    const currAvgPrice = 100;
    expect(calculate.currPotGL(marketPrice, currAvgPrice)).toBe(-25)
  })

  it("should calculate correctly (addBuyPrice = currAvgPrice)", () => {
    const marketPrice = 100;
    const currAvgPrice = 100;
    expect(calculate.currPotGL(marketPrice, currAvgPrice)).toBe(0)
  })
})

describe('calculate.targetPotGL', () => {
  it("should calculate correctly (targetPrice > newAvgPrice)", () => {
    const targetPrice = 200;
    const newAvgPrice = 100;
    expect(calculate.targetPotGL(targetPrice, newAvgPrice)).toBe(100)
  })

  it("should calculate correctly (targetPrice < newAvgPrice)", () => {
    const targetPrice = 100;
    const newAvgPrice = 200;
    expect(calculate.targetPotGL(targetPrice, newAvgPrice)).toBe(-50)
  })

  it("should calculate correctly (targetPrice = newAvgPrice)", () => {
    const targetPrice = 100;
    const newAvgPrice = 100;
    expect(calculate.targetPotGL(targetPrice, newAvgPrice)).toBe(0)
  })
})

describe('calculate.newPotGL', () => {
  it("should calculate correctly (marketPrice > newAvgPrice)", () => {
    const marketPrice = 200;
    const newAvgPrice = 100;
    expect(calculate.newPotGL(marketPrice, newAvgPrice)).toBe(100)
  })

  it("should calculate correctly (marketPrice < newAvgPrice)", () => {
    const marketPrice = 100;
    const newAvgPrice = 200;
    expect(calculate.newPotGL(marketPrice, newAvgPrice)).toBe(-50)
  })

  it("should calculate correctly (addBuyPrice = newAvgPrice)", () => {
    const marketPrice = 100;
    const newAvgPrice = 100;
    expect(calculate.newPotGL(marketPrice, newAvgPrice)).toBe(0)
  })
})
