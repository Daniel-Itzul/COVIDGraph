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

var MX = [];
var GT = [];
var SV = [];
var HN = [];
var NI = [];
var CR = [];
var PA = [];

async function DataFeedLabels(country,status) {
    const baseUrl = "https://api.covid19api.com/country/";
    const response = await fetch(baseUrl+country+"/status/"+status);
    const data = await response.json();
    var labels = data.map(function (e) {
            return e.Date;
        })
    var values = data.map(function (e) {
            return e.Cases;
        })
    return labels;
}

async function DataFeedValues(country,status) {
    const baseUrl = "https://api.covid19api.com/country/";
    const response = await fetch(baseUrl+country+"/status/"+status);
    const data = await response.json();
    var values = data.map(function (e) {
            return e.Cases;
        })
    return values;
}


SV = DataFeedLabels('el-salvador','confirmed');
console.log(SV);

//Object.entries(PA).forEach(([key, val]) => console.log(key, val));
//Object.keys(PA).map(function(key) {
//  PA.[key]  = PA.[key].date;
//});


//GT = PA.Date;

//console.log(PA.map(material => material.Date));

//console.log(PA);

/*var xhttpmx = new XMLHttpRequest();
var xhttpgt = new XMLHttpRequest();
var xhttpsv = new XMLHttpRequest();
var xhttphn = new XMLHttpRequest();
var xhttpni = new XMLHttpRequest();
var xhttpcr = new XMLHttpRequest();
var xhttppa = new XMLHttpRequest();*/

/*xhttpmx.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);
        MX = json;
        //console.log(MX);
    }
};
/*xhttpgt.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);
        GT = json;
        console.log(GT);
    }
};
xhttpsv.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);
        SV = json;
        console.log(SV);
    }
};
xhttphn.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);
        HN = json;
        console.log(HN);
    }
};
xhttpni.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);
        NI = json;
        console.log(NI);
    }
};
xhttpcr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);
        CR = json;
        console.log(CR);
    }
};
xhttppa.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);
        PA = json;
        console.log(PA);
    }
};*/

/*xhttpmx.open("GET", "https://api.covid19api.com/dayone/country/mexico/status/confirmed", true);
xhttpmx.send();
/*xhttpgt.open("GET", "https://api.covid19api.com/dayone/country/guatemala/status/confirmed", true);
xhttpgt.send();
xhttpsv.open("GET", "https://api.covid19api.com/dayone/country/el-salvador/status/confirmed", true);
xhttpsv.send();
xhttphn.open("GET", "https://api.covid19api.com/dayone/country/honduras/status/confirmed", true);
xhttphn.send();
xhttpcr.open("GET", "https://api.covid19api.com/dayone/country/costa-rica/status/confirmed", true);
xhttpcr.send();
xhttppa.open("GET", "https://api.covid19api.com/dayone/country/panama/status/confirmed", true);
xhttppa.send();
*/
window.onload = async function() {
   BuildChart(await DataFeedLabels('panama','confirmed'),await DataFeedValues('guatemala','confirmed'), await DataFeedValues('el-salvador','confirmed'),await DataFeedValues('honduras','confirmed'),'Confirmados')
};