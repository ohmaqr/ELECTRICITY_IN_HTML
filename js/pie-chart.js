google.charts.load("current", {
    packages : [ "corechart" ]
});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
            [ 'TYPE', 'MGW' ], [ 'EGAT ( กฟผ.)', 16237.02 ],
            [ 'IPP ( ผู้ผลิตไฟฟ้าเอกชนรายใหญ่ )', 17648.50 ], [ 'SPP ( ผู้ผลิตไฟฟ้าเอกชนรายเล็ก )', 9483.37 ], [ 'Laos , Malaysia ( ลาว , มาเลเซีย )', 6234.90 ] ]);

    var options = {
        title : 'ใครผลิตไฟฟ้าบ้าง ? ',
        is3D : true,
    };

    var chart = new google.visualization.PieChart(document
            .getElementById('3d-pie-chart'));
    chart.draw(data, options);
}