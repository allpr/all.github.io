var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'imagens/dont.png') {
      myImage.setAttribute ('src','imagens/ec6.gif');
    } else {

      myImage.setAttribute ('src','imagens/dont.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Vai um Café ' + myName +  '?';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Vai um Café ' + storedName + '?';
}
myButton.onclick = function() {
  setUserName();
}
