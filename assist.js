//================
// Global Function
//================

function getInput(myCount) {
  return document.getElementById("input" + myCount);
}

function getInputValue(myCount) {
  return getInput(myCount).value;
}

function getOutput(myCount) {
  return document.getElementById("output" + myCount);
}

function getRealOutput(myCount) {
  return document.getElementById("realOutput" + myCount);
}

function getRealOutputValue(myCount) {
  return getRealOutput(myCount).value;
}

function setRealOutput(myCount, newText) {
  getRealOutput(myCount).value = newText;
  getRealOutput(myCount).innerHTML = newText;

}


//=====
//EVENT
//=====

function copyText() {

  let myCount = this.dataset.count;
  let myRealOutput = document.getElementById("realOutput" + myCount);

  // for mobile
  myRealOutput.style.display = "block";
  myRealOutput.select();
  myRealOutput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  myRealOutput.style.display = "none";

  // for PC
  navigator.clipboard.writeText(myRealOutput.innerHTML);
}

function inputIn() {

  let myCount = this.dataset.count;

  let inputText = getInputValue(myCount);

  let newText = inputFunctions[myCount](inputText);

  // save input function output
  setRealOutput(myCount, newText);

  // display function output
  let displayedText = changeTagForDisplay(newText);

  getOutput(myCount).innerHTML = displayedText;
}