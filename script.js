
function add()
{
  var inputValue = document.getElementById("field").value;
  console.log(inputValue);
  inputValue = +inputValue + 1;
  document.getElementById("field").value=inputValue;
}

function subt()
{
  var inputValue = document.getElementById("field").value;
  console.log(inputValue);
  inputValue = +inputValue - 1;
  document.getElementById("field").value=inputValue;
}