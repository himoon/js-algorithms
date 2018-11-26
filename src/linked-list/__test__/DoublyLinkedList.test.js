const DoublyLinkedList = require("../DoublyLinkedList");

describe("Doubly Linked List", () => {
  it("should create doubly linked list", () => {
    const list = new DoublyLinkedList();
    expect(list).toBeDefined();
    expect(list.size).toBe(0);
  });

  it("should append nodes", () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.size).toBe(3);
    expect(list.toString()).toBe("1,2,3");
    expect(list.reverse().toString()).toBe("3,2,1");
  });

  it("should prepend nodes", () => {
    const list = new DoublyLinkedList();
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    expect(list.size).toBe(3);
    expect(list.toString()).toBe("3,2,1");
    expect(list.reverse().toString()).toBe("1,2,3");
  });

  it("should reverse nodes", () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.toString()).toBe("1,2,3");
    expect(list.reverse().toString()).toBe("3,2,1");
  });

  it("should find nodes", () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    expect(list.find(1).value).toBe(1);
    expect(list.find(2).value).toBe(2);
    expect(list.find(0)).toBeFalsy();
  });

  it("should insert nodes", () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertBefore(0.5, 1); // Before head node
    list.insertBefore(1.5, 2);
    list.insertAfter(2.5, 2);
    list.insertAfter(3.5, 3); // After tail node
    expect(list.size).toBe(7);
    expect(list.toString()).toBe("0.5,1,1.5,2,2.5,3,3.5");
    expect(list.reverse().toString()).toBe("3.5,3,2.5,2,1.5,1,0.5");
  });

  it("should remove nodes", () => {
    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    expect(list.size).toBe(5);
    expect(list.toString()).toBe("1,2,3,4,5");
    expect(list.remove(0)).toBeFalsy();

    list.remove(1); // head node
    expect(list.size).toBe(4);
    expect(list.toString()).toBe("2,3,4,5");
    expect(list.head.value).toBe(2);
    expect(list.head.prev).toBeFalsy();

    list.remove(5); // tail node
    expect(list.size).toBe(3);
    expect(list.toString()).toBe("2,3,4");
    expect(list.tail.value).toBe(4);
    expect(list.tail.next).toBeFalsy();

    list.remove(3);
    expect(list.size).toBe(2);
    expect(list.toString()).toBe("2,4");
    expect(list.reverse().toString()).toBe("4,2");
  });
});
