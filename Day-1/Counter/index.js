let cnt=0;
let counter=document.querySelector(".counter");

let dec=document.querySelector(".decrease");
let res=document.querySelector(".reset");
let inc=document.querySelector(".increase");

dec.addEventListener("click",()=>{

    cnt-=1;

    counter.innerHTML=`${cnt}`;
})

res.addEventListener("click",()=>{

    cnt=0;

    counter.innerHTML=`${cnt}`;
})

inc.addEventListener("click",()=>{

    cnt+=1;
 
    counter.innerHTML=`${cnt}`;
})

