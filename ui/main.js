//counter of views

var js_counter = document.getElementById('counter');

js_counter.onclick= function() {
    //create a request object
    var request = new XMLHttpRequest();
 
    
 //handle response and render it on the browser
    request.onreadystatechange = function() {
        console.log('in state change');
        if (request.readyState === XMLHttpRequest.DONE) {
            console.log('done');
            if (request.status == 200) {
                console.log('200');
                var counter= request.responseText;
                var js_count=document.getElementById('count');
                js_count.innerHTML=counter.toString();
            }
        } 
    }
    
    //place the request
    request.open('GET','http://nalinirangamani.imad.hasura-app.io/counter',true);
    request.send(null);
  
};






//for REFERENCE 
/* 
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
*/