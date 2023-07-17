function gridTraveler(n, m, map = new Map()) {
  if (n === 1 && m === 1) return 1;
  else if (n < 1 || m < 1) return 0;
  const mapKeys = [`${n}-${m}`, `${m}-${n}`];
  if (mapKeys.some((key) => map.get(key))) return map.get(mapKeys.find((key) => !!map.get(key)));
  //   for (const key of mapKeys) {
  //     const keyValue = map.get(key);
  //     if (keyValue) {
  //       return keyValue;
  //     }
  //   }
  const result = gridTraveler(n - 1, m, map) + gridTraveler(n, m - 1, map);
  for (const key of mapKeys) {
    map.set(key, result);
  }
  return result;
}

console.log(gridTraveler(50, 50));
