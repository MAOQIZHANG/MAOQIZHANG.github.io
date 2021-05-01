var slider = document.getElementById("ExFactor");
var output = document.getElementById("demo");
var GainX = document.getElementById("GainX");
var GainY = document.getElementById("GainY");
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
    d = T2 - R2 + this.value * (R2 - S2);
    GainX.innerHTML = Math.min((P2 * (T2 - R2) + this.value * (R2 * (T2 - S2) - P2 * (T2 - R2))) / d,110);
    GainY.innerHTML = Math.min((this.value * P2 * (R2 - S2) + (R2 * (T2 - P2) - S2 * (R2 - P2))) / d,110);
}

var parameters = {
  target: '#myFunction',
  data: [{
    fn: 'sin(x)',
    color: 'red',}, {
    fn: 'cos(x)',
    color: 'black',
 },],
  grid: true,
  yAxis: {domain: [-1, 1]},
  xAxis: {domain: [0, 2*Math.PI]}
};

function plot() {
  var f = document.querySelector("#function").value;
  var f2 = document.querySelector("#function2").value;
  var xMin = document.querySelector("#xMin").value;
  var xMax = document.querySelector("#xMax").value;
  var yMin = document.querySelector("#yMin").value;
  var yMax = document.querySelector("#yMax").value;

  parameters.data[0].fn = f;
  parameters.xAxis.domain = [xMin, xMax];
  parameters.yAxis.domain = [yMin, yMax];
  parameters.data[1].fn = f2;

  functionPlot(parameters);
}

var parameters = {
  target: '#ResultN',
  data: [{
    fn: 'x',
    color: 'red',}, {
    fn: 'y',
    color: 'black',
  }],
  grid: true,
  yAxis: {domain: [0, 20]},
  xAxis: {domain: [0, 2*Math.PI]}
};

var parametersC = {
  target: '#ResultC',
  data: [{
    fn: 'y',
    color: 'blue',
 },],
  grid: true,
  yAxis: {domain: [0, 20]},
  xAxis: {domain: [0, 2*Math.PI]}
};

const parser = math.parser()
function Trial() {
    var cost = document.querySelector("#marginalcost").value;
    var f = document.querySelector("#demandFunction").value;
    var b1 = math.evaluate(f, {x:0});
    var a1 = math.evaluate(f, {x:1}) - b1;
    if (b1 < 0 || cost < 0 || a1 >0) {
       document.getElementById("ErrorInput").style.display ="block";
    } else {
       document.getElementById("Result1").style.display ="block";
       document.getElementById("ErrorInput").style.display ="none";
       var a = -a1;
       var b = -(b1-cost)/a1;
          document.getElementById("NormalCase").style.display = "block";
          document.getElementById("P1Nash").innerHTML= (2*b/9).toFixed(4);
          document.getElementById("P2Nash").innerHTML= (2*b/9).toFixed(4);
          document.getElementById("G1Nash").innerHTML= (a*b*b/9).toFixed(4);
          document.getElementById("G2Nash").innerHTML= (a*b*b/9).toFixed(4);
          document.getElementById("CoQ").innerHTML= (b/2).toFixed(4);
          document.getElementById("P1C").innerHTML= (a*b*b/8).toFixed(4);
          document.getElementById("P2C").innerHTML= (a*b*b/8).toFixed(4);
       var f3 = "x*("+String(a1)+"x+"+String(b1-cost)+")";
       var f1 = String(-2)+"x"+"+"+String(b);
       var f2 = String(-0.5)+"(x"+"-"+String(b)+")";
       var xMin = 0;
       var xMax = b+5;
       var xMax2 = 4*b+4;
       var yMin = 0;
       var yMax = b+5;
       var yMax2 = 100;
       parameters.data[0].fn = f1;
       parameters.data[1].fn = f2;
       parameters.xAxis.domain = [xMin, xMax];
       parameters.yAxis.domain = [yMin, yMax];
       parametersC.data[0].fn = f3;
       parametersC.xAxis.domain = [xMin, xMax2];
       parametersC.yAxis.domain = [yMin, yMax2];
       functionPlot(parameters);
       functionPlot(parametersC);
     }
}


var R2 = 98;
var T2 = 110;
var S2 = 77;
var P2 = 80;
var R = 98;
var T = 110;
var S = 77;
var P = 80;

function RepeatedGame() {
     var cost = document.querySelector("#marginalcost").value;
     var f = document.querySelector("#demandFunction").value;
     var b = math.evaluate(f, {x:0})
     var a = math.evaluate(f, {x:1}) - b
     var d = math.evaluate(f, {x:2}) - b
     if (b < 0 || cost < 0 || a >0 || d != 2*a) {
       document.getElementById("ErrorInput").style.display ="block";
     } else {
       var bb = -(b-cost)/a;
       var aa = -a;
       document.getElementById("Result2").style.display = "block";
       document.getElementById("Co").innerHTML= (bb-cost)/4;
       document.getElementById("Co2").innerHTML= (bb-cost)/4;
       document.getElementById("Be").innerHTML= ((bb-cost)-(bb-cost)/4)/2;
       document.getElementById("Be2").innerHTML= ((bb-cost)-(bb-cost)/4)/2;
       var c2 = Math.round((bb)/4 - 0.01);
       var b11 = Math.ceil((bb-c2)/2);
       var b12 = Math.floor((bb-c2)/2);
       if (b11*(bb-b11-c2) === b12*(bb-b12-c2)) {
           var b2 = b12;
       } else {
         if (b11*(bb-b11-c2) > b12*(bb-b12-c2)){
           var b2 = b11;
         } else {
           var b2 = b12;
         }
       }
       document.getElementById("Co12").innerHTML= c2;
       document.getElementById("Co22").innerHTML= c2;
       document.getElementById("Be12").innerHTML= b2;
       document.getElementById("Be22").innerHTML= b2;
       R = -a*bb*bb/8;
       S = -a*((bb)/4)*((bb)-(bb)/4)/2;
       T = -a*((bb)-(bb)/4)/2*((bb)-(bb)/4)/2;
       P = -a*((bb)/4)*((bb)-(bb)/4)/2;
       R2 = -a*(bb-2*c2)*c2;
       S2 = -a*(bb-c2-b2)*c2;
       T2 = -a*(bb-c2-b2)*b2;
       P2 = -a*(bb-2*b2)*b2;
       document.getElementById("RR").innerHTML= String(R)+","+String(R);
       document.getElementById("ST").innerHTML= String(S)+","+String(T);
       document.getElementById("TS").innerHTML= String(T)+","+String(S);
       document.getElementById("PP").innerHTML= String(P)+","+String(P);
       document.getElementById("RRT2").innerHTML= String(R2)+","+String(R2);
       document.getElementById("STT2").innerHTML= String(S2)+","+String(T2);
       document.getElementById("TST2").innerHTML= String(T2)+","+String(S2);
       document.getElementById("PPT2").innerHTML= String(P2)+","+String(P2);
       document.getElementById("ErrorInput").style.display = "none";
     }
}

function ZeroDeterminant() {
  if (T2>R2 & R2>P2 & P2>S2) {
    document.getElementById("ErrorZD").style.display = "none";
    document.getElementById("Result3").style.display = "block";
    document.getElementById("ZDX").innerHTML = ((R2*(T2-S2)-P2*(T2-R2))/(R2-S2)).toFixed(4);
    document.getElementById("ZDY").innerHTML = P2;

  } else {
    document.getElementById("ErrorZD").style.display = "block";}
}

