function BuildChart(labels, c1, c2, c3, chartTitle) {    
    "use strict";
    var config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                label: 'Guatemala',
                data: c1,
                fill: false,
                borderColor: 'green', 
                backgroundColor: 'green', 
                },
                {
                label: 'El Salvador',
                data: c2,
                fill: false,
                borderColor: 'cyan',
                backgroundColor: 'cyan', 
                },
                {
                label: 'Honduras',
                data: c3,
                fill: false,
                borderColor: 'blue',
                backgroundColor: 'blue', 
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: chartTitle
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Fecha'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Casos Confirmados'
                    }
                }]
            }
        }
    };
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, config);
    return myChart;
}

function tailArray(array,positions){
    var result = array.slice(array.length-(positions));
    return result 
}

async function DataFeedLabels(country,status, days) {
    const baseUrl = "https://api.covid19api.com/country/";
    const response = await fetch(baseUrl+country+"/status/"+status);
    const data = await response.json();
    var labels = data.map(function (e) {
            return e.Date;
        })
    var values = labels.map(function (e) {
            var sliced = e.slice(0,10);
            return sliced;
        })
    return tailArray(values,days);
}

async function DataFeedValues(country,status, days) {
    const baseUrl = "https://api.covid19api.com/country/";
    const response = await fetch(baseUrl+country+"/status/"+status);
    const data = await response.json();
    var values = data.map(function (e) {
            return e.Cases;
        })
    return tailArray(values,days);
}


window.onload = async function() {
        BuildChart(await DataFeedLabels('panama','confirmed',35),await DataFeedValues('guatemala','confirmed',35), await DataFeedValues('el-salvador','confirmed',35),await DataFeedValues('honduras','confirmed',35),'Confirmados')
};