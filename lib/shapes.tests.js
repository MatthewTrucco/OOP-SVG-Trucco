const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
      const shape = new Triangle();
      shape.setColor("blue");