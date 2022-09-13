const modal = document.querySelector(".modal");
const modalCont=document.querySelector(".modalContent");
var modalImg =document.querySelector(".modalContent img");
const EDI= document.getElementById("L");
const Content= document.getElementById("Content");
const exit = document.querySelector(".Exit img");
const Navheight =document.querySelector('.navbar').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding',Navheight+ -2 +"px");

/*Boxes*/


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
}



  


