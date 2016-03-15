        var chart;
        $(document).ready(function () {
            var title = 'Commerce Data Service',
                subtitle = 'Click on a section to drill-down',
                colors = Highcharts.getOptions().colors,
                categories = ['Pre-Discovery', 'Discovery', 'In-Progress', 'Complete'], // category name matches 'name' property
                name = 'Groups',
                data = [{
                    y: 2, // this is to determine how big the slice of the pie you want for this item
                    name: 'Pre-Discovery', // this is the top group - used in  328, 339 for tool tip and resetting
                    color: colors[1], // decide color for the slice
                    list: 'DOC, BEA',
                    // THIS BEGINS THE NEXT DRILLDOWN - for deeper drilldowns you create another object in the 'data' property
                    drilldown: {
                        title: 'Pre-Discovery Clients', // title at top of drill down
                        subtitle: subtitle, // can set subtitle here or you can use the one made above
                        name: 'Users', // Way to organize your drilldowns based on info, doesn't show up in graph
                        categories: ['DOC'], // Line 227 uses this category to make X Axis
                        data: [{
                            y: 1, // setting this to 0 makes it disappear
                            name: 'DOC',
                            color: colors[1],
                            initiative: 'Commerce Data Academy',
                            services: 'UI/UX',
                            objective: 'Delivering Data Services'
                        }]
                    }
                }, {
                    y: 0,
                    name: 'EM Consumers',
                    color: colors[2],
                    drilldown: {
                        title: 'EM Consumers Group Data',
                        subtitle: subtitle,
                        name: 'Users',
                        categories: ['Paul'],
                        data: [{
                            y: 0,
                            name: 'Paul',
                            color: colors[1],
                            drilldown: {
                                title: 'Paul Assignments',
                                subtitle: 'Paul Assignments by content type',
                                name: 'Users',
                                categories: [],
                                data: []
                            }
                        }]
                    }
                }, {
                    y: 1,
                    name: 'EM knowledge Managers',
                    color: colors[3],
                    drilldown: {
                        title: 'EM knowledge Managers Group Data',
                        subtitle: subtitle,
                        name: 'Users',
                        categories: ['Bill'],
                        data: [{
                            y: 1,
                            name: 'Bill',
                            color: colors[1],
                            drilldown: {
                                title: 'Bill Assignments',
                                subtitle: 'Bill Assignments by content type',
                                name: 'Users',
                                categories: ['QuarkXPress Project'],
                                data: [{
                                    y: 1,
                                    name: 'QuarkXPress Project',
                                    color: colors[1]
                                }]
                            }
                        }]
                    }
                }, {
                    y: 1,
                    name: 'EM Media Managers',
                    color: colors[4],
                    drilldown: {
                        title: 'EM Media Managers Group Data',
                        subtitle: subtitle,
                        name: 'Users',
                        categories: ['Bill'],
                        data: [{
                            y: 1,
                            name: 'Bill',
                            color: colors[1],
                            drilldown: {
                                title: 'Bill Assignments',
                                subtitle: 'Bill Assignments by content type',
                                name: 'Users',
                                categories: ['QuarkXPress Project'],
                                data: [{
                                    y: 1,
                                    name: 'QuarkXPress Project',
                                    color: colors[1]
                                }]
                            }
                        }]
                    }
                }, {
                    y: 1,
                    name: 'EM Publishers',
                    color: colors[5],
                    drilldown: {
                        title: 'EM Publishers Group Data',
                        subtitle: subtitle,
                        name: 'Users',
                        categories: ['kate', 'Bill'],
                        data: [{
                            y: 0,
                            name: 'kate',
                            color: colors[1],
                            drilldown: {
                                title: 'kate Assignments',
                                subtitle: 'kate Assignments by content type',
                                name: 'Users',
                                categories: [],
                                data: []
                            }
                        }, {
                            y: 1,
                            name: 'Bill',
                            color: colors[2],
                            drilldown: {
                                title: 'Bill Assignments',
                                subtitle: 'Bill Assignments by content type',
                                name: 'Users',
                                categories: ['QuarkXPress Project'],
                                data: [{
                                    y: 1,
                                    name: 'QuarkXPress Project',
                                    color: colors[1]
                                }]
                            }
                        }]
                    }
                }, {
                    y: 3,
                    name: 'EM Reviewers',
                    color: colors[6],
                    drilldown: {
                        title: 'EM Reviewers Group Data',
                        subtitle: subtitle,
                        name: 'Users',
                        categories: ['Jack', 'Bill'],
                        data: [{
                            y: 2,
                            name: 'Jack',
                            color: colors[1],
                            drilldown: {
                                title: 'Jack Assignments',
                                subtitle: 'Jack Assignments by content type',
                                name: 'Users',
                                categories: ['Microsoft Excel', 'App Studio Package'],
                                data: [{
                                    y: 1,
                                    name: 'Microsoft Excel',
                                    color: colors[1]
                                }, {
                                    y: 1,
                                    name: 'App Studio Package',
                                    color: colors[2]
                                }]
                            }
                        }, {
                            y: 1,
                            name: 'Bill',
                            color: colors[2],
                            drilldown: {
                                title: 'Bill Assignments',
                                subtitle: 'Bill Assignments by content type',
                                name: 'Users',
                                categories: ['QuarkXPress Project'],
                                data: [{
                                    y: 1,
                                    name: 'QuarkXPress Project',
                                    color: colors[1]
                                }]
                            }
                        }]
                    }
                }], // end of data property
                chartType = 'pie',
                alpha = 0;

            if (chartType == 'pie') {
                subtitle = 'Click on a slice to drill-down';
                alpha = 60; // this is chooses the angle that people see the 3d pie chart (along top down axis)
            }

            function setChart(options) {
                chart.setTitle({
                    text: options.title
                }, {
                    text: options.subtitle
                });
                chart.series[0].remove(false); //boolean decides if it needs to redraw immediately, sinc we are doing more we do not set it to true, we remove the series
                chart.addSeries({
                    type: options.type,
                    name: options.name,
                    data: options.data,
                    color: options.color || 'white'
                }, false); // adds the series (which contains the data) - we pass it a new object and tell it false so it doesn't automatically re-render
                chart.xAxis[0].setCategories(options.categories, false); // xAxis[0] since there is only 1 axis - setCategory sets categories from the array you pass it (options.categories - you use false so it doesn't automatically redraw THUS you use chart.redraw() after)
                chart.redraw(); // redraws chart
            }

            chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'chartContainer', // passing it where to put it on the HTML - there is a div with ID 'chartContainer'
                    options3d: {
                        enabled: true,
                        alpha: alpha,
                        beta: 0,
                        depth: 50,
                        frame: {
                            bottom: {
                                size: 10,
                                color: '#C0C0C0'
                            }
                        },
                    },
                    height: 600, // sets chart height regardless of div
                    width: 800, // sets chart width regardless of div
                    plotBackgroundColor: { //sets the background color
                        linearGradient: [0, 0, 500, 500],
                        stops: [
                            [0, 'rgb(200, 200, 255)'],
                            [1, 'rgb(255, 255, 255)']
                        ]
                    }
                }, // end of chart property
                title: {
                    text: title
                },
                subtitle: {
                    text: subtitle
                },
                xAxis: {
                    categories: categories
                },
                yAxis: { // i don't know get this
                    title: {
                        text: 'Assignments'
                    }
                },
                plotOptions: {
                    pie: {
                        depth: 50,
                        innerSize: '40%',
                        slicedOffset: 40, // decides how far a slice should move if chosen - related to mouseout event below
                        point: { //sets events
                            events: {
                                mouseOut: function (event) {
                                    this.slice(false); // 'false' boolean sets it back into the pie
                                },
                                mouseOver: function (event) {
                                    this.slice(true); // 'true' boolean sets it away from pie using slicedOffset
                                }
                            }
                        },
                        dataLabels: {
                            enabled: true,
                            color: 'black',
                            style: {
                                fontWeight: 'bold'
                            }
                        }
                    },
                    series: {
                        cursor: 'pointer', // cursor set to pointer since we have 'click' events
                        point: {
                            events: {
                                click: function () {
                                    var drilldown = this.drilldown; // uses keyword 'this'
                                    var options; // create variable to passed into setChart function
                                    if (drilldown) { // drill down
                                        options = {
                                            'title': drilldown.title,
                                                'subtitle': drilldown.subtitle,
                                                'name': drilldown.name,
                                                'categories': drilldown.categories,
                                                'data': drilldown.data,
                                                'type': chartType
                                        };
                                    } else { // restore to first level
                                        options = {
                                            'title': title,
                                                'subtitle': subtitle,
                                                'name': name,
                                                'categories': categories,
                                                'data': data,
                                                'type': chartType
                                        };
                                    }
                                    setChart(options);
                                }
                            }
                        },
                    } //end of series
                }, //end of plotOptions
                tooltip: {
                    formatter: function () {
                        var point = this.point, // sets keyword 'this' -- this.point is really series.data
                            s = point.name + ': ' + point.list + '. '; //formats pointer
                        if (point.drilldown) { // if the point is in series.data.drilldown do this
                            s += 'Click to view ' + point.name;
                        } else {
                            s = '<b>' + point.name + '</b>'+ '<br/>' + 
                                'Initiative: ' + point.initiative + '<br/>' +
                                'Services: ' + point.services + '<br/>' +
                                'Objective: ' + point.objective + '<br/>' + '<br/>' +
                                '<em>' + 'Click Back to Home' + '</em>';
                        }
                        return s;
                    }
                },
                series: [{  // sets chart series here 
                    type: chartType,
                    name: name,
                    data: data,
                    color: 'white' // don't know why you set this to white
                }],
                exporting: {
                    enabled: false // can't print chart
                },
            }); // end of chart = new Highcharts.Chart()
        }); // end of document.ready()