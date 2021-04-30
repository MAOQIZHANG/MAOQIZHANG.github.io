function toggleVersion(ver) {
  if (ver == 's') {
    document.getElementById("rigorous1").style.display = "block";
    document.getElementById("rigorous2").style.display = "block";
    document.getElementById("rigorous31").style.display = "block";
    document.getElementById("rigorous32").style.display = "block";
    document.getElementById("rigorous33").style.display = "block";
    document.getElementById("rigorous34").style.display = "block";
    document.getElementById("rigorous35").style.display = "block";
    document.getElementById("rigorous4").style.display = "block";
    document.getElementById("simplified1").style.display = "none";
    document.getElementById("simplified2").style.display = "none";
    document.getElementById("simplified3").style.display = "none";

    document.getElementById("fbutton2").style.display = "inline-block";
    document.getElementById("button2").style.display = "none";
    document.getElementById("fbutton1").style.display = "none";
    document.getElementById("button1").style.display = "inline-block";
  }

  else {
    document.getElementById("simplified1").style.display = "block";
    document.getElementById("simplified2").style.display = "block";
    document.getElementById("simplified3").style.display = "block";
    document.getElementById("rigorous1").style.display = "none";
    document.getElementById("rigorous2").style.display = "none";
    document.getElementById("rigorous31").style.display = "none";
    document.getElementById("rigorous32").style.display = "none";
    document.getElementById("rigorous33").style.display = "none";
    document.getElementById("rigorous34").style.display = "none";
    document.getElementById("rigorous35").style.display = "none";
    document.getElementById("rigorous4").style.display = "none";

    document.getElementById("fbutton1").style.display = "inline-block";
    document.getElementById("button1").style.display = "none";
    document.getElementById("fbutton2").style.display = "none";
    document.getElementById("button2").style.display = "inline-block";
  }
}

function showAnswer(tag) {
  let button_target = "button3" + tag;
  let false_button_target = "fbutton3" + tag;
  document.getElementById(button_target).style.display = "none";
  document.getElementById(false_button_target).style.display = "inline-block";

  if (tag == '4' || tag == '8') {
    document.getElementById(false_button_target).style.backgroundColor = "white";
    document.getElementById(false_button_target).style.color = "#426cf5";
    document.getElementById(false_button_target).style.border = "1.5px solid #426cf5";
  }
  else if (tag == '10') {
    let a = 1;
  }
  else {
    let show_target = "answer" + tag;
    document.getElementById(show_target).style.display = "block";
  }
}



function plot(num) {

  if (num == '1') {
    var parameters = {
      target: '#Monopoly',
      disableZoom: true,
      data: [{fn: '-x^2+15x', color: 'blue'}],
      grid: true,
      yAxis: {label: 'Profit', domain: [0, 60]},
      xAxis: {label: "q", domain: [0, 15]}
    };
    functionPlot(parameters);
  }

  else if (num == '2') {
    var parameters = {
      target: '#Duopoly',
      width: 400,
      height: 400,
      disableZoom: true,
      data: [{fn: 'y=-2x+15', color: 'blue'}, {fn: 'y=7.5-0.5x', color: 'red'}],
      grid: true,
      xAxis: {label: 'q1', domain: [0,15]},
      yAxis: {label: 'q2', domain: [0,15]}
    };
    functionPlot(parameters);
  }
}

plot('1');
plot('2');

function showResult(){
  let q1 = parseFloat(document.getElementById("q1").value);
  let q2 = parseFloat(document.getElementById("q2").value);

  if ( q1 < 0 || q1 > 20 || q2 < 0 || q2 > 20 ) {
    document.getElementById("OnButton6").innerHTML = "Please check your input and retry.";
    document.getElementById("GameResult").style.display = "none";
  }
  
  else {
    document.getElementById("OnButton6").innerHTML = "Show Result";
    let pi1 = -q1 * q1 + (15 - q2) * q1;
    let pi2 = -q2 * q2 + (15 - q1) * q2;
    document.getElementById("pi1").innerHTML = String(pi1);
    document.getElementById("pi2").innerHTML = String(pi2);
    document.getElementById("pi").innerHTML = String(pi1 + pi2);
    document.getElementById("GameResult").style.display = "block";
  }
}