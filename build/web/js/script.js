$('.ui.menu .ui.dropdown').dropdown({
    on: 'hover'
});
//$('.ui.modal').modal('show');
$('#periodselect').on('change', function () {
    if ($(this).val() === '-1') {
        $('.ui.modal').modal('show');
    }
});
$('#start-date').calendar();
$('#end-date').calendar();
//$('#start-date').datepicker();
//$('#end-date').datepicker();
var barChartCanvas = $('#barchartleft').get(0).getContext('2d');
var barChart = new Chart(barChartCanvas);
var areaChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Electronics",
            fillColor: "rgba(210, 214, 222, 1)",
            strokeColor: "rgba(210, 214, 222, 1)",
            pointColor: "rgba(210, 214, 222, 1)",
            pointStrokeColor: "#c1c7d1",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "Digital Goods",
            fillColor: "rgba(60,141,188,0.9)",
            strokeColor: "rgba(60,141,188,0.8)",
            pointColor: "#3b8bba",
            pointStrokeColor: "rgba(60,141,188,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(60,141,188,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
var barChartData = areaChartData;
barChartData.datasets[1].fillColor = "#00a65a";
barChartData.datasets[1].strokeColor = "#00a65a";
barChartData.datasets[1].pointColor = "#00a65a";
var barChartOptions = {
    scaleBeginAtZero: true,
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    barShowStroke: true,
    barStrokeWidth: 2,
    barValueSpacing: 5,
    barDatasetSpacing: 1,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
    //Boolean - whether to make the chart responsive
    responsive: true,
    maintainAspectRatio: true
};
barChartOptions.datasetFill = false;
barChart.Bar(barChartData, barChartOptions);

var barChartCanvas = $('#barchartright').get(0).getContext('2d');
var barChart = new Chart(barChartCanvas);
var areaChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Electronics",
            fillColor: "rgba(210, 214, 222, 1)",
            strokeColor: "rgba(210, 214, 222, 1)",
            pointColor: "rgba(210, 214, 222, 1)",
            pointStrokeColor: "#c1c7d1",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "Digital Goods",
            fillColor: "rgba(60,141,188,0.9)",
            strokeColor: "rgba(60,141,188,0.8)",
            pointColor: "#3b8bba",
            pointStrokeColor: "rgba(60,141,188,1)",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(60,141,188,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
var barChartData = areaChartData;
barChartData.datasets[1].fillColor = "#11a4fa";
barChartData.datasets[1].strokeColor = "#11a4fa";
barChartData.datasets[1].pointColor = "#00a65a";
var barChartOptions = {
    scaleBeginAtZero: true,
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    barShowStroke: true,
    barStrokeWidth: 2,
    barValueSpacing: 5,
    barDatasetSpacing: 1,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
    //Boolean - whether to make the chart responsive
    responsive: true,
    maintainAspectRatio: true
};
barChartOptions.datasetFill = false;
barChart.Bar(barChartData, barChartOptions);
$('.ui.accordion')
  .accordion({
      exclusive:false
  })
;
