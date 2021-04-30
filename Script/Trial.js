RestartPlot()
RestartPlot2()
function RestartPlot() {
    var layout = {
        showlegend: true,
		legend: {"orientation": "h"},
        title: {
            text:'The Result for current round',
            font: {family: 'Reggae One, cursive;',
                size: 20
            },
            xref: 'paper',
            x: 0.05,
        },
        xaxis: {
        range: [0,3],
            width:1,
            title: {
      text: 'The Round',
      font: {
        family: 'Reggae One, cursive;',
        size: 15,
        color: '#7f7f7f'
      }
    },
  },
        yaxis: {
        title: {
            text: 'Profit for each player',
            font: {
        family: 'Reggae One, cursive;',
        size: 15,
        color: '#7f7f7f'}}}};

    Plotly.newPlot('graph', [{
    x:[],
    y: [],
    mode: 'lines+markers',
    marker: {color: 'pink', size: 8},
    line: {width: 4},
    name: "Your Result"
    }, {
    x:[],
    y: [],
    mode: 'lines+markers',
    marker: {color: 'blue', size: 8},
    line: {width: 4},
    name: "The other result"}], layout)}
function RestartPlot2() {
    var t1 = {
    y: [0, 0],
    x: ["You", "The Other"],
    type: "bar",
    name: "The profit of this round",
    marker: {
    color: 'rgba(219, 64, 82, 0.7)',
    line: {
      color: 'rgba(219, 64, 82, 1.0)',
      width: 2
    }}}
    var t2 = {
    y: [0, 0],
    x: ["You", "The Other"],
    type: "bar",
    name: "Accumulated Score",
    marker: {
    color: 'rgba(50,171, 96, 0.7)',
    line: {
      color: 'rgba(50,171,96,1.0)',
      width: 2
    }
  }}
    var data = [t1, t2]
    var layout2 = {barmode: 'stack', legend: {"orientation": "h"},};
    Plotly.newPlot('graph2', data, layout2);
}

RestartPlot12()
RestartPlot22()
function RestartPlot12() {
    var layout = {
        showlegend: true,
		legend: {"orientation": "h"},
        title: {
            text:'The Result for current round',
            font: {family: 'Reggae One, cursive;',
                size: 20
            },
            xref: 'paper',
            x: 0.05,
        },
        xaxis: {
        range: [0,3],
            width:1,
            title: {
      text: 'The Round',
      font: {
        family: 'Reggae One, cursive;',
        size: 15,
        color: '#7f7f7f'
      }
    },
  },
        yaxis: {
        title: {
            text: 'Profit for each player',
            font: {
        family: 'Reggae One, cursive;',
        size: 15,
        color: '#7f7f7f'}}}};

    Plotly.newPlot('graph3', [{
    x:[],
    y: [],
    mode: 'lines+markers',
    marker: {color: 'pink', size: 8},
    line: {width: 4},
    name: "Your Result"
    }, {
    x:[],
    y: [],
    mode: 'lines+markers',
    marker: {color: 'blue', size: 8},
    line: {width: 4},
    name: "The other result"}], layout)}
function RestartPlot22() {
    var t1 = {
    y: [0, 0],
    x: ["You", "The Other"],
    type: "bar",
    name: "The profit of this round",
    marker: {
    color: 'rgba(219, 64, 82, 0.7)',
    line: {
      color: 'rgba(219, 64, 82, 1.0)',
      width: 2
    }}}
    var t2 = {
    y: [0, 0],
    x: ["You", "The Other"],
    type: "bar",
    name: "Accumulated Score",
    marker: {
    color: 'rgba(50,171, 96, 0.7)',
    line: {
      color: 'rgba(50,171,96,1.0)',
      width: 2
    }
  }}
    var data = [t1, t2]
    var layout2 = {barmode: 'stack', legend: {"orientation": "h"},};
    Plotly.newPlot('graph4', data, layout2);
}
function nextRound2() {
    var quantity = document.getElementById('playerquantity2');
    var E = document.getElementById('Error2');
    var R = document.getElementById('InfiGameResult2');
    var q2;
    if (quantity.value ===""){
        E.style.display = "block";
        R.style.display = "none";
    } else if (parseInt(quantity.value,10) < 0) {
        E.style.display = "block";
        R.style.display = "block";
    } else {
        if (document.getElementById('count2').innerHTML != "1") {
             q2 = parseInt(document.getElementById('quantitylasttime2').innerHTML,10)
        } else {
            q2 = 5
        }
        var q1 = parseInt(quantity.value,10);
        var T1 = parseInt(document.getElementById('Tprofit12').innerHTML, 10)
        var T2 = parseInt(document.getElementById('Tprofit22').innerHTML, 10)
        document.getElementById('count2').innerHTML++;
        document.getElementById('quantitylasttime2').innerHTML = q1;
        document.getElementById('oquantitylasttime2').innerHTML = q2;
        document.getElementById('profitYou2').innerHTML = (price(q1+q2)-cost1(q1))*q1;
        document.getElementById('profit2').innerHTML = (price(q1+q2)-cost1(q1))*q2;
        document.getElementById('Tprofit12').innerHTML = T1+(price(q1+q2)-cost1(q1))*q1;
        document.getElementById('Tprofit22').innerHTML = T2+(price(q1+q2)-cost1(q1))*q2;
        E.style.display = "none";
        R.style.display = "block";
        Extend3();
        Extend4();
    }
}
function Extend4(){
    var newY1 = document.getElementById('profitYou2').innerHTML;
    var newY2 = document.getElementById('profit2').innerHTML;
    var newTY1 = document.getElementById('Tprofit12').innerHTML;
    var newTY2 = document.getElementById('Tprofit22').innerHTML;

    var t1 = {
    y: [newY1, newY2],
    x: ["You", "The Other"],
    type: "bar",
    name: "The profit of this round",
        marker: {
    color: 'rgba(219, 64, 82, 0.7)',
    line: {
      color: 'rgba(219, 64, 82, 1.0)',
      width: 2
    }}
    }
    var t2 = {
    y: [newTY1-newY1, newTY2-newY2],
    x: ["You", "The Other"],
    type: "bar",
    name: "Accumulated profit of previous round",
    marker: {
    color: 'rgba(50,171, 96, 0.7)',
    line: {
      color: 'rgba(50,171,96,1.0)',
      width: 2
    }}}
    var data = [t1, t2]
    var layout = {
    yaxis: {title: 'Accumulated profit'},
        barmode: 'relative',
      title: 'Accumulated Profit',
    legend: {"orientation": "h"},};
    Plotly.newPlot('graph4', data, layout);
}
function Extend3(){
    var newX = document.getElementById('count2').innerHTML-1;
    var newY1 = document.getElementById('profitYou2').innerHTML;
    var newY2 = document.getElementById('profit2').innerHTML;
    var update1 = {x:  [[newX]], y: [[newY1]]}
    var update2 = {x:  [[newX]], y: [[newY2]]}
    var end = newX+1;
    var View = {
        xaxis: {
          range: [0, end]
        },
        'yaxis.range[1]': 80 + 5
      };
    Plotly.relayout('graph3', View);
    Plotly.extendTraces('graph3', update1, [0]);
    Plotly.extendTraces('graph3', update2, [1]);
}
function restart2() {
    RestartPlot12()
    RestartPlot22()
    document.getElementById('count2').innerHTML = 1;
    document.getElementById('Tprofit12').innerHTML = 0;
    document.getElementById('Tprofit22').innerHTML = 0;
    document.getElementById('playerquantity2').value = 0;
    document.getElementById('Error2').style.display = "none";
    document.getElementById('InfiGameResult2').style.display = "none";
}

function nextRound() {
    var quantity = document.getElementById('playerquantity');
    var E = document.getElementById('Error');
    var R = document.getElementById('InfiGameResult');
    if (quantity.value ===""){
        E.style.display = "block";
        R.style.display = "none";
    } else if (parseInt(quantity.value,10) < 0) {
        E.style.display = "block";
        R.style.display = "block";
    } else {
        localStorage.count++;
        var q1 = parseInt(quantity.value,10);
        var q2 = 5;
        var T1 = parseInt(document.getElementById('Tprofit1').innerHTML, 10)
        var T2 = parseInt(document.getElementById('Tprofit2').innerHTML, 10)
        document.getElementById('count').innerHTML++;
        document.getElementById('quantitylasttime').innerHTML = q1;
        document.getElementById('profitYou').innerHTML = (price(q1+q2)-cost1(q1))*q1;
        document.getElementById('profit').innerHTML = (price(q1+q2)-cost1(q1))*q2;
        document.getElementById('Tprofit1').innerHTML = T1+(price(q1+q2)-cost1(q1))*q1;
        document.getElementById('Tprofit2').innerHTML = T2+(price(q1+q2)-cost1(q1))*q2;
        E.style.display = "none";
        R.style.display = "block";
        Extend();
        Extend2();
    }
}

function newGame() {
    restart();
    var quantity = document.getElementById('q1');
    var E1 = document.getElementById('Error1');
    var R1 = document.getElementById('Result1');
    if (quantity.value ===""){
        E1.style.display = "block";
        R1.style.display = "none";
    } else if (parseInt(quantity.value,10) < 0) {
        E1.style.display = "block";
        R1.style.display = "block";
    } else {
        var q1 = parseInt(quantity.value,10);
        var q2 = 5;
        document.getElementById('q').innerHTML = q1;
        document.getElementById('p1').innerHTML = (price(q1+q2)-cost1(q1))*q1;
        document.getElementById('p2').innerHTML = (price(q1+q2)-cost1(q1))*q2;
        E1.style.display = "none";
        R1.style.display = "block";
    }
}

function restart() {
    RestartPlot()
    RestartPlot2()
    localStorage.count = 0;
    document.getElementById('count').innerHTML = 1;
    document.getElementById('Tprofit1').innerHTML = 0;
    document.getElementById('Tprofit2').innerHTML = 0;
    document.getElementById('playerquantity').value = 0;
    document.getElementById('Error').style.display = "none";
    document.getElementById('InfiGameResult').style.display = "none";
}


function cost1(q1) {
    return 5;
}

function price(m) {
    return 20-m;
}

function Extend(){
    var newX = document.getElementById('count').innerHTML-1;
    var newY1 = document.getElementById('profitYou').innerHTML;
    var newY2 = document.getElementById('profit').innerHTML;
    var update1 = {x:  [[newX]], y: [[newY1]]}
    var update2 = {x:  [[newX]], y: [[newY2]]}
    var end = newX+1;
    var endY = newY2;
    var View = {
        xaxis: {
          range: [0, end]
        },
        'yaxis.range[1]': 80 + 5
      };
    Plotly.relayout('graph', View);
    Plotly.extendTraces('graph', update1, [0]);
    Plotly.extendTraces('graph', update2, [1]);
}

function Extend2(){
    var newY1 = document.getElementById('profitYou').innerHTML;
    var newY2 = document.getElementById('profit').innerHTML;
    var newTY1 = document.getElementById('Tprofit1').innerHTML;
    var newTY2 = document.getElementById('Tprofit2').innerHTML;

    var t1 = {
    y: [newY1, newY2],
    x: ["You", "The Other"],
    type: "bar",
    name: "The profit of this round",
        marker: {
    color: 'rgba(219, 64, 82, 0.7)',
    line: {
      color: 'rgba(219, 64, 82, 1.0)',
      width: 2
    }}
    }
    var t2 = {
    y: [newTY1-newY1, newTY2-newY2],
    x: ["You", "The Other"],
    type: "bar",
    name: "Accumulated profit of previous round",
    marker: {
    color: 'rgba(50,171, 96, 0.7)',
    line: {
      color: 'rgba(50,171,96,1.0)',
      width: 2
    }}}
    var data = [t1, t2]
    var layout = {
    yaxis: {title: 'Accumulated profit'},
        barmode: 'relative',
      title: 'Accumulated Profit',
    legend: {"orientation": "h"},};
    Plotly.newPlot('graph2', data, layout);
}



function CoopResult(){
    document.getElementById('resultCooperative').style.display = "block";
}


