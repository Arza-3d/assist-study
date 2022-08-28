function copyText(myText) {

  let tempText = document.createElement('textarea');
  tempText.id = 'myTemporaryText';
  
  tempText.setAttribute();
  
  document.body.appendChild(tempText);
  
  tempText.innerHTML = myText;
  tempText.value = myText;
  //create document
}