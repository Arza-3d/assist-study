function copyText(myText) {

  alert('copy start ');

  let tempText = document.createElement('textarea');
  tempText.id = 'myTemporaryText';

  document.body.prepend(tempText);

  tempText.style.display = "block";
  tempText.innerHTML = myText;
  tempText.value = myText;


  tempText.select();
  tempText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}