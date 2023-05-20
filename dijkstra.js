const graph = new Map();
graph.set("A", [
  { name: "B", weight: 6 },
  { name: "D", weight: 1 },
]);
graph.set("B", [
  { name: "A", weight: 6 },
  { name: "D", weight: 2 },
  { name: "E", weight: 2 },
  { name: "C", weight: 5 },
]);
graph.set("E", [
  { name: "C", weight: 5 },
  { name: "B", weight: 2 },
  { name: "D", weight: 1 },
]);
graph.set("D", [
  { name: "A", weight: 1 },
  { name: "B", weight: 2 },
  { name: "E", weight: 1 },
]);
graph.set("C", [
  { name: "B", weight: 5 },
  { name: "E", weight: 5 },
]);

function dijkstra(start, end) {
  const distanceTable = new Map();
  const visitedVertices = new Map();
  const unvisitedVertices = new Map();
  for (const vertix of Array.from(graph.keys())) {
    unvisitedVertices.set(vertix, true);
    if (vertix === start) {
      distanceTable.set(vertix, { name: vertix, shortestDistanceFromStart: 0, previousVertix: null });
    } else {
      distanceTable.set(vertix, { name: vertix, shortestDistanceFromStart: Infinity, previousVertix: null });
    }
  }
  let currentVertix = distanceTable.get(start);
  while (unvisitedVertices.size > 0) {
    const unvisitedNeighbors = graph.get(currentVertix.name).filter((vertix) => {
      return unvisitedVertices.get(vertix.name);
    });
    for (const vertix of unvisitedNeighbors) {
      const distanceFromStart = vertix.weight + currentVertix.shortestDistanceFromStart;
      const vertixFromDistanceTable = distanceTable.get(vertix.name);
      if (distanceFromStart < vertixFromDistanceTable.shortestDistanceFromStart) {
        vertixFromDistanceTable.shortestDistanceFromStart = distanceFromStart;
        vertixFromDistanceTable.previousVertix = currentVertix.name;
      }
    }
    let nextVertixToVisit;
    const verticesList = Array.from(distanceTable.values()).filter((vertix) => {
      return unvisitedVertices.get(vertix.name);
    });
    for (const vertix of verticesList) {
      if (vertix.name === currentVertix.name) continue;
      if (!nextVertixToVisit) {
        nextVertixToVisit = vertix;
      } else if (vertix.shortestDistanceFromStart < nextVertixToVisit.shortestDistanceFromStart) {
        nextVertixToVisit = vertix;
      }
    }
    unvisitedVertices.delete(currentVertix.name);
    visitedVertices.set(currentVertix.name, true);
    currentVertix = nextVertixToVisit;
  }
  const path = [];
  let endVertixFromDistanceTable = distanceTable.get(end);
  while (endVertixFromDistanceTable.previousVertix) {
    path.push(endVertixFromDistanceTable.name);
    endVertixFromDistanceTable = distanceTable.get(endVertixFromDistanceTable.previousVertix);
  }
  path.push(start);
  console.log("Path:", path.reverse());
  return distanceTable;
}

dijkstra("A", "C");
