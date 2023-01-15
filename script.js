

const tennis = document.getElementById("tennis");
tennis.addEventListener("mouseover",(event) =>
{ tennis.style.marginLeft = "15%"
    console.log(event);
    console.log(event.currentTarget);
    tennis.style.marginTop = "10%"
    
});
const img =document.querySelector('#tennis')
const reactionImgClick = ()=>{
    img.classList.toggle('big')
}
img.addEventListener("click",reactionImgClick)
const brasil = document.querySelector('#brazil')
brasil.insertAdjacentHTML( "beforeend"," RIP le roi pélé")

 const france = document.querySelector('#france')
france.addEventListener("click",()=>{
france.style.backgroundColor ="blue"
 for(let i = 0; i < 15; i = i + 1){ }
 
setInterval(   ()=>{
    const randomColor =Math.floor(Math.random()*16777215).toString(16);
    france.style.backgroundColor ='#${randomColor}'
    

},1500)


})
const titre = document.getElementById("titre");
titre.addEventListener("mouseover",(event) =>
{ titre.style.marginLeft = "30%"
    console.log(event);
    console.log(event.currentTarget);
    titre.style.marginTop = "10%"
    
});
const h1 = document.querySelector('#titre')
h1.insertAdjacentHTML( "beforeend","Voici mon site animé")

const foot = document.getElementById("foot");
foot.addEventListener("click",(event) =>
{ foot.style.marginLeft = "85%"
    console.log(event);
    console.log(event.currentTarget);
    foot.style.paddingRight = "10%" })
    