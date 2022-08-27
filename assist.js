

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
  
