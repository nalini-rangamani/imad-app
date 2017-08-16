console.log('Loaded!');
//to change a html element
var Elem1=document.getElementById('main-text2');
Elem1.innerHTML='my own text replaced programmatically';
var Image1=document.getElementById('main-image1');
Image1.onclick = function() {
    Image1.style.marginLeft = '100px';
};
