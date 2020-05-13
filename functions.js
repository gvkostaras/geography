var elem = document.documentElement;
var level=0;
var audioV = new Audio('sounds/V.mp3');
var audioX = new Audio('sounds/X.mp3');



/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();  
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();  
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();  
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();  
  }

}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
  FixGrid();
}


var rndRow = new Array(51);
for (i = 1; i < 52; i++){
rndRow[i]=i;
}
      

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function populate(myInput, myvar) {
var selectA = document.getElementById(myInput);
var lengthA = selectA.options.length;
for (i = lengthA-1; i >= 0; i--) {
  selectA.options[i] = null;
}

for (i = 0; i < 52; i++) {
    selectA.options[selectA.options.length] = new Option(myvar[i], i);
} 
}

function populateP() {
var selectA = document.getElementById('pper');
var lengthA = selectA.options.length;
for (i = lengthA-1; i >= 0; i--) {
  selectA.options[i] = null;
}
for (i = 0; i < 10; i++) {
    selectA.options[selectA.options.length] = new Option(perifs[i], i);
} 
}

function ShowVal() {
var selectA = document.getElementById("nomoi");
return selectA.options[selectA.selectedIndex].value;
}

function sortlist(myInput)
{
    var cl = document.getElementById(myInput);
    var clTexts = new Array();

    for(i = 0; i < cl.length; i++)
    {
        clTexts[i] =
            cl.options[i].text + "," +
            cl.options[i].text + "," +
            cl.options[i].value;
    }

    clTexts.sort();

    for(i = 0; i < cl.length; i++)
    {
        var parts = clTexts[i].split(',');       
        cl.options[i].text = parts[1];
        cl.options[i].value = parts[2];
    }
}


function changeMap(mapId)
{

mapIds='0'+ mapId;
mapIds=mapIds.substr(mapIds.length - 2); 
document.getElementById("mymap").src= 'maps/'+mapIds+'.png';
}


function shuffleMap() 
{
myend=51;
for(i = 51; i >0; i--) 
{
c1=getRandomInt(1, i);
v1=rndRow[c1];
rndRow[c1]=rndRow[i];
rndRow[i]=v1;
}
}

function hideElem(e) {
  var x = document.getElementById(e);
  x.style.display = "none";
 
}


function showElem(e) {
  var x = document.getElementById(e);
  x.style.display = "block";
}


function selectbyVl (myid, myvl){
    var tst = document.getElementById(myid);
    for(i = 0; i < tst.length; i++)
    {

  if (tst.options[i].value == myvl) { 
    tst.options[i].selected = true; 
  } 
} 
}

function selectbyTx (myid, mytx){
    var tst = document.getElementById(myid);
    for(i = 0; i < tst.length; i++)
    {

  if (tst.options[i].text == mytx) { 
    tst.options[i].selected = true; 
  } 
} 
}


function FixGrid(){
var offs=115;
document.getElementById("container").style.height=window.innerHeight-20+"px";
document.getElementById("gameboard").style.width=window.innerWidth+"px";

maxH=window.innerWidth*0.64;
if  (window.innerHeight<maxH){maxH=window.innerHeight;}
document.getElementById("gameboard").style.height=maxH-20+"px";
document.getElementById("gameboard").style.width=window.innerWidth-20+"px";


document.getElementById("mymap").height=maxH-offs;
document.getElementById("mymap").width=(maxH-offs)*1.16;
document.getElementById("maptd").width=(maxH-offs)*1.16;
document.getElementById("td0").height=(maxH-offs)/6;
document.getElementById("td1").height=(maxH-offs)/8;
document.getElementById("td2").height=(maxH-offs)/8;
document.getElementById("td3").height=(maxH-offs)/8;
document.getElementById("td4").height=(maxH-offs)/12+8;
document.getElementById("td5").height=(maxH-offs)/5;


const rect = document.getElementById("subm").getBoundingClientRect();
document.getElementById("arrow").style.width="72px";
document.getElementById("arrow").style.height="120px";
document.getElementById("arrow").style.left=rect.right-(rect.right-rect.left)/2-36+"px";
document.getElementById("arrow").style.top=rect.top-110+"px";


document.getElementById("banner").style.width=window.innerWidth*0.9+"px";
document.getElementById("banner").style.height=maxH*0.9+"px";
//document.getElementById("banner").style.left=window.innerWidth*0.05-20+"px";
//document.getElementById("banner").style.top=maxH*0.05-20+"px";

document.getElementById("introim").style.height=window.innerHeight*0.82+"px";

//document.getElementById("intro").style.width=window.innerWidth*0.95+"px";
//document.getElementById("intro").style.height=innerHeight*0.96+"px";
//document.getElementById("intro").style.left=window.innerWidth*0.10-20+"px";
//document.getElementById("intro").style.top=maxH*0.05-20+"px";

}

function InitializeGame(){ 
   populate('nomoi', nomos); sortlist('nomoi'); 
   populate('poleis', prot); sortlist('poleis');
   populateP(); 
   shuffleMap();
   score=0;
   status=0;
   m=0;
   document.getElementById("myscore").innerHTML=score;
}
  
function showIntro(){
hideElem('gameboard');
hideElem('banner');
hideElem('menu');
hideElem('arrow');
showElem('intro');
FixGrid();
}

function ShowHeader(){
if (level<1){level=1;}
myL=level; 
document.getElementById("td6").innerHTML="Επίπεδο:&nbsp;<span class='score'>"+ myL + 

"</span>&nbsp;::&nbsp;Ερώτηση&nbsp;<span class='score'>" + m

+"/51</span>&nbsp;::&nbsp;Σκορ:&nbsp;<span class='score'>"+score+" </span>";
}

function changeLevel(l){
if (status==2){alert("Δεν μπορείτε να αλλάξετε το σκορ όσο εκκρεμεί απάντηση!");} else {level=l;}
}




function Init(s) {
hideElem('banner');
hideElem('intro');
hideElem('menu');
showElem('gameboard');

if (level==0){level=1;}
myL=level;
if (status==0){
	showElem('arrow');
	document.getElementById("nomoi").disabled=true;
	document.getElementById("poleis").disabled=true;
	document.getElementById("pper").disabled=true;
	document.getElementById("dsol").disabled=true;
        document.getElementById("td1").style.backgroundColor = '#323232';
        document.getElementById("td2").style.backgroundColor = '#323232';
        document.getElementById("td3").style.backgroundColor = '#323232';
        document.getElementById("subm").innerHTML="Ας Παίξουμε!";
        document.getElementById("td6").innerHTML="Επίπεδο:&nbsp;<span class='score'>"+ myL + 

"</span>&nbsp;-&nbsp;Έτοιμοι; Πατήστε 'Ας Παίξουμε!'";
	changeMap(0);
} else { 
	hideElem('arrow');
	document.getElementById("nomoi").disabled=false;
	document.getElementById("poleis").disabled=false;
	document.getElementById("pper").disabled=false;
	document.getElementById("dsol").disabled=false;
	ShowHeader();

}

FixGrid();

}

function handleSubm(){

if (level<1){level=1;}
myL=level;  


if (status==0 || status==1){

    hideElem('arrow');
    document.getElementById("td1").style.backgroundColor = '#3498db';
    document.getElementById("td2").style.backgroundColor = '#3498db';
    document.getElementById("td3").style.backgroundColor = '#3498db';
    document.getElementById("dsol").disabled=false;

    document.getElementById("nomoi").selectedIndex = "0";
    document.getElementById("poleis").selectedIndex = "0";
    document.getElementById("pper").selectedIndex = "0";

    m++;
    if (m<52){
       changeMap(rndRow[m]); 	
       status=2;
       if (myL<3){
	  rndInt=getRandomInt(1,2);
	  if (rndInt==1) {selectbyVl ('poleis',rndRow[m]);} else {selectbyVl ('nomoi',rndRow[m]);}
	  if (myL==1) {selectbyTx ('pper',perif[rndRow[m]]);}

	}
       document.getElementById("subm").innerHTML="Υποβολή απαντήσεων";
       document.getElementById("nomoi").disabled=false;
       document.getElementById("poleis").disabled=false;
       document.getElementById("pper").disabled=false;

	ShowHeader();


    }
    else {
	hideElem('gameboard');
	showElem('banner');
	status=0;
    } 
    return;
    }

if (status==2){

    myN=document.getElementById("nomoi").value;
    myP=document.getElementById("poleis").value;
    myD=document.getElementById("pper").value;

    if (myN==0||myP==0||myD==0) {
         alert ("Παρακαλώ συμπληρώστε όλα τα πεδία!"); return;
    }

    miniscore=0;
    if (perifs[myD]==perif[rndRow[m]]) {
       document.getElementById("td1").style.backgroundColor = '#7FFF00';
       miniscore++;
    }
    else {
       document.getElementById("td1").style.backgroundColor = 'red';
    }

    if (myN==rndRow[m]) {
       document.getElementById("td2").style.backgroundColor = '#7FFF00';
       miniscore++;
    }
    else {
       document.getElementById("td2").style.backgroundColor = 'red';
    }

    if (myP==rndRow[m]) {
       document.getElementById("td3").style.backgroundColor = '#7FFF00';
       miniscore++;
    }
    else {
       document.getElementById("td3").style.backgroundColor = 'red';
    }
    if (miniscore==3){score=Number(score)+Number(myL)*2-1; audioV.play();} else {audioX.play();};
    ShowHeader();
    
document.getElementById("myscore").innerHTML=score;
    if (score=='1'){document.getElementById("myscore2").innerHTML="βαθμό";} else 

{document.getElementById("myscore2").innerHTML="βαθμούς";}

    status=1;
    document.getElementById("subm").innerHTML="Επόμενο >>>";
    document.getElementById("nomoi").disabled=true;
    document.getElementById("poleis").disabled=true;
    document.getElementById("pper").disabled=true;

   }
}

function ShowSol(){
selectbyTx ('pper',perif[rndRow[m]]);
selectbyVl ('nomoi',rndRow[m]);
selectbyVl ('poleis',rndRow[m]);
document.getElementById("td1").style.backgroundColor = '#7FFF00';
document.getElementById("td2").style.backgroundColor = '#7FFF00';
document.getElementById("td3").style.backgroundColor = '#7FFF00';
document.getElementById("myscore").innerHTML=score;
status=1;
document.getElementById("subm").innerHTML="Επόμενο >>>";
document.getElementById("nomoi").disabled=true;
document.getElementById("poleis").disabled=true;
document.getElementById("pper").disabled=true;
document.getElementById("td6").innerHTML="Είναι ο&nbsp;<b>" + nomos[rndRow[m]] + "</b>";
}


function showMenu(){
	hideElem('gameboard');
	hideElem('arrow');
	showElem('menu');
}
