//DOMContentLoaded to prevent error on unloaded content
document.addEventListener('DOMContentLoaded', function() {
    // Create an "li" node:
    const node = document.createElement("li");

    // Create a text node:
    const textnode = document.createTextNode("is it working?!");
    const textnode2 = document.createTextNode("the second one!");

    // Append the text node to the "li" node:
    node.appendChild(textnode);
    node.appendChild(textnode2)

    // Append the "li" node to the list:
    document.getElementById("root").appendChild(node);
});



