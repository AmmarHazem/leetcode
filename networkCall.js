const axios = require("axios");

async function main() {
  try {
    const res = await axios.post("http://20.46.194.79:3000", {
      vehicles: [
        {
          id: 1,
          //   profile: "driving-car",
          description: "Bivek",
          start: [54.369423, 24.469901],
          end: [54.369423, 24.469901],
          capacity: [100, 100],
        },
        {
          id: 2,
          //   profile: "driving-car",
          description: "edward",
          start: [54.500459, 24.410319],
          end: [54.500459, 24.410319],
          capacity: [100, 100],
        },
      ],
      shipments: [
        {
          id: 1,
          pickup: { id: 1, location: [54.3392567, 24.46795999999999], time_windows: [[26820, 26820]] },
          delivery: { id: 1, location: [54.361202, 24.490808], time_windows: [[28800, 28800]] },
        },
        {
          id: 2,
          pickup: { id: 2, location: [54.7015912480608, 24.59984134551135], time_windows: [[33480, 33480]] },
          delivery: { id: 2, location: [54.361202, 24.490808], time_windows: [[36000, 36000]] },
        },
        {
          id: 3,
          pickup: { id: 3, location: [54.368988037109375, 24.491100311279297], time_windows: [[36540, 36540]] },
          delivery: { id: 3, location: [54.37667596907345, 24.481623898819336], time_windows: [[37080, 37080]] },
        },
        {
          id: 4,
          pickup: { id: 4, location: [54.3573632, 24.477413], time_windows: [[43200, 43200]] },
          delivery: { id: 4, location: [54.41121781137462, 24.497992861723123], time_windows: [[44280, 44280]] },
        },
        {
          id: 5,
          pickup: { id: 5, location: [54.37055, 24.4902], time_windows: [[43200, 43200]] },
          delivery: { id: 5, location: [54.41121781137462, 24.497992861723123], time_windows: [[44280, 44280]] },
        },
        {
          id: 6,
          pickup: { id: 6, location: [54.37667596907345, 24.481623898819336], time_windows: [[50400, 50400]] },
          delivery: { id: 6, location: [54.368988037109375, 24.491100311279297], time_windows: [[51480, 51480]] },
        },
        {
          id: 7,
          pickup: { id: 7, location: [54.357353, 24.477356], time_windows: [[64800, 64800]] },
          delivery: { id: 7, location: [54.5874596, 24.4387441] },
        },
        {
          id: 8,
          pickup: { id: 8, location: [54.361202, 24.490808], time_windows: [[80820, 80820]] },
          delivery: { id: 8, location: [54.3392567, 24.46795999999999], time_windows: [[82800, 82800]] },
        },
        {
          id: 9,
          pickup: { id: 9, location: [54.41121781137462, 24.497992861723123], time_windows: [[80820, 80820]] },
          delivery: { id: 9, location: [54.37055, 24.4902], time_windows: [[82800, 82800]] },
        },
      ],
    });
    console.log("--- res data", res.data);
  } catch (e) {
    console.log("--- error");
    console.log(e.response);
  }
}

main();
