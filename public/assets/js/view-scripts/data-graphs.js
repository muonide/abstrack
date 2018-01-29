(function(){
    $(window).on('load', function() {

        var altPlot = Highcharts.chart('alt-plot', {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Air Pressure'
            },
            xAxis: {
                title:{
                    enabled: true,
                    text: 'Altitude (m)'
                },
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Pressure (hPa)'
                }
            },
            lang: {
                thousandsSep: ','
            },
            tooltip: {
                useHTML: true,
                formatter: function() {
                    var tooltip = `<small>${this.series.name}</small><table>
                    <tr><td>Altitude: </td> <td style="text-align: right"><b>${Highcharts.numberFormat(this.x, 0, '.', ',')}  m</b></td></tr>
                    <tr><td>Pressure: </td> <td style="text-align: right"><b>${Highcharts.numberFormat(this.y, 0, '.', ',')} hPa</b></td></tr></table>`
                    return tooltip;
                }
            },
            series: [{
                name: 'Pressure',
                color: 'rgb(39, 132, 251)',
                data: [[15, 1000], [718,925], [1469, 850],[1703, 828],
                       [1849,814], [1923, 807], [1955, 804], [2438, 759.9]]
            }]
        
        });

        var dewPlot = Highcharts.chart('dew-plot', {
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                events: {
                    load: function() {

                        var chartData = this.series[0]; // grab the current data in the chart
                        setInterval(function(){
                            var interval = this;
                            $.get('/prediction/liveupdate-graphs', function(data, status)
                            {
                                console.log("chart data:", data);
                                //data: [[828,-2.4],[814,-4.0], [807,-4.0], [804,-5.6], [759.9, -6.2],
                                //       [733.3, -6.5], [700,-7.0], [656.9, -8.9]]
                                if(data != undefined || data != null)
                                {
                                    chartData.addPoint([data.dp, data.alt]); // add a new point to the chart
                                }else
                                {
                                    clearInterval(interval);
                                }
                            });
                        }, 3000);
                    }
                }
            },
            title: {
                text: 'Dew Point'
            },
            xAxis: {
                title:{
                    enabled: true,
                    text: 'Altitude (m)'
                },
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Dew Point C'
                }
            },
            lang: {
                thousandsSep: ','
            },
            tooltip: {
                useHTML: true,
                formatter: function() {
                    var tooltip = `<small>${this.series.name}</small><table>
                    <tr><td>Altitude: </td> <td style="text-align: right"><b>${Highcharts.numberFormat(this.x, 0, '.', ',')}  m</b></td></tr>
                    <tr><td>Dew Point: </td> <td style="text-align: right"><b>${Highcharts.numberFormat(this.y, 0, '.', ',')} C</b></td></tr></table>`
                    return tooltip;
                }
            },
            series: [{
                name: 'Dew Point',
                color: 'rgb(0, 215, 46)',
                data:[]
            }]
        
        });
    });

})();