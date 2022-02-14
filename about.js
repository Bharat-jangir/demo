const upcomingbtn = document.querySelector('#upcomingbtn');
const livebtn = document.querySelector('#livebtn');
const finishedbtn = document.querySelector('#finishedbtn')


const upcoming = document.querySelector('#upcoming');
const live = document.querySelector('#live');
const finished = document.querySelector('#finished')

upcomingbtn.addEventListener('click', function () {
    live.style.display = "none";
    finished.style.display = "none";
    upcoming.style.display = "block";
    livebtn.style.borderBottom = "";
    livebtn.style.backgroundColor = "";
    finishedbtn.style.backgroundColor = ""
    finishedbtn.style.borderBottom = ""

    upcomingbtn.style.borderBottom = "2px solid white"
    upcomingbtn.style.backgroundColor = "red"






})
livebtn.addEventListener('click', function () {
    upcoming.style.display = "none";
    finished.style.display = "none";
    live.style.display = "block";

    upcomingbtn.style.backgroundColor = ""
    upcomingbtn.style.borderBottom = ""
    finishedbtn.style.backgroundColor = ""
    finishedbtn.style.borderBottom = ""

    livebtn.style.backgroundColor = "red"
    livebtn.style.borderBottom = "2px solid white"








})
finishedbtn.addEventListener('click', function () {
    upcoming.style.display = "none";
    live.style.display = "none";
    finished.style.display = "block";
    upcomingbtn.style.backgroundColor = ""
    livebtn.style.backgroundColor = ""
    livebtn.style.borderBottom = ""
    upcomingbtn.style.borderBottom = ""

    finishedbtn.style.backgroundColor = "red"
    finishedbtn.style.borderBottom = "2px solid white"







})
upcomingbtn.click()



const bjb=document.querySelectorAll("#upcoming");
console.log(bjb)
bjb.forEach(function(element){
    this.addEventListener('click',function(){
        console.log("manish")
    })
})