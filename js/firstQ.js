
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
{
document.write("Incorrect: The right answer was 7")
var openingText=document.getElementById("open");
openingText.innerText="Spinach is high in what element?";
var button1 = document.getElementById("answer1");
button1.onclick = function() {right2()};
button1.innerHTML = "iron";
var button2 = document.getElementById("answer2");
button2.onclick = function() {wrong2()};
button2.innerHTML = "potassium";
var button3 = document.getElementById("answer3");
button3.onclick = function() {wrong2()};
button3.innerHTML = "magnesium"
}

var right = function()
{
  document.write("Correct!")
  var openingText=document.getElementById("open");
  openingText.innerText="Spinach is high in what element?";
  var button1 = document.getElementById("answer1");
  button1.onclick = function() {right2()};
  button1.innerHTML = "iron";
  var button2 = document.getElementById("answer2");
  button2.onclick = function() {wrong2()};
  button2.innerHTML = "potassium";
  var button3 = document.getElementById("answer3");
  button3.onclick = function() {wrong2()};
  button3.innerHTML = "magnesium"
}

var wrong2 = function()
{var openingText=document.getElementById("open");
openingText.innerText="On a computer keyboard, what letter is between I and P?";
var button1 = document.getElementById("answer1");
button1.onclick = function() {wrong3()};
button1.innerHTML = "l";
var button2 = document.getElementById("answer2");
button2.onclick = function() {wrong3()};
button2.innerHTML = "k";
var button3 = document.getElementById("answer3");
button3.onclick = function() {right3()};
button3.innerHTML = "o"
}

var right2 = function()
{
  var openingText=document.getElementById("open");
  openingText.innerText="On a computer keyboard, what letter is between I and P?";
  var button1 = document.getElementById("answer1");
  button1.onclick = function() {wrong3()};
  button1.innerHTML = "l";
  var button2 = document.getElementById("answer2");
  button2.onclick = function() {wrong3()};
  button2.innerHTML = "k";
  var button3 = document.getElementById("answer3");
  button3.onclick = function() {right3()};
  button3.innerHTML = "o"
}

var wrong3 = function()
{
  document.write("")
}

var right3 = function()
{
  document.write("")
}
