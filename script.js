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
                breakdown: 'BEA, ITA, NCIS',
                color: '#969353'
            }, {
                name: 'Discovery',
                y: 10,
                drilldown: 'Discovery',
                breakdown: 'BEA, ITA, NCIS',
                color: '#cd7d19'
            }, {
                name: 'In-Progress',
                y: 40,
                drilldown: 'In-Progress',
                breakdown: 'BEA, ITA, NCIS',
                color: '#4b6e37'
            }, {
                name: 'Complete',
                y: 40,
                drilldown: 'Complete',
                breakdown: 'BEA, ITA, NCIS',
                color: '#41285f'
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
                    data: [{
                        name: 'DOC',
                        y: 100,
                        breakdown: 'DOC: Commerce Data Academy'
                    }]
                }, 
                {
                    tooltip: {
                        pointFormat: '{point.breakdown}'
                    },
                    id: 'Discovery',
                    name: 'Discovery',
                    data: [{
                        name: 'BEA',
                        y: 100,
                        breakdown: 'BEA: BEA RIMS II'
                    }]
                },
                {
                    tooltip: {
                        pointFormat: '{point.breakdown}'
                    },
                    id: 'In-Progress',
                    name: 'In-Progress',
                    data: [
                           {
                        name: 'ITA',
                        y: 25,
                        breakdown: 'New Exporters Product'
                    },
                            {
                        name: 'NIST',
                        y: 25,
                        breakdown: 'Commerce Interoperability Framework'        
                    },
                            {
                        name: 'PTO',
                        y: 25,
                        breakdown: 'Open Data Roadmap'
                    },
                            {
                        name: 'ESA',
                        y: 25,
                        breakdown: 'Commerce Data Advisory Council (CDAC)'
                    }]
                },
                {
                    tooltip: {
                        pointFormat: '{point.breakdown}'
                    },
                    id: 'Complete',
                    name: 'Complete',
                    data: [
                           {
                        name: 'DOC',
                        y: 25,
                        breakdown: 'Commerce Data Usability Project'
                    },
                            {
                        name: 'CENSUS',
                        y: 25,
                        breakdown: 'Income Inequality'        
                    },
                            {
                        name: 'DOC',
                        y: 25,
                        breakdown: 'Data.Commerce.Gov'
                    },
                            {
                        name: 'DOC',
                        y: 25,
                        breakdown: 'White House Council of Women and Girls'
                    }]
                }]
        }
    });
});