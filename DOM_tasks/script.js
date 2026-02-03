const task1 = document.getElementById("profile");
task1.style.backgroundColor = "#f5f5f5";
task1.style.padding = "15px";
task1.style.textAlign = "center";

const task2 = document.getElementsByClassName("a");
for (let i = 0; i < task2.length; i++) {
    task2[i].style.color = "red";
    task2[i].style.fontSize = "20px";
}
console.log(task2.length);

const task3 = document.getElementsByTagName("p");
for (let i = 0; i < task3.length - 1; i++) {
    if (i % 2 === 0) { task3[i].style.color = "blue"; }
    else { task3[i].style.color = "green" ;}
}
task3[task3.length - 1].style.fontWeight = "bold";

const task4 = document.querySelector(".box");
task4.style.backgroundColor = "tomato";
task4.textContent = "I am first box";