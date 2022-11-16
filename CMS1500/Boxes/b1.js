const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

const setInfo = document.querySelectorAll("[data-info-target]");
const classBod = document.getElementsByClassName(".modal-body.active");

openModalButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);
		openModalButtons.forEach((button) => {
			button.addEventListener("click", () => {
				const modal = document.querySelector(button.dataset.modalTarget);
				const info = document.getElementById(button.dataset.infoTarget);
        if(info != null)
        {
          modal.textContent = info.textContent;
        }
				
			});
		});
	});
});

closeModalButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const modal1 = button.closest(".modal");
		closeModal(modal1);
		const modal2 = document.getElementsByClassName("modal-body active")[0];
		const info1 = " ";
		if(modal2 != null)
		{
			modal2.textContent = info1;
		}
    closeModal(modal2)
	});
});

overlay.addEventListener("click", () => {
	const modals = document.querySelectorAll(".modal.active");
	modals.forEach((modal) => {
		closeModal(modal);
	});
});

function openModal(modal) {
	if (modal == null) return;
	modal.classList.toggle("active");
	overlay.classList.add("active");
  console.log(modal);
}

function closeModal(modal) {
	if (modal == null) return;

	modal.classList.remove("active");
	overlay.classList.remove("active");
}
