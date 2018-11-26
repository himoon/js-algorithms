const Dictionary = require("../Dictionary");

describe("Dictionary", () => {
  it("should create a dictionary", () => {
    // new dictionary
    const dict = new Dictionary();
    expect(dict).toBeDefined();
    expect(dict.size()).toBe(0);

    // set method
    dict.set("one", 1);
    dict.set("two", 2);
    dict.set("three", 3);
    expect(dict.has("one")).toBeTruthy();
    expect(dict.has("two")).toBeTruthy();
    expect(dict.has("three")).toBeTruthy();
    expect(dict.has("four")).toBeFalsy();

    // size method
    expect(dict.size()).toBe(3);

    // keys method
    const keys = dict.keys();
    expect(keys.indexOf("one")).toBeGreaterThanOrEqual(0);
    expect(keys.indexOf("two")).toBeGreaterThanOrEqual(0);
    expect(keys.indexOf("three")).toBeGreaterThanOrEqual(0);
    expect(keys.indexOf("four")).toBe(-1);

    // values method
    const values = dict.values();
    expect(values.indexOf(1)).toBeGreaterThanOrEqual(0);
    expect(values.indexOf(2)).toBeGreaterThanOrEqual(0);
    expect(values.indexOf(3)).toBeGreaterThanOrEqual(0);
    expect(values.indexOf(4)).toBe(-1);

    // get method
    expect(dict.get("three")).toBe(3);
    expect(dict.get("four")).toBeUndefined();

    // delete method
    expect(dict.delete("two")).toBeTruthy();
    expect(dict.delete("four")).toBeFalsy();
    expect(dict.size()).toBe(2);
    expect(dict.has("one")).toBeTruthy();
    expect(dict.has("two")).toBeFalsy();
    expect(dict.has("three")).toBeTruthy();

    // clear method
    dict.clear();
    expect(dict.size()).toBe(0);
    expect(dict.has("one")).toBeFalsy();
  });
});
