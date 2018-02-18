const nameSearchBtn = document.getElementById("name-submit");
const input = document.getElementById("name-input");
const dropMenuBtn = document.getElementsByClassName("dropbtn");

nameSearchBtn.addEventListener('click',function () {
   console.log(input.value);
    input.value = " ";
});


