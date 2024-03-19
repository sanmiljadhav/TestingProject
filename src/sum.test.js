import sum from "./common/sum"

describe("add method", () => {

    // 3. A unit test
    it("should return 30", () => {
      // 4. An assertion
      expect(sum(10, 20)).toBe(30)
    })
  })


