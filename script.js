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
                    format: '{point.name}: {point.y}%'
                }
            }
        },

        
        series: [{
            name: 'Project Status',
            colorByPoint: true,
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.breakdown}</span>'
            },
            data: [{
                name: 'Pre-Discovery',
                y: 10,
                drilldown: 'Pre-Discovery',
                breakdown: 'BEA, ITA, NCIS'
            }, {
                name: 'Discovery',
                y: 10,
                drilldown: 'Discovery',
                breakdown: 'BEA, ITA, NCIS'
            }, {
                name: 'In-Progress',
                y: 40,
                drilldown: 'In-Progress',
                breakdown: 'BEA, ITA, NCIS'
            }, {
                name: 'Complete',
                y: 40,
                drilldown: 'Complete',
                breakdown: 'BEA, ITA, NCIS'
            }]
        }],
        drilldown: {
            series: [
                {
                tooltip: {
                    pointFormat: '{point.breakdown}'
                },
                id: 'Pre-Discovery',
                name: 'Pre-Discovery',
                breakdown: 'DOC2: Academy',
                data: [{
                    name: 'DOC',
                    y: 100,
                    breakdown: 'DOC2: Academy'
                }]
            }, 

                {
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