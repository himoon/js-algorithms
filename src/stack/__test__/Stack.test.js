const Stack = require("../Stack");

describe("Stack", () => {
  it("should create a stack", () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
    expect(stack.pop()).toBeUndefined();
    expect(stack.peek()).toBeUndefined();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);

    stack.push("A");
    stack.push("B");
    stack.push("C");
    expect(stack.peek()).toBe("C");
    expect(stack.size()).toBe(3);
    expect(stack.isEmpty()).toBe(false);

    const popped = stack.pop();
    expect(popped).toBe("C");
    expect(stack.peek()).toBe("B");
    expect(stack.size()).toBe(2);

    stack.pop();
    stack.pop();
    expect(stack.pop()).toBeUndefined();
    expect(stack.peek()).toBeUndefined();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
});
