function toggletext(btn) {

  document.getElementById("buttons").style.display = "none";

  if (btn == 'Ame') {
    document.getElementById("fbutton1").style.display = "inline-block";
    document.getElementById("guess_false").innerHTML = "Unfortunately, things are not as you've expected.";
  }

  else {
    document.getElementById("fbutton2").style.display = "inline-block";
    document.getElementById("guess_correct").innerHTML = "Correct! You've made a right guess!";
  }
  
  document.getElementById("explanation1").style.display = "block";
  document.getElementById("explanation2").style.display = "block";

  document.getElementById("next").style.display = "block"; 
}
