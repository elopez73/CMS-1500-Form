const modal = document.querySelector(".modal");
const modalCont=document.querySelector(".modalContent");
var modalImg =document.querySelector(".modalContent img");
const EDI= document.getElementById("L");
const exit = document.querySelector(".Exit img");




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



  


