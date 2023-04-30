
for(let i=1; i<6; i++){
    // i++ är samma som i=i+1
 
    
    const pHue = 100+ i*20;
    const pSize = 5 + i*3;
    
    const paragraph = document.createElement('p');
    document.body.append(paragraph);
    paragraph.innerText = `Rad ${i}`;
    paragraph.style.color = `hsl(237, 80%, 68%)`;
    paragraph.style.textAlign = "center";
    paragraph.style.fontSize = pSize;
    paragraph.style.backgroundColor = `hsl(${pHue}, 90%, 80%)`;
   
 }


//main div
let mainElement = document.createElement("div");
   mainElement.className = "mainDiv";
   document.body.appendChild(mainElement);
   mainElement.style.border = '1px solid black';
   mainElement.style.display = "flex";
   mainElement.style.justifyContent = "space-around";




//Div1
 let firstDiv = document.createElement("div1");
    firstDiv.className = "firstClass";
    mainElement.appendChild(firstDiv);
    firstDiv.style.border = '6px solid hsl(238, 63%, 79%)';
    firstDiv.style.maxHeight = '285px'; // dont like it! is there any other way
    firstDiv.style.display = 'block'; 
    firstDiv.style.marginTop = 'auto';
    firstDiv.style.marginBottom = 'auto';
 for(let i=0; i<10; i++){
    const p = document.createElement('p');
    firstDiv.appendChild(p);
    p.innerText = `${i}`;
    p.style.color = 'black';
    p.style.width = '40px';
    p.style.padding = '0px';
    p.style.margin = '0px';

    if(i%2 === 0){
    p.style.background = 'black';
    p.style.color = 'white';
    }

   if(i === 4 ){
        p.style.background = `hsl(238, 63%, 79%)`;
    }
 }


//Div2
let secondDiv = document.createElement("div2");
   secondDiv.className = "secondClass";
   mainElement.appendChild(secondDiv);
   secondDiv.style.border = '6px solid hsl(238, 63%, 79%)';
   secondDiv.style.maxHeight = '285px'; // dont like it! is there any other way
   secondDiv.style.display = 'block'; 
   secondDiv.style.marginTop = '50px';
   secondDiv.style.marginBottom = '50px';
for(let i=9; i>=0; i--){
   const p = document.createElement('p');
   secondDiv.appendChild(p);
   p.innerText = `${i}`;
   p.style.width = '40px';
   p.style.padding = '0px';
   p.style.margin = '0px';
   p.style.textAlign = "center";

   if(i%2 === 0){
    p.style.background = 'black';
    p.style.color = 'white';
    }

   if(i === 8 ){
        p.style.background = `hsl(238, 63%, 79%)`;
    }
  }

//Div3

let thirdDiv = document.createElement("div3");
    thirdDiv.className = "thirdClass";
    mainElement.appendChild(thirdDiv);
    thirdDiv.style.border = '6px solid hsl(238, 63%, 79%)';
    thirdDiv.style.maxHeight = '285px'; // dont like it! is there any other way
    thirdDiv.style.display = 'block'; 
    thirdDiv.style.marginTop = '50px';
    thirdDiv.style.marginBottom = '50px';

const numbers = ['ett', 'två', 'tree', 'fyra', 'fem', 'sex', 'sju', 'åtta','nio', 'tio'];

const ul = document.createElement('ul');
thirdDiv.appendChild(ul);
ul.style.listStyle = 'none';


thirdDiv.appendChild(ul);

ul.style.width = '40px';
ul.style.padding = '0px';
ul.style.margin = '0px';
ul.style.textAlign = "right";


for(let i=0; i<numbers.length; i++){
   const li = document.createElement('li');
   ul.append(li);
   li.innerText = numbers[i];

   if(i%2 === 0){
    li.style.background = 'black';
    li.style.color = 'white';
    }


    if(li.innerText ==='sex' ){
      li.style.background = `hsl(238, 63%, 79%)`;
 
}

}
