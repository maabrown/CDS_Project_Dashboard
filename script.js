$(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Commerce Data Service - Project Dashboard'
        },
        subtitle: {
            text: 'Click the slices to view versions.'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
            name: 'Project Status',
            colorByPoint: true,
            data: [{
                name: 'Pre-Discovery',
                y: 10,
                drilldown: 'Pre-Discovery'
            }, {
                name: 'Discovery',
                y: 10,
                drilldown: 'Discovery'
            }, {
                name: 'In-Progress',
                y: 40,
                drilldown: 'In-Progress'
            }, {
                name: 'Complete',
                y: 40,
                drilldown: 'Complete'
            }]
        }],
        drilldown: {
            series: [{
                name: 'Pre-Discovery',
                id: 'Pre-Discovery',
                data: [
                    ['DOC', 100]
                ]
            }, {
                name: 'Discovery',
                id: 'Discovery',
                data: [
                    ['BEA', 100]
                ]
            }, {
                name: 'In-Progress',
                id: 'In-Progress',
                data: [
                    ['ITA', 25],
                    ['NIST', 25],
                    ['ESA', 25],
                    ['PTO', 25]
                ]
            }, {
                name: 'Complete',
                id: 'Complete',
                data: [
                    ['DOC', 75],
                    ['CENSUS', 25]
                ]
            }]
        }
    });
});