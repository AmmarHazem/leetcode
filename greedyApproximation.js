const states = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
const stations = new Map();
stations.set("kone", ["id", "nv", "ut"]);
stations.set("ktwo", ["wa", "id", "mt"]);
stations.set("kthree", ["or", "nv", "ca"]);
stations.set("kfour", ["nv", "ut"]);
stations.set("kfive", ["ca", "az"]);

function greedyApproximation() {
  const addedStations = [];
  const coveredStates = new Map();
  for (const station of Array.from(stations.keys())) {
    const stationUncoveredStates = stations.get(station).filter((state) => !coveredStates.get(state));
    if (!stationUncoveredStates.every((state) => coveredStates.get(state))) {
      for (const state of stationUncoveredStates) {
        coveredStates.set(state, true);
      }
      addedStations.push(station);
    }
  }
  return addedStations;
}

console.log(greedyApproximation());
