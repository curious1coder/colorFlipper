 const body= document.getElementsByTagName("body");
//  body[2].style.backgroundColor="Pink";

 function setColor(name){
    body[0].style.backgroundColor = name;
 }

//  setColor("");
function randomColor() {
    const r = Math.round(Math.random()*255); 
    const g = Math.round(Math.random()*255); 
    const b = Math.round(Math.random()*255); 
    body[0].style.backgroundColor = `rgb(${r} ${g} ${b})`
}