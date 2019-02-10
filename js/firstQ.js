var runGame = function()
{
  var openingText = document.getElementById("open");
  openingText.innerText = "How many states border Kentucky?";
  var buttonStart = document.getElementById("startButton");
  buttonStart.remove();
  var button1 = document.getElementById("answer1");
  button1.onclick = function() {wrong()};
  button1.innerHTML = "5";
  var button2 = document.getElementById("answer2");
  button2.onclick = function() {wrong()};
  button2.innerHTML = "6";
  var button3 = document.getElementById("answer3");
  button3.onclick = function() {right()};
  button3.innerHTML = "7";
}

var wrong = function()
{var openingText=document.getElementById("open");
openingText.innerText="Spinach is high in what element?";
}

var right = function()
{
  var openingText=document.getElementById("open");
  openingText.innerText="Spinach is high in what element?";

}
