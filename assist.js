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

//=================
// DISPLAY FUNCTION
//=================

function changeTagForDisplay(myText) {
  const wordChange = [
    ['&',
      'amp'],
    ['<',
      'lt'],
    ['>',
      'gt'],
    [' ',
      'nbsp'],
    ['\n',
      '\n<br>']
  ];

  let newText = myText;

  for (let i = 0; i < wordChange.length; i++) {
    let myOldWord = new RegExp(wordChange[i][0], 'g');
    let myNewWord = (wordChange[i][0] != '\n') ? '&' + wordChange[i][1] + ';': wordChange[i][1];

    newText = newText.replace(myOldWord, myNewWord);
  }

  return newText;
}

//================
// CUSTOM FUNCTION
//================

function makeTextareaSection(myText) {
  return '<h3>' + myText + `</h3>
  <section>
  <textarea>
  </textarea>
  </section>`;
}

function makeTable(myText) {
  const myArray = myText.split('\n');
  let myTable = '<table>\n';
  let myTbody = '<tbody>';
  for (let i = 0; i < myArray.length; i++) {
    const myArray2 = myArray[i].split(',');

    myTbody += '\n <tr>';

    for (let j = 0; j < myArray2.length; j++) {
      myTbody += '\n  <td>' + myArray2[j] + '</td>';
    }

    myTbody += '\n </tr>';

  }
  myTbody += '\n</tbody>';
  myTable += myTbody + '\n</table>';

  return myTable;
}

function makeH3Section(myText) {
  let myArray = myText.split('\n');
  let myNewText = "";
  for (let i = 0; i < myArray.length; i++) {

    if (myArray[i].length == 0) {
      break;
    }
    myNewText += '<h3>' + myArray[i] + '</h3>'
    +'\n<section>\n</section>\n\n';
  }
  return myNewText;
}

function makeLoop(myText) {
  let myLoop = '';
  let myArray = myText;

  myLoop = 'for (let i = 0; i < '
  + myArray + '.length; i++) '
  + '{\n\n'
  + '}'
  return myLoop;
}

function deleteExtraSpaces(myText) {
  return myText.replace(/\s+/g, ' ').trim();
}

function replaceSpaceWithStrip(myText) {

  myText = deleteExtraSpaces(myText);
  myText = myText.replace(/ /g, '-');
  return myText;
}

function makeMozillaDevCssLink(myText) {
  let myCssProperty = replaceSpaceWithStrip(myText);
  let myNewAnchor = '<a href="';
  let myLink = 'https://developer.mozilla.org/en-US/docs/Web/CSS/';
  myNewAnchor += myLink + myCssProperty
  myNewAnchor += '" >\n';
  myNewAnchor += myCssProperty;
  myNewAnchor += '\n</a>'
  return myNewAnchor;
}

function makeCSSSection(myText) {
  let myArray = myText.split('\n');
  let myNewText = '';
  for (let i = 0; i < myArray.length; i++) {
    myArray[i] = replaceSpaceWithStrip(myArray[i]);
    myArray[i] = makeH3Section(myArray[i]);
    myNewText += myArray[i];
  }
  return myNewText;
}

function makeCSSPropertiesTable(myText) {
  myText = replaceSpaceWithStrip(myText);
  myText = makeTable(myText);

  return myText;
}

function getW3SchoolProperties() {}

const inputFunctions =
[
  makeTextareaSection,
  changeTagForDisplay,
  makeTable,
  makeH3Section,
  makeLoop,

  //css doc assist
  replaceSpaceWithStrip,
  makeMozillaDevCssLink,
  makeCSSSection,
  makeCSSPropertiesTable
];