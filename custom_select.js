var dd = document.querySelector('.label span');
var options = document.querySelectorAll('.select-menu li');
console.log(options)
for (var i = 0; i < options.length; i++) {
    options[i].onclick = select;
}

function show() {
    var selectbox = document.getElementById("options");
    if (selectbox.className == "hidden") {
        selectbox.setAttribute("class", "visible");
    } else {
        selectbox.setAttribute("class", "hidden");
    }
}

function select() {
    console.log(this.innerHTML);
    dd.innerHTML = this.innerHTML;
}