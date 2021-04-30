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
  },{
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
     b = math.evaluate(f, {x:0})
     a = math.evaluate(f, {x:1}) - b
     if (b < 0 || cost < 0 || a >0) {
       document.getElementById("ErrorInput").style.display ="block";
     } else {
       document.getElementById("Result1").style.display ="block";
       document.getElementById("ErrorInput").style.display ="none";
       a = a/2;
       b = (b-cost)/2;
       c = b/(1-a);
       var f3 = "-x^2+10x"
       var f1 = String(a)+"x"+"+"+String(b);
       var f2 = String(1/a)+"(x"+"-"+String(b)+")";
       var xMin = 0;
       var xMax = b+5;
       var yMin = 0;
       var yMax = b+5;
       parameters.data[0].fn = f1;
       parameters.data[1].fn = f2;
       parameters.data[2].fn = f3;
       parameters.xAxis.domain = [xMin, xMax];
       parameters.yAxis.domain = [yMin, yMax];
       functionPlot(parameters);
     }
}

function ResultCournot() {
  document.getElementById("Result1").style.display ="block";
  var cost = document.querySelector("#marginalcost").value;
  var f = document.querySelector("#demandFunction").value;
  parser.evaluate('x=0')
  var a = parser.evaluate(f)
  parser.evaluate('x=1')
  var b = parser.evaluate(f)

}

var R2 = 98;
var T2 = 110;
var S2 = 77;
var P2 = 80;
function RepeatedGame() {
     var cost = document.querySelector("#marginalcost").value;
     var f = document.querySelector("#demandFunction").value;
     b = math.evaluate(f, {x:0})
     a = math.evaluate(f, {x:1}) - b
     if (b < 0 || cost < 0 || a >0) {
       document.getElementById("ErrorInput").style.display ="block";
     } else {
       bb = -b/a;
       aa = -1;
       document.getElementById("Result2").style.display = "block";
       document.getElementById("Co").innerHTML= (bb-cost)/4;
       document.getElementById("Co2").innerHTML= (bb-cost)/4;
       document.getElementById("Be").innerHTML= ((bb-cost)-(bb-cost)/4)/2;
       document.getElementById("Be2").innerHTML= ((bb-cost)-(bb-cost)/4)/2;
       c2 = Math.round((bb-cost)/4 - 0.01);
       b11 = Math.ceil((bb-cost-c2)/2);
       b12 = Math.floor((bb-cost-c2)/2);
       if (b11*(bb-cost-b11-c2) === b12*(bb-cost-b12-c2)) {
          b2 = b12
       } else {
         if (b11*(bb-cost-b11-c2) > b12*(bb-cost-b12-c2)){
           b2 = b11
         } else {
           b2 = b12
         }
       }
       document.getElementById("Co12").innerHTML= c2;
       document.getElementById("Co22").innerHTML= c2;
       document.getElementById("Be12").innerHTML= b2;
       document.getElementById("Be22").innerHTML= b2;
       R = -a*(bb-cost)*(bb-cost)/8;
       S = -a*((bb-cost)/4)*((bb-cost)-(bb-cost)/4)/2;
       T = -a*((bb-cost)-(bb-cost)/4)/2*((bb-cost)-(bb-cost)/4)/2;
       P = -a*((bb-cost)/4)*((bb-cost)-(bb-cost)/4)/2;
       R2 = -a*(bb-cost-2*c2)*c2;
       S2 = -a*(bb-cost-c2-b2)*c2;
       T2 = -a*(bb-cost-c2-b2)*b2;
       P2 = -a*(bb-cost-2*b2)*b2;
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
