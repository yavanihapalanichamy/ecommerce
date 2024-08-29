alert("place your order");

const todotext=document.getElementById("todo-text");

function addTask(){
    if(todotext.value.trim()===""){
        alert("enter some text");
    }
    else{
        console.log(todotext.value.trim());
    }
}