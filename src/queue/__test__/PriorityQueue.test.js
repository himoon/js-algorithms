const PriorityQueue = require("../PriorityQueue");

describe("Priority Queue", () => {
  it("should create a queue", () => {
    const queue = new PriorityQueue();
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.front()).toBeUndefined();
    expect(queue.rear()).toBeUndefined();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue("A", 3);
    queue.enqueue("B", 2);
    queue.enqueue("C", 1);
    expect(queue.front()).toBe("C");
    expect(queue.rear()).toBe("A");
    expect(queue.size()).toBe(3);
    expect(queue.isEmpty()).toBe(false);

    const dequeued = queue.dequeue();
    expect(dequeued).toBe("C");
    expect(queue.front()).toBe("B");
    expect(queue.rear()).toBe("A");
    expect(queue.size()).toBe(2);

    queue.dequeue();
    queue.dequeue();
    expect(queue.front()).toBeUndefined();
    expect(queue.rear()).toBeUndefined();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  it("should have priority over old values", () => {
    const queue = new PriorityQueue();
    queue.enqueue("A", 3);
    queue.enqueue("B", 2);
    queue.enqueue("C", 1);
    queue.enqueue("D", 2);
    const str = queue.toArray().toString();
    expect(str).toBe("C,B,D,A");
  });
});
