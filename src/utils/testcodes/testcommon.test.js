import { isOver100 } from "./testcommon"

describe("isOver100", () => {
  it("99", () => {
    const expectValue = false
    const result = isOver100(99)
    expect(result).toEqual(expectValue)
  })

  it("100", () => {
    const expectValue = false
    const result = isOver100(100)
    expect(result).toEqual(expectValue)
  })

  it("101", () => {
    const expectValue = true
    const result = isOver100(101)
    expect(result).toEqual(expectValue)
  })

  it("moji", () => {
    const expectValue = false
    const result = isOver100("moji")
    expect(result).toEqual(expectValue)
  })

})
