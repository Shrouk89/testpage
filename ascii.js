document.addEventListener("keydown", function (e) {
    alert(`Key: ${e.key} | ASCII Code: ${e.keyCode}`);

    if (e.altKey) {
        alert("Alt key is pressed");
    }
    if (e.ctrlKey) {
        alert("Ctrl key is pressed");
    }
    if (e.shiftKey) {
        alert("Shift key is pressed");
    }

    console.log(e.target); 
});
