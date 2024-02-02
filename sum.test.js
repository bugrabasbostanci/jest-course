const sum = require("./sum");
const myFunction = require("./sum");

// // test("description", testFunction)
// test("adds 1 + 2 to equal 3 ", () => {
//   expect(sum(1, 2)).toBe(3);
// });

/////////////////////////////////////

// toBe()
// test("two plus two is four", () => {
//   expect(2 + 2).toBe(4);
// });

// toEqual()
// test("object assignment", () => {
//   const data = { one: 1 };
//   data["two"] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

// toBeFalsy()  |   null, 0
// test("null is falsy", () => {
//   const n = 0;
//   expect(n).toBeFalsy();
// });

// toBeTruthy   |   1,
// test("null is falsy", () => {
//   const n = 1;
//   expect(n).toBeTruthy();
// });

/////////////////////////////////////
// toThrow()
test("throws on invalid input", () => {
  expect(() => {
    // myFunction("qwetsdst"); // passed, throwed error
    myFunction(3); // failed, not throwed error
  }).toThrow();
});
