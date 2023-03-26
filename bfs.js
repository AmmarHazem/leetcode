const graph = new Map();
graph.set("me", ["alice", "bob", "claire"]);
graph.set("bob", ["anuj", "peggy"]);
graph.set("alice", ["peggy", "me"]);
graph.set("claire", ["thom", "jonny"]);
graph.set("anuj", []);
graph.set("peggy", []);
graph.set("thom", []);
graph.set("jonny", []);
const start = "me";
const target = "thom";

function bfs() {
  const que = [...(graph.get(start) ?? [])];
  const searched = new Map();
  while (que.length) {
    const dequed = que.shift();
    if (searched.get(dequed)) continue;
    searched.set(dequed, true);
    if (dequed === target) {
      return dequed;
    } else {
      que.push(...(graph.get(dequed) ?? []));
    }
  }
}

console.log(bfs());
