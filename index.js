// Accessing node from DOM with getElementByID.
var lastLine = document.getElementById("id");

// Changing text of the node.
lastLine.textContent = "Byy World!";

// Changing tag of the node.
lastLine.innerHTML = '<a href="https://www.google.com">google.com</a>';

// Applying style to node element.
lastLine.style.backgroundColor = 'red'

console.log(lastLine.textContent);
