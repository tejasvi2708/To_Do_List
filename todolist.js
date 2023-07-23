const inputBox=document.getElementById("inputarea");
const  listcontainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something !!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value+`<button id="checked" class="btn" onclick="edit(this)">Done</button>
        <button id="delete" onclick="remove(this)">Remove</button>`;
        listcontainer.appendChild(li);

    }
    inputBox.value="";
    saveData();
}
   listcontainer.addEventListener('click',remove);  

   function remove(e){
        e.parentElement.remove();
        saveData();
}
listcontainer.addEventListener('click',edit);
function edit(e){
      if(e.textContent=='Done'){
        e.textContent="Completed";
      }
      saveData();
}

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);

}
function display(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
display();