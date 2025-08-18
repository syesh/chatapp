function mysubmit() {
let name=document.getElementById("nam").value;
let message=document.getElementById("mes").value;
let newpara=document.createElement("p");
newpara.innerHTML=name+" : "+message;
document.getElementById("chat").appendChild(newpara);
}