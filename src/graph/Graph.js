const Dictionary = require("../dictionary/Dictionary");
const Queue = require("../queue/Queue");

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v); // If directed graph, remove this line.
  }

  bfs(vertex, callback) {
    const color = {};
    for (const vertex of this.vertices) color[vertex] = "white";
    const queue = new Queue();
    queue.enqueue(vertex);

    while (!queue.isEmpty()) {
      const curr = queue.dequeue();
      const neighbors = this.adjList.get(curr);
      color[curr] = "grey";
      for (var neighbor of neighbors) {
        if (color[neighbor] === "white") {
          color[neighbor] = "grey"; // mark it advance
          queue.enqueue(neighbor);
        }
      }
      color[curr] = "black";
      if (callback) callback(curr);
    }
  }

  BFS(vertex, callback) {
    const color = {};
    for (const vertex of this.vertices) color[vertex] = "white";
    const queue = new Queue();
    const d = {};
    const pred = {};
    queue.enqueue(vertex);

    for (const vertex of this.vertices) {
      d[vertex] = 0;
      pred[vertex] = null;
    }

    while (!queue.isEmpty()) {
      const curr = queue.dequeue();
      const neighbors = this.adjList.get(curr);
      color[curr] = "grey";
      for (var neighbor of neighbors) {
        if (color[neighbor] === "white") {
          color[neighbor] = "grey"; // mark it advance
          d[neighbor] = d[curr] + 1;
          pred[neighbor] = curr;
          queue.enqueue(neighbor);
        }
      }
      color[curr] = "black";
      if (callback) callback(curr);
    }
    return { distances: d, predecessors: pred };
  }

  toString() {
    let res = "";
    for (const vertex of this.vertices) {
      res += vertex + " -> ";
      const neighbors = this.adjList.get(vertex);
      for (const neighbor of neighbors) {
        res += neighbor + " ";
      }
      res += "\n";
    }
    return res;
  }
}

// test
const graph = new Graph();
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (const vertex of myVertices) graph.addVertex(vertex);
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
console.log(graph.toString());

function printNode(value) {
  console.log("Visited vertex: " + value);
}
graph.bfs(myVertices[0], printNode);
var shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA);
