function BuildChart(labels, values, chartTitle) {    
    "use strict";
    var config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                label: 'My First dataset',
                data: values,
                fill: false,
                borderColor: "red", 
                backgroundColor: "red", 
                },
                {
                label: 'My Second dataset',
                data: [34,1,56,28,7,10,5],
                fill: false,
                borderColor: "blue",
                backgroundColor: "blue", 
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Line Chart'
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
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    };
    var ctx = document.getElementById("myChart").getContext('2d');
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

var xhttpmx = new XMLHttpRequest();
var xhttpgt = new XMLHttpRequest();
var xhttpsv = new XMLHttpRequest();
var xhttphn = new XMLHttpRequest();
var xhttpni = new XMLHttpRequest();
var xhttpcr = new XMLHttpRequest();
var xhttppa = new XMLHttpRequest();

xhttpmx.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);
        MX = json;
        console.log(MX);
    }
};
xhttpgt.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);
        GT = json;
        console.log(GT.map);
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
};

xhttpmx.open("GET", "https://api.covid19api.com/dayone/country/mexico/status/confirmed", true);
xhttpmx.send();
xhttpgt.open("GET", "https://api.covid19api.com/dayone/country/guatemala/status/confirmed", true);
xhttpgt.send();
xhttpsv.open("GET", "https://api.covid19api.com/dayone/country/el-salvador/status/confirmed", true);
xhttpsv.send();
xhttphn.open("GET", "https://api.covid19api.com/dayone/country/honduras/status/confirmed", true);
xhttphn.send();
xhttpcr.open("GET", "https://api.covid19api.com/dayone/country/costa-rica/status/confirmed", true);
xhttpcr.send();
xhttppa.open("GET", "https://api.covid19api.com/dayone/country/panama/status/confirmed", true);
xhttppa.send();

window.onload = function() {
    BuildChart(GT.Dates, GT.Cases, "chartTitle")
};