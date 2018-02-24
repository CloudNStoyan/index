const nameSearchBtn = document.getElementById("name-submit");
const input = document.getElementById("name-input");
const profileBox = document.getElementById('profile-information');
const currentSoloQueueRank = document.getElementById('solo-queue');
const currentFlexQueueRank = document.getElementById('flex-queue');


nameSearchBtn.addEventListener('click',function (e) {
    e.preventDefault();
    if (input.value !== " ") {   console.log(input.value); }
    input.value = "";
});


currentSoloQueueRank.addEventListener('mouseover',function () {
    console.log('Wow');
    currentFlexQueueRank.style.display = 'block';
});
