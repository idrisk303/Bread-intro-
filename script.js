const messages=[
"A NEW LEGEND IS RISING",
"THE FUTURE IS BAKING",
"JOIN THE BAKERS"
];

let index=0;

const title=document.querySelector("h1");

function nextScene(){

title.style.opacity=0;

setTimeout(()=>{

title.innerHTML=messages[index];

title.style.opacity=1;

index++;

if(index<messages.length){

setTimeout(nextScene,3000);

}

},1000);

}

setTimeout(nextScene,2000);
