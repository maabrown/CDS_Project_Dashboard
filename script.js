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
                    ['DOC: Commerce Data Academy', 100]
                ]
            }, {
                name: 'Discovery',
                id: 'Discovery',
                data: [
                    ['BEA: BEA RIMS II', 100]
                ]
            }, {
                name: 'In-Progress',
                id: 'In-Progress',
                data: [
                    ['ITA: New Exporters Project', 25],
                    ['NIST: Commerce Interoperability Framework', 25],
                    ['ESA: Commerce Data Advisory Council', 25],
                    ['PTO: Open Data Roadmap', 25]
                ]
            }, {
                name: 'Complete',
                id: 'Complete',
                data: [
                    ['DOC: Commerce Data Usability Project', 25],
                    ['CENSUS: Income Inequality', 25],
                    ['DOC: Data.Commerce.gov', 25],
                    ['DOC: White House Council of Women and Girls', 25]
                ]
            }]
        }
    });
});