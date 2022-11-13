const modal = document.querySelector(".modal");
const modalCont=document.querySelector(".modalContent");
var modalImg =document.querySelector(".modalContent img");
const EDI= document.getElementById("L");
const Content= document.getElementById("Content");
const exit = document.querySelector(".Exit img");
const Navheight =document.querySelector('.navbar').offsetHeight;



document.documentElement.style.setProperty('--scroll-padding',Navheight+ -2 +"px");

const sections = document.querySelectorAll('section');
const navLi= document.querySelectorAll('  .navbar ul li')


window.addEventListener('scroll',()=>{
        let current = '';
        sections.forEach(section =>{
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        if ( scrollY >= sectionTop - sectionHeight/5){
                current = section.getAttribute('id');
        }
        })

        navLi.forEach( li => {
            li.classList.remove('active');
            if(li.classList.contains(current)){
                li.classList.add('active')
            }
        })
})

var body = document.body,timer;
window.addEventListener('scroll', function() {
   clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
   timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  },100);
}, false);
window.onclick = function(event)
{
  if (event.target == exit) {
    modal.style.display = "none";
  }
}
function showFunction(pathmodalimage)
{

        var orgiginalSrc =  pathmodalimage;
        modalImg.src =`${orgiginalSrc}`
        modal.style.display = ("inline-flex");
};
function seturl(link)
{
        EDI.setAttribute("href", link);
}
function settext(link)
{
        Content.innerHTML = link;
        Content.setAttribute("")
}
