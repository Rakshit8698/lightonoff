const btn1=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");
const image=document.getElementById("myImage");

// image.setAttribute("src","lightonpic.jpg");
// console.log(image.getAttribute("src"));

btn1.addEventListener("click",()=>{
        image.setAttribute("src","lightonpic.jpg");   
})
btn2.addEventListener("click",()=>{
        image.setAttribute("src","lightoffpic.jpg");   
})