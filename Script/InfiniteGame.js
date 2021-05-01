var player = 0
var you = [];
var flag;
var count = 0;
function WithP1(){
    player = 1;
    flag = 0;
    document.getElementById('playertypewithyou').innerHTML = "I";
    document.getElementById('Player').style.display = "block";
    document.getElementById('PlayerButtons1').style.display = "none";
}
function WithP2(){
    player = 2;
    document.getElementById('playertypewithyou').innerHTML = "II";
    document.getElementById('Player').style.display = "block";
    document.getElementById('PlayerButtons1').style.display = "none";
}

RestartPlot()
RestartPlot2()
function RestartPlot() {
    var layout = {
        showlegend: true,
		legend: {"orientation": "h"},
        title: {
            text:'The Result for current round',
            font: {family: 'Reggae One, cursive;',
                size: 15
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

function nextRound() {
    var quantity = document.getElementById('playerquantity');
    var E = document.getElementById('Error');
    var R = document.getElementById('InfiGameResult');
    if (player === 0){
        document.getElementById('ErrorChoosePlayer').style.display = "block"
    } else {
        document.getElementById('ErrorChoosePlayer').style.display = "none"
        if (quantity.value ==="1"){
            q1 = 10;
            you.push(1);
            if (you.length === 1){
             q2 = 7;
            } else if (flag === 1 & player === 1){
                q2 = 10
            } else if (player === 2){
                q2 = you[you.length-2]*3+7
            } else {
                q2 = 7;
            }
        var T1 = parseInt(document.getElementById('Tprofit1').innerHTML, 10)
        var T2 = parseInt(document.getElementById('Tprofit2').innerHTML, 10)
        document.getElementById('count').innerHTML++;
        document.getElementById('quantitylasttime').innerHTML = q1;
        document.getElementById('oquantitylasttime').innerHTML = q2;
        document.getElementById('profitYou').innerHTML = (price(q1+q2)-cost1(q1))*q1;
        document.getElementById('profit').innerHTML = (price(q1+q2)-cost1(q1))*q2;
        document.getElementById('Tprofit1').innerHTML = T1+(price(q1+q2)-cost1(q1))*q1;
        document.getElementById('Tprofit2').innerHTML = T2+(price(q1+q2)-cost1(q1))*q2;
        E.style.display = "none";
        R.style.display = "block";
        Extend();
        Extend2();
        flag = 1;
    } else if (quantity.value ==="0") {
            var q2;
            you.push(0);
            var q1 = 7;
            if (you.length === 1){
             q2 = 7;
            } else if (flag === 1 & player === 1){
                q2 = 10
            } else if (player === 2) {
                q2 = you[you.length-2]*3+7
            } else {
                q2 = 7
            }
        var T1 = parseInt(document.getElementById('Tprofit1').innerHTML, 10)
        var T2 = parseInt(document.getElementById('Tprofit2').innerHTML, 10)
        document.getElementById('count').innerHTML++;
        document.getElementById('oquantitylasttime').innerHTML = q2;
        document.getElementById('quantitylasttime').innerHTML = q1;
        document.getElementById('profitYou').innerHTML = (price(q1+q2)-cost1(q1))*q1;
        document.getElementById('profit').innerHTML = (price(q1+q2)-cost1(q1))*q2;
        document.getElementById('Tprofit1').innerHTML = T1+(price(q1+q2)-cost1(q1))*q1;
        document.getElementById('Tprofit2').innerHTML = T2+(price(q1+q2)-cost1(q1))*q2;
        E.style.display = "none";
        R.style.display = "block";
        Extend();
        Extend2();
    } else {
        E.style.display = "block";
    }
    }
}

function restart() {
    RestartPlot()
    RestartPlot2()
    count = 0;
    player = 0;
    you = [];
    flag = 0;
    document.getElementById('InfiGameResult').style.display = "none";
    document.getElementById('PlayerButtons1').style.display = "block";
    document.getElementById('Player').style.display = "none";
    document.getElementById('ErrorChange').style.display = "none";
    document.getElementById('count').innerHTML = 1;
    document.getElementById('Tprofit1').innerHTML = 0;
    document.getElementById('Tprofit2').innerHTML = 0;
    document.getElementById('playerquantity').value = 0;
    document.getElementById('oplayerquantity').value = 7;
    document.getElementById('Error').style.display = "none";
}

function cost1(q1) {
    return 2;
}

function price(m) {
    return 30-m;
}

function Extend(){
    var newX = document.getElementById('count').innerHTML-1;
    var newY1 = document.getElementById('profitYou').innerHTML;
    var newY2 = document.getElementById('profit').innerHTML;
    var update1 = {x:  [[newX]], y: [[newY1]]}
    var update2 = {x:  [[newX]], y: [[newY2]]}
    var end = newX+1;
    var View = {
        xaxis: {
          range: [0, end]
        },
        'yaxis.range[1]': 130
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
    player = 0;
    RestartPlot12();
    RestartPlot22();
    document.getElementById('count2').innerHTML = 1;
    document.getElementById('Tprofit12').innerHTML = 0;
    document.getElementById('Tprofit22').innerHTML = 0;
    document.getElementById('playerquantity2').value = 0;
    document.getElementById('Error2').style.display = "none";
    document.getElementById('InfiGameResult2').style.display = "none";
}

function DetailsZeroDeterminant() {
    document.getElementById('ZeroDeterminantCal').style.display = "block";
}

function RestartPlot5() {
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

    Plotly.newPlot('graph5', [{
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
function RestartPlot6() {
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
    Plotly.newPlot('graph6', data, layout2);
}

var P1 = [];
var P2 = [];
var TP1 = [];
var TP2 = [];

function GameIterator(a, b, c, d) {
    const R = 98;
    const S = 77;
    const T = 110;
    const P = 80;
    let start = 0;
    let end = Infinity;
    let step = 1;
    let nextIndex = start;
    let i = 0;
    const A1 = a;
    const A2 = b;
    const P1 = c;
    const P2 = d;
    let F1a = 1;
    let F2a = 1;
    let F1p = 0;
    let F2p = 0;
    let temp1 = 0;
    let temp2 = 0;
    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               i++;
               nextIndex += step;
               temp1 = 0;
               if(F1p > 0){
                   F1p--;
                   temp1 = 1;
               } else if (F1a === A1) {
                   F1a =0;
                   temp1 = 1;
               }
               if (F2p > 0){
                   F2p--;
                   temp2 = 1;
               } else if (F2a === A2) {
                   F2a = 0;
                   temp2 = 1;
               } else {
                   temp2 = 0;
               }
               if (temp1 === 0 & temp2 === 0){
                   result={p1: R, p2: R, index:nextIndex};
                   F1a++;
                   F2a++;
               } else if (temp1 === 0 & temp2 === 1){
                   result={p1: S, p2: T, index:nextIndex};
                   F1p = P1;
                   F2a++;
                   F1a = 0;
               } else if (temp1 === 1 & temp2 === 0) {
                   result={p1: T, p2: S, index:nextIndex};
                   F1a++;
                   F2p = P2;
                   F2a = 0;
               } else {
                   result={p1: P, p2: P, index:nextIndex};
               }
               return result;
           }
           return {p1: 0, p2: 0, index:1000}
       }
    };
    return rangeIterator;
}


var cnt = 0;
function StartComp() {
    P1 = parseInt(document.getElementById('ProtectiveT1').value,10);
    P2 = parseInt(document.getElementById('ProtectiveT2').value,10);
    A1 = parseInt(document.getElementById('AggressiveT1').value,10);
    A2 = parseInt(document.getElementById('AggressiveT2').value,10);
    if (P1<0 || P2<0 || A1<0 || A2<0) {
        document.getElementById("InfiInputError").style.display = "block";
        document.getElementById("PlotResult").style.display = "none";
    } else {
        document.getElementById("InfiInputError").style.display = "none";
        document.getElementById("PlotResult").style.display = "block";
        Plotly.newPlot('graph5', [{
        y: [],
        mode: 'lines',
        line: {color: '#80CAF6'},
            name: "Player I",
        }, {
        y: [],
        mode: 'lines',
        line: {color: '#DF56F1'},
            name: "Player II",
        }], {title: {
            text:'Actual Score of each round',
            font: {family: 'Reggae One, cursive;',
                size: 14
            },
            xref: 'paper',
            x: 0.05,
        }});
        Plotly.newPlot('graph6', [{
        y: [],
        mode: 'lines',
        line: {color: '#80CAF6'},
        name: "Player I",
        }, {
        y: [],
        mode: 'lines',
        line: {color: '#DF56F1'},
        name: "Player II",
        }], {title: {
            text:'Average Score',
            font: {family: 'Reggae One, cursive;',
                size: 14
            },
            xref: 'paper',
            x: 0.05,
        }});
        const sequence = GameIterator(A1,A2,P1,P2);
        var record1 = 0;
        var record2 = 0;
        var x = 0;
        var interval = setInterval(function() {
        result = sequence.next();
        x = result.index;
        record1 += result.p1;
        record2 += result.p2;
        Plotly.extendTraces('graph5', {
            y: [[result.p1], [result.p2]]
        }, [0, 1])
            Plotly.extendTraces('graph6', {
            y: [[record1/x], [record2/x]]
        }, [0, 1])
            if(++cnt === 10) clearInterval(interval);}, 30);}
}



var cnt = 0;



function StartComp1() {
    R = 98;
    S = 70;
    T = 110;
    P = 80;
    var A1 = document.getElementById("ProtectiveT1").value;
    var A2 = document.getElementById("ProtectiveT2").value;
    RestartPlot5();
    RestartPlot6();
    count = 0;
    while (count<100) {
        Extend5(count, R, R);
        count++;
    }

    var Ag1 = parseInt(A1, 10);
    var Ag2 = parseInt(A2, 10);
    var Pro1 = parseInt(document.getElementById("slider").innerHTML,10);
    var Pro2 = parseInt(document.getElementById("slider2").innerHTML,10);
    min = Math.min(Ag1,Ag2);
    while (count<=40) {
        P1.push(0);
        P2.push(0);
        TP1.push(R);
        TP1.push(R);
        Extend5(count+1, R, R)
        Extend6(R,R)
        count = count+1;
    }
    while (count <= 1000) {

    }
}

function Extend5(newX, newY1, newY2){
    var update1 = {x:  [[newX]], y: [[newY1]]}
    var update2 = {x:  [[newX]], y: [[newY2]]}
    var end = newX+1;
    var View = {
        xaxis: {
          range: [0, end]
        },
        'yaxis.range[1]': 130
      };
    Plotly.relayout('graph5', View);
    Plotly.extendTraces('graph5', update1, [0]);
    Plotly.extendTraces('graph5', update2, [1]);
}

function Extend6(newY1, newY2){
    newTY1 = TP1.reduce((pv, cv) => pv + cv, 0);
    newTY2 = TP2.reduce((pv, cv) => pv + cv, 0);
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
    Plotly.newPlot('graph6', data, layout);
}





