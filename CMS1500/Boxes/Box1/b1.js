const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


const setInfo = document.querySelectorAll('[data-info-target]') 
const classBod = document.getElementsByClassName('.modal-body.active')



openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
    
    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      const info =  document.getElementById(button.dataset.infoTarget)
      
      modal.textContent = info.textContent
      console.log(modal)
      console.log(info)
        
  })    
  })
  })    
  })
  




closeModalButtons.forEach(button => {
  button.addEventListener('click', () => { 
    
    
    const modal = button.closest('.modal') 
    
    closeModal(modal)
    

  
  })
})
 



  


overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})


function openModal(modal)
 {
  
  
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal)
 {
  
 
  if (modal == null) return
  
  modal.classList.remove('active')
  overlay.classList.remove('active')
  
 }






