function copyText(myText) {

  let tempText = document.createElement('textarea');
  tempText.id = 'myTemporaryText';
  
  tempText.setAttribute();
  
  document.body.appendChild(tempText);
  
  tempText.innerHTML = myText;
  tempText.value = myText;
  
  tempText.style.display = "block";
  tempText.select();
  tempText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  tempText.style.display = "none";
  
  document.body.removeChild(tempText);
  //create document
}