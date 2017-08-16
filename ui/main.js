
console.log('Loaded!');
//to change a html element
var Elem1=document.getElementById('main-text2');
//To replace the html
Elem1.innerHTML='my own text replaced programmatically';
var Image1=document.getElementById('main-image1');

//animation
var marginLeft=0;
function MoveToRight(){
marginLeft+= 1;
Image1.style.marginLeft =  marginLeft + 'px';
};

Image1.onclick = function() {
  setInterval(MoveToRight,50);  
};
