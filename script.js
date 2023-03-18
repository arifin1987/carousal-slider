const images =[
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
]

let imgIndex = 0;
const imgEl = document.getElementById('my-slider');




setInterval(()=>{
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    

    imgEl.setAttribute('src', imgUrl );
    imgIndex++;

}, 1000);






