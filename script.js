$(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie',
            style: {
                fontFamily: 'SourceSansProRegular, Open Sans, Helvetica Neue, Arial, sans-serif'
            }
        },
        title: {
            text: 'Commerce Data Service - Project Dashboard',
            style: {
                fontWeight: 'bold',
                fontVariant: 'small-caps'
            }
        },
        subtitle: {
            text: 'Delivering Data Services * Fueling Economic Growth * Creating Data Driven Government',
            style: {
                fontVariant: 'small-caps'
            }
        },
        plotOptions: {
            pie: {
                borderColor: 'black'
            },
            series: {
                dataLabels: {
                    connectorWidth: 3,
                    connectorColor: 'black',
                    softConnector: false,
                    enabled: true,
                    distance: 20,
                    shadow: false,
                    format: '{point.name}: {point.y}%',
                    style: {
                        fontVariant: 'small-caps',
                        color: 'black',
                        fontSize: '16px'
                    }
                }
            },
            drilldown: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    borderColor: 'blue'
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
                breakdown: 'DOC',
                color: '#969353'
            }, {
                name: 'Discovery',
                y: 10,
                drilldown: 'Discovery',
                breakdown: 'BEA',
                color: '#cd7d19'
            }, {
                name: 'In-Progress',
                y: 40,
                drilldown: 'In-Progress',
                breakdown: 'ITA, NIST, PTO, ESA',
                color: '#4b6e37'
            }, {
                name: 'Complete',
                y: 40,
                drilldown: 'Complete',
                breakdown: 'DOC, CENSUS',
                color: '#41285f'
            }]
        }],

        drilldown: {
            drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    x: 5,
                    y: 50
                }
            },
            series: [
                {
                    dataLabels: {
                        format: '{point.name}'
                    },
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
                    dataLabels: {
                        format: '{point.name}'
                    },
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
                    dataLabels: {
                        format: '{point.name}'
                    },
                    tooltip: {
                        useHTML: true,
                        pointFormat: 'Project: {point.breakdown} <br> Services: {point.services} <br> Impact: {point.impact}'
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
                        breakdown: 'Commerce Interoperability Framework',        
                        services: 'Backend',
                        impact: 'Creating Data-Driven Government'
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
                    dataLabels: {
                        format: '{point.name}'
                    },
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