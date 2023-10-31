
let btn=document.querySelector(".add-btn");
let taskdiv=document.querySelector(".todo-items");
let inputBox=document.querySelector(".input-box");

btn.addEventListener("click",()=>{

    if(inputBox.value===''){

        alert("Please add some task first");
    }

    else{


        let li=document.createElement("li");
        li.innerHTML=inputBox.value[0].toUpperCase()+inputBox.value.slice(1);
        taskdiv.appendChild(li);
        let closeIcon=document.createElement("span");
        closeIcon.innerHTML="close";
        closeIcon.setAttribute("class","material-symbols-outlined");
        li.appendChild(closeIcon);
        

    }

inputBox.value=""; 
saveData();


})

taskdiv.addEventListener("click",(e)=>{

   

    if(e.target.tagName==="LI"){

       //toggle is basically used if to set the class is not present ,if present remove it
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){

        e.target.parentElement.remove();
        saveData();
    }
})

//To save the data in the browser local storage
function saveData(){

    localStorage.setItem("data",taskdiv.innerHTML);
}

//To access data

function showTask(){

    taskdiv.innerHTML = localStorage.getItem("data");

}

showTask();
