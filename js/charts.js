const ctx = document.getElementById("stats").getContext("2d");
const data = {
  labels: [
    "HP",
    "Attack",
    "Defense'",
    "Special Attack",
    "Special Defense",
    "Speed",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",

      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
  ],
};

export function createChart(stats) {
  return new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "HP",
        "Attack",
        "Defense'",
        ["Special", "Attack"],
        ["Special", "Defense"],
        "Speed",
      ],
      datasets: [
        {
          data: stats,
          backgroundColor: "white",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          grid: {
            color: "white",
          },
          pointLabels: {
            color: "white",
          },
          angleLines: {
            color: "white",
          },
        },
      },
    },
  });
}

// elements: {
//   line: {
//     borderWidth: 3,
//   },
// },
