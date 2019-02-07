var runGame = function()
{
  var openingText = document.getElementById("open");
  openingText.innerText = "First Question";
  var button1 = document.getElementById("startButton");
  button1.remove();
  var kentucky = "How many states border Kentucky";
  openingText.after(kentucky);
}
