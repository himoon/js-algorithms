const LinkedList = require("../LinkedList");

describe("Linked List", () => {
  it("should create linked list", () => {
    const list = new LinkedList();
    expect(list).toBeTruthy();
    expect(list.size).toBe(0);
  });

  it("should append nodes", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.size).toBe(3);
    expect(list.toString()).toBe("1,2,3");
    expect(list.reverse().toString()).toBe("3,2,1");
  });

  it("should prepend nodes", () => {
    const list = new LinkedList();
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    expect(list.size).toBe(3);
    expect(list.toString()).toBe("3,2,1");
    expect(list.reverse().toString()).toBe("1,2,3");
  });

  it("should find nodes", () => {
    const list = new LinkedList();
    list.append(1);
    expect(list.find(1).value).toBe(1);
    expect(list.find(0)).toBeFalsy();
  });

  it("should insert nodes", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertBefore(0.5, 1); // before head node
    list.insertBefore(1.5, 2);
    list.insertAfter(2.5, 2);
    list.insertAfter(3.5, 3); // after tail node
    expect(list.toString()).toBe("0.5,1,1.5,2,2.5,3,3.5");
    expect(list.reverse().toString()).toBe("3.5,3,2.5,2,1.5,1,0.5");
  });

  it("should remove nodes", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.remove(1)).toBeTruthy();
    expect(list.remove(2)).toBeTruthy();
    expect(list.remove(3)).toBeTruthy();
    expect(list.remove(4)).toBeFalsy();
  });
});
