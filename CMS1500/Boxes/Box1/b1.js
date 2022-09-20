const openModalButtons = document.querySelectorAll('[data-modal-target]')
const infoClose = document.querySelectorAll('[info-close-button]')
const content=document.getElementsByClassName('.NM')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const allNM = document.getElementsByClassName('.NM.active')



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    const modal = document.querySelector(button.dataset.modalTarget)
    
    openModal(modal)


  })
})


overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal') 
    closeModal(modal)
    
  })
})


function openModal(modal) {
 if (modal == null) return
    
  modal.classList.add('active')
  overlay.classList.add('active')
 
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
  const Cont = document.getElementById('InfoC')
  Cont.textContent = "";
  
}
window.onclick=function(e)
{
   
   
    if(e.target.className === '.NM.active')
    {
        e.target.style.display = "none";
    }
    
}


function SetdivContent(Any)
{   

    const Info = document.querySelector(Any);
    const Tinfo = Info.textContent
    const Cont = document.getElementById('InfoC')
    Cont.textContent = Tinfo;
   
    
    console.log(Tinfo)


   
}