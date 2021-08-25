function getElement() {
    new_window = window.open("");
    new_window = document.open();

var studentName = document.getElementsByName("studentName");

new_window.document.write("Length of your name is " + studentName.length);
new_window.document.close();
}