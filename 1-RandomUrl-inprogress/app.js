var url = "https://meet.google.com/";

var randomNo1,randomNum2,randomNo3,randomNo4,randomUrl;

randomNo1 = Math.random() * 100000000;

randomNo2 = randomNo1 | 0;

randomNo4 = randomNo2;

randomNo3 = randomNo2;

while(randomNo3 < 10000000)
{

if(randomNo2 < 10){
    randomNo3 = randomNo2 * 10000000;
}
else if(randomNo2 < 100){
   
    randomNo3 = randomNo2 * 1000000;
}
else if(randomNo2 < 1000){
   
    randomNo3 = randomNo2 * 100000;
}
else if(randomNo2 < 10000){
   
    randomNo3 = randomNo2 * 10000;
}
else if(randomNo2 < 100000){
   
    randomNo3 = randomNo2 * 1000;
}
else if(randomNo2 < 1000000){
   
    randomNo3 = randomNo2 * 100;
}
else{
   
    randomNo3 =randomNo2 * 10;
}

}




randomUrl = url + randomNo3;

console.log(url+randomNo4);

console.log(url+randomNo3);

var element = document.getElementById('random-url');

element.innerHTML = randomUrl;

element.setAttribute('href',randomUrl);
