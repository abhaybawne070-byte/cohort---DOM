var btn=document.querySelector("button");
var inner=document.querySelector(".inner");
var h1=document.querySelector("h1");
var grow=0;

btn.addEventListener('click',function(){
    btn.style.pointerEvents="none";
    
    var num=50+Math.floor(Math.random()*50)
    console.log('your download speed is',num/10, 'seconds');

    var int=setInterval(function(){
        grow++;
        inner.style.width=grow+"%";
        h2.innerText=grow+"%";
    },num)
    setTimeout(function(){
        clearInterval(int);
        h2.innerHTML="Download complete";
        btn.style.opacity="0.5";
    },num*100)
})