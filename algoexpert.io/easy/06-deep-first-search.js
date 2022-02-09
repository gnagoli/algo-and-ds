#! /usr/bin/env node

class Graph {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addChild(name) {
    this.children.push(new Graph(name));
    return this;
  }

  // O(e+v) time | O(v) space
  deepFirstSearch(edges) {
    edges.push(this.name);
    for (let child of this.children) {
      child.deepFirstSearch(edges);
    }
    return edges;
  }
}

const graph = new Graph("A");
const graph2 = new Graph("FO");
graph.addChild("B").addChild("Y")
.addChild("J").addChild("O");

console.log(graph.deepFirstSearch([]));
