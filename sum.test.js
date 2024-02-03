const sum = require("./sum");
const myFunction = require("./sum");
const fetchData = require("./sum");
const fetchPromise = require("./sum");

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
// test("throws on invalid input", () => {
//   expect(() => {
//     // myFunction("qwetsdst"); // passed, throwed error
//     myFunction(3); // failed, not throwed error
//   }).toThrow();
// });

/////////////////////////////////////
// Testing Asynchronous Code

// 1) Testing with Callback
// test("the data is peanut butter", (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe("peanut butter");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback);
// });

// 2) Testing with Promise
// test("the data is peanut butter", () => {
//   return expect(fetchPromise()).resolves.toBe("peanut butter");
// });

// test("the fetch fails with an error", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

// 3) Testing with async/await
// test("the data is peanut butter", async () => {
//   const data = await fetchPromise();
//   expect(data).toBe("peanut butter");
// });

/////////////////////////////////////

// Mock Functions and Spies

// 1) Mock Functions
// test("mock implementation of basic function", () => {
//   const mock = jest.fn((x) => 42 + x);
//   expect(mock(1)).toBe(43);
//   expect(mock).toHaveBeenCalledWith(1);
// });

// 2) Spies
// test("spying on a method of an object", () => {
//   const video = {
//     play() {
//       return true;
//     },
//   };

//   const spy = jest.spyOn(video, "play");
//   video.play();

//   expect(spy).toHaveBeenCalled();
//   spy.mockRestore();
// });
