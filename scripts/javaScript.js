const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const openModalButton = document.querySelector("#open-modal-button");
const editProfileForm = document.querySelector("#edit-profile-form");
const nameInput = editProfileForm.name;
const descriptionInput = editProfileForm.description;
const editProfileSubmit = editProfileForm.querySelector("button[type=submit]");
const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");

/*open modal*/
function openFormModal() {
  openModalButton.addEventListener("click", ()=> {
    editProfileModal.classList.add("modal_open");
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  });
}

/*submit to change content in profile name & description */
function saveFormInput() {
  editProfileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    editProfileModal.classList.remove("modal_open");
  });
}

/*close modal by clicking close-button or outside modal*/
function closeFormModal() {
  editProfileCloseButton.addEventListener("click", () => {
    editProfileModal.classList.remove("modal_open");
  });
  editProfileModal.addEventListener("click", (e) => {
    if (e.target === editProfileModal) {
      editProfileModal.classList.remove("modal_open");
    }
  });
}

openFormModal();
saveFormInput();
closeFormModal();
