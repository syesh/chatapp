
window.onload = function () {
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.forEach(msg => {
        let newpara = document.createElement("p");
        newpara.innerHTML = msg;
        document.getElementById("chat").appendChild(newpara);
    });
};

function mysubmit() {
    let name = document.getElementById("nam").value;
    let message = document.getElementById("mes").value;
    let newpara = document.createElement("p");
    newpara.innerHTML = name + " : " + message;
    document.getElementById("chat").appendChild(newpara);
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push(name + " : " + message);
    localStorage.setItem("chatMessages", JSON.stringify(messages));
}
function mysubmit() {
    let name = document.getElementById("nam").value;
    let message = document.getElementById("mes").value;
    let newpara = document.createElement("p");
    newpara.innerHTML = name + " : " + message;
    document.getElementById("chat").appendChild(newpara);
}