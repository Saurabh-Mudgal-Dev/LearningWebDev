const task1 = document.getElementById("profile");
task1.style.backgroundColor = "#f5f5f5";
task1.style.padding = "15px";
task1.style.textAlign = "center";

const task2 = document.getElementsByClassName("a");
for (let i = 0; i < task2.length; i++){
    task2[i].style.color = "red";
    task2[i].style.fontSize = "20px";
}
console.log(task2.length);