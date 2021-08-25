// function getElement() {
//     new_window = window.open("");
//     new_window = document.open();

// var studentName = document.getElementsByName("studentName");

// new_window.document.write("Length of your name is " + studentName.length);
// new_window.document.close();
// }

// let element = document.getElementById("root");
// const element = document.getElementById("blog");
// console.log("Hello from index.js");
// console.log(element);
// const element1 = document.getElementById("fg")
// const element2 = document.getElementById("er")
// const element3 = document.getElementById("wa")
// console.log(element1);
// console.log(element2);
// console.log(element3);

document.body.onload = addElement

function addElement() {
    const newTag = document.createElement("div");

    const newText = document.createTextNode("Hello new tag");

    newTag.appendChild(newText);

    newTag.setAttribute("id", "newAttr")

    const rootTag = document.getElementById("root");

    document.body.insertBefore(newTag, rootTag);

    newTag.remove();
}