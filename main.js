var pos1,pos2;
function input(x,y){
   pos1=x;
   pos2=y;
}
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//create empty array
var images = [];
images.length = 10;

//push the images into array

for(var i = 1 ; i < images.length ; i++){
    images[i] = new Image();
    images[i].src = 'Walk (' + i.toString() + ').png';
}
var i = 1;

setInterval(function(){
    i++;
    if( i >= 10){
        i = 1;
    }
    c.drawImage(images[i],pos1,pos2,75,53);
},100)