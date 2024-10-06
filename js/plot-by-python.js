function newChart(id, labels, data, min, max) {
    new Chart(id, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: data
            }]
        },
        options: {
            legend: {display: false},
            scales: {
            yAxes: [{ticks: {min: min, max:max}}],
            }
        }
        });
}


const x41Values = [2540,2541,2542,2543];
const y41Values = [14506.30,14179.9,13712.4,14918.3];
newChart("myChartx41", x41Values, y41Values, 13000, 15000);

const x42Values = [2540,2541,2542,2543];
const y42Values = [85803.72,85469.84,84342.18,90577.47];
newChart("myChartx42", x42Values, y42Values, 83000, 88000);

const x51Values = [2550,2551,2552,2553];
const y51Values = [22586.1,22568.2,22044.9,24009.9];
newChart("myChartx51", x51Values, y51Values, 21000, 25000);

const x52Values = [2550,2551,2552,2553];
const y52Values = [138714.66,140597.56,140385.47,154810.69];
newChart("myChartx52", x52Values, y52Values, 135000, 150000);

const x54Values = [2552,2553,2554,2555];
const y54Values = [22044.9,24009.9,23900.21,26121.1];
newChart("myChartx54", x54Values, y54Values, 22000, 26000);

const x55Values = [2552,2553,2554,2555];
const y55Values = [140385.47,154810.69,153871.94,167834.83];
newChart("myChartx55", x55Values, y55Values, 140000, 170000);

const x63Values = [2561,2562,2563,2564];
const y63Values = [28338.1,30853.2,28636.7,30135.3];
newChart("myChartx63", x63Values, y63Values, 27000, 31000);

const x64Values = [2561,2562,2563,2564];
const y64Values = [186800.35,191044.49,185361.33,188981.14];
newChart("myChartx64", x64Values, y64Values, 180000, 195000);
