const utils = require("../index.js")

describe("MyJSUtilities", function() {

  describe(">String Utils", function() {
    it("should be able to lower case a string",function() {
      expect(utils.toLowerCase).toBeDefined();
      expect(utils.toLowerCase("HELLO WORLD")).toEqual("hello world");

    });

    it("should be able to upper case a string",function() {
      expect(utils.toUpperCase).toBeDefined();
      expect(utils.toUpperCase("hello world")).toEqual("HELLO WORLD");
    });

    it("should be able to confirm if a string contains a substring",function() {
      expect(utils.contains).toBeDefined();
      expect(utils.contains("hello world","hello",0)).toBeTruthy();

    });

    it("should be able repeat a string multiple times",function() {
      expect(utils.repeat).toBeDefined();
      expect(utils.repeat("hello", 3)).toEqual("hellohellohello");
    });     

    it("should explicitly fail", function () {
      fail('Forced to fail'); 
    });

  });

});