const graph = new Map();
graph.set("me", ["bob"]);
graph.set("bob", ["anuj", "peggy"]);
graph.set("alice", ["peggy", "me", "jonny"]);
graph.set("claire", ["thom", "jonny"]);
graph.set("anuj", []);
graph.set("peggy", ["alice"]);
graph.set("thom", []);
graph.set("jonny", []);
const start = "me";
const target = "jonny";

function bfs() {
  const searchQ = [
    ...graph.get(start).map((name) => {
      return { name, distance: 1, route: [start, name] };
    }),
  ];
  const gotAddedToSearchQ = new Map();
  while (searchQ.length) {
    const firstNodeInSearchQ = searchQ.shift();
    // console.log(firstNodeInSearchQ);
    if (firstNodeInSearchQ.name === target) {
      return firstNodeInSearchQ;
    } else if (!gotAddedToSearchQ.get(firstNodeInSearchQ.name)) {
      gotAddedToSearchQ.set(firstNodeInSearchQ.name, true);
      searchQ.push(
        ...graph.get(firstNodeInSearchQ.name).map((name) => {
          return { name, distance: firstNodeInSearchQ.distance + 1, route: [...firstNodeInSearchQ.route, name] };
        })
      );
    }
  }
  return "Not found";
}

// function bfs() {
//   const que = [...(graph.get(start) ?? [])];
//   const searched = new Map();
//   while (que.length) {
//     const dequed = que.shift();
//     if (searched.get(dequed)) continue;
//     searched.set(dequed, true);
//     if (dequed === target) {
//       return dequed;
//     } else {
//       que.push(...(graph.get(dequed) ?? []));
//     }
//   }
// }

const res = bfs();
if (res === "Not found") {
  console.log(res);
} else {
  console.log(`Distance: ${res.distance}`);
  console.log("Route:", res.route);
}
