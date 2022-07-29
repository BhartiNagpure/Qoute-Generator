var qoute= document.querySelector(".qoute");
var source =document.querySelector(".source");
var btn =document.querySelector(".btn");

const url =("https://api.quotable.io/random");


let getQoute = ()=>{
 fetch(url)
 .then((data) => data.json())
 .then((item) => {
    // console.log(item.content);
    // console.log(item.author);
    qoute.innerHTML = item.content;
    source.innerHTML = item.author;
 })
}

window.addEventListener("load",getQoute);

btn.addEventListener("click",getQoute);