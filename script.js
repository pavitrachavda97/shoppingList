var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

for(var i = 0; i < deleteBtns.length; i++)
{
	deleteBtns[i].addEventListener("click", removeParent, false);
}

function removeParent(evt) 
{
    evt.target.removeEventListener("click", removeParent, false);
    evt.target.parentNode.remove();
}

// Check length of input and return it.
function inputLength()
{
	return input.value.length;
}

// Add item to the list.
function createListElement() 
{ 
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
}

// Add item to list after user click on "enter item"
function addToListAfterClick()
{
	if(inputLength() > 0)
    {
		createListElement();
    }
}

// Add item to list after user click on enter tab on keyboard
function addToListAfterKeypress(event)
{
	if(inputLength() > 0 && event.keyCode === 13) 
    {
		createListElement();
	}
}

// listen to event occure of click on "enter item"
button.addEventListener("click", addToListAfterClick);

// listen to event occure of click on enter tab on keyboard
input.addEventListener("keypress", addToListAfterKeypress);