var enterButton=document.getElementById("addbutton");
var inputText = document.getElementById("inputText");

var ul=document.querySelector("ul");

//var item=document.

function addToListAfterClick(){
var li= document.createElement(li);
li.appendChild(document.createTextNode(inputText.value));
ul.appendChild(li);
inputText.value="";

var crossout=document.createElement("button");
crossout.appendChild(document.createTextNode("X"));
li.appendChild(crossout);

crossout.addEventListener("click",deleteItem);

function deleteItem(){
    li.style.display="none";
  //  li.classList.toggle("done");
}
};

