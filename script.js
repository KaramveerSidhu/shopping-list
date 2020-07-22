var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButtons = document.getElementsByClassName("delete");

console.log(deleteButtons)

function inputLength(){
	return input.value.length;
}

function addElement(){
		var li = document.createElement("li");
		var bt = document.createElement("button");
		bt.classList.add("delete");
		bt.appendChild(document.createTextNode("Delete"));
		li.appendChild(document.createTextNode(input.value + " "));
		li.appendChild(bt);
		ul.appendChild(li);
		input.value="";
		console.log(deleteButtons);
		bt.addEventListener("click", deleteElement);

}

function addAfterClick(){
	if ( inputLength() > 0){
		addElement();
	}
}

function addAfterPress(event) {
	if ( inputLength() > 0 && event.charCode === 13){
		addElement();
	}
}

function strikeThrough(event) {
    event.target.classList.toggle("done");
}

function deleteElement(event){
	event.target.parentElement.remove();
}

button.addEventListener("click", addAfterClick);

ul.addEventListener("click", strikeThrough);

input.addEventListener("keypress", addAfterPress);

for (var i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", deleteElement);
}