export default function graphPath (graph, start, target, visited = new Set()) {
  if (!graph) throw new Error('invalid graph');
  if (!graph[start]) throw new Error('invalid start node');

  if (start === target) return true;

  visited.add(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      if (graphPath(graph, neighbor, target, visited)) return true;
    }
  }
  return false;
}

/*
Approach:
- each node has an array of nodes that it forms an edge with
- recursive approach
- store each visited node in a set

Efficiency:
O(E) time, E = edges
O(V) space, V = vertices

*/