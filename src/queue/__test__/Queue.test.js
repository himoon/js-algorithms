const Queue = require("../Queue");

describe("Queue", () => {
  it("should create a queue", () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.front()).toBeUndefined();
    expect(queue.rear()).toBeUndefined();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);

    queue.enqueue("A");
    queue.enqueue("B");
    queue.enqueue("C");
    expect(queue.front()).toBe("A");
    expect(queue.rear()).toBe("C");
    expect(queue.size()).toBe(3);
    expect(queue.isEmpty()).toBe(false);

    const dequeued = queue.dequeue();
    expect(dequeued).toBe("A");
    expect(queue.front()).toBe("B");
    expect(queue.rear()).toBe("C");
    expect(queue.size()).toBe(2);

    queue.dequeue();
    queue.dequeue();
    expect(queue.front()).toBeUndefined();
    expect(queue.rear()).toBeUndefined();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });
});
