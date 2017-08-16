//counter of views
var counter=0;
var js_counter = document.getElementById('counter');

js_counter.onclick= function() {
    //create a request object
    var request = new XMLHttpRequest();
 
    
 //handle response and render it on the browser
    request.onreadystatechange = function() {
        if (request.readystate === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var counter= request.responseText;
                var js_count=document.getElementById('count');
                js_count.innerHTML=counter.toString();
            }
        } 
    }
    
    //place the request
    request.open('GET','http://nalini-rangamani.imad.hasura-app.io/counter',true);
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