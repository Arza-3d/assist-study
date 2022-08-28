function copyText(myText) {

  let tempText = document.createElement('textarea');
  tempText.id = 'myTemporaryText';
  
  tempText.setAttribute();
  
  document.body.appendChild(tempText);
  
  tempText.innerHTML = myText;
  tempText.value = myText;
  
  tempText.style.display = "block";
  myRealOutput.select();
  myRealOutput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  myRealOutput.style.display = "none";
  //create document
}