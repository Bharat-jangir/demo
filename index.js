// pre loder page is starts here

window.addEventListener(onload, preloader())


 function preloader() {
    setTimeout(function () {
     document.querySelector("#preloadpage").style.display = "none";

    }, 3500)
}
// pre loder page is ends here

const logo=document.getElementById("logo");
logo.addEventListener('click',()=>{
    window.location.href="index.html";


})


// here is the typesbtn functions starts

function first() {
    var bgimag = document.getElementById("bgimages");
    bgimag.style.display = "none";
    var second = document.getElementById("second");
    second.style.display = "none";
    var third = document.getElementById("third");
    third.style.display = "none";
    var fourth = document.getElementById("fourth");
    fourth.style.display = "none";
    var fifth = document.getElementById("fifth");
    fifth.style.display = "none";
    var sixth = document.getElementById("sixth");
    sixth.style.display = "none";
    var first = document.getElementById("first");
    first.style.display = "block";
    first.style.display = "flex";

}

function second() {
    var bgimag = document.getElementById("bgimages");
    bgimag.style.display = "none";
    var first = document.getElementById("first");
    first.style.display = "none";
    var third = document.getElementById("third");
    third.style.display = "none";
    var fourth = document.getElementById("fourth");
    fourth.style.display = "none";
    var fifth = document.getElementById("fifth");
    fifth.style.display = "none";
    var sixth = document.getElementById("sixth");
    sixth.style.display = "none";
    var second = document.getElementById("second");
    second.style.display = "block";
    second.style.display = "flex";

}

function third() {
    var bgimag = document.getElementById("bgimages");
    bgimag.style.display = "none";
    var second = document.getElementById("second");
    second.style.display = "none";
    var first = document.getElementById("first");
    first.style.display = "none";
    var fourth = document.getElementById("fourth");
    fourth.style.display = "none";
    var fifth = document.getElementById("fifth");
    fifth.style.display = "none";
    var sixth = document.getElementById("sixth");
    sixth.style.display = "none";
    var third = document.getElementById("third");
    third.style.display = "block";
    third.style.display = "flex";

}

function fourth() {
    var bgimag = document.getElementById("bgimages");
    bgimag.style.display = "none";
    var second = document.getElementById("second");
    second.style.display = "none";
    var third = document.getElementById("third");
    third.style.display = "none";
    var first = document.getElementById("first");
    first.style.display = "none";
    var fifth = document.getElementById("fifth");
    fifth.style.display = "none";
    var sixth = document.getElementById("sixth");
    sixth.style.display = "none";
    var fourth = document.getElementById("fourth");
    fourth.style.display = "block";
    fourth.style.display = "flex";

}

function fifth() {
    var bgimag = document.getElementById("bgimages");
    bgimag.style.display = "none";
    var second = document.getElementById("second");
    second.style.display = "none";
    var third = document.getElementById("third");
    third.style.display = "none";
    var fourth = document.getElementById("fourth");
    fourth.style.display = "none";
    var first = document.getElementById("first");
    first.style.display = "none";
    var sixth = document.getElementById("sixth");
    sixth.style.display = "none";
    var fifth = document.getElementById("fifth");
    fifth.style.display = "block";
    fifth.style.display = "flex";

}

function sixth() {
    var bgimag = document.getElementById("bgimages");
    bgimag.style.display = "none";
    var second = document.getElementById("second");
    second.style.display = "none";
    var third = document.getElementById("third");
    third.style.display = "none";
    var fourth = document.getElementById("fourth");
    fourth.style.display = "none";
    var fifth = document.getElementById("fifth");
    fifth.style.display = "none";
    var first = document.getElementById("first");
    first.style.display = "none";
    var sixth = document.getElementById("sixth");
    sixth.style.display = "block";
    sixth.style.display = "flex";

}


// here is the typesbtn functions ends





// image preview function..........................


const images = document.querySelectorAll(".bgs");
images.forEach((element) => {
    element.addEventListener('click', function () {
        let imgsrc = this.src;
        let imgscroll=document.documentElement.scrollTop;

        let previewimgsrc = document.getElementById("preViewImg");
        let previewdiv = document.getElementById("previewimgdiv");
        previewdiv.style.display = "block";
        previewdiv.style.display = "flex";

        previewimgsrc.setAttribute("src", imgsrc)


        document.querySelector(".fa-close").addEventListener('click', function () {
            previewdiv.style.display = "none";
        document.documentElement.scrollTop=imgscroll;
    
    })
        document.documentElement.scrollTop=0;

   
        let download=document.getElementById("previewimgdwl");
        download.addEventListener('click',function(){
          let anchor=document.createElement("a");
          anchor.setAttribute('href',imgsrc)
          let g=anchor.setAttribute('download',imgsrc)
          console.log(anchor);
        //   document.body.appendChild(anchor);
          anchor.click();
        //   document.body.removeChild()
          
        })

    });

});

// image preview function..........................





// hambruger function........................\\\\\

const hambruger=document.getElementById("hambruger");
hambruger.addEventListener('click',function(){
 let hambd=document.getElementById('hambd');
 hambd.style.display="block";
 hambd.style.display="flex";

 let hambdclose=document.getElementById('hambdclose');
 hambdclose.addEventListener('click',function(){
     hambd.style.display="none";
 })



})
// hambruger function........................\\\\\

// gotop function......
const gotop=document.getElementById('gotop');
gotop.addEventListener('click',function(){
         document.documentElement.scrollTop=0;
         
         



})


// gotop function......


