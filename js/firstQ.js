var runGame = function()
{
  var openingText = document.getElementById("open");
  openingText.innerText = "First Question";
  var buttonStart = document.getElementById("startButton");
  buttonStart.remove();
  var kentucky = document.getElementById("questionSpot");
  kentucky.innerText = "How many states border Kentucky?";
  var button1 = document.createElement("button");
  var buttonAnswer = document.createTextNode(text = "7")
  button1.appendChild(buttonAnswer)
  

}
