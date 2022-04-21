let menuBtn = document.querySelector('#menu-btn');
let menuBox = document.querySelector('.sidebar');
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login');
let missionSection = document.querySelector('.mission');
let servicesSection = document.querySelector('.services');
let equipmentSection = document.querySelector('.equipment');
let roadSection = document.querySelector('.road');
let dirtSection = document.querySelector('.dirt');
let commuteSection = document.querySelector('.commute');
let electricSection = document.querySelector('.electric');
let communitySection = document.querySelector('.community');
let contactSection = document.querySelector('.contact');


menuBtn.onclick = () => {
    menuBox.classList.toggle('collapse');
    missionSection.classList.toggle('active');
    servicesSection.classList.toggle('active');
    equipmentSection.classList.toggle('active');
    roadSection.classList.toggle('active');
    dirtSection.classList.toggle('active');
    commuteSection.classList.toggle('active');
    electricSection.classList.toggle('active');
    communitySection.classList.toggle('active');
    contactSection.classList.toggle('active');
}

loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
}

window.onscroll = () => {
    loginForm.classList.remove('active');
}

// Dialog box
let modalOne = document.getElementById('modal-one');
let modalTwo = document.getElementById('modal-two');
let modalThree = document.getElementById('modal-three');
let modalFour = document.getElementById('modal-four');
let modalFive = document.getElementById('modal-five');
let modalSix = document.getElementById('modal-six');
let closeModal = document.querySelector('#modal-close')
let modal = document.querySelector('#modal');

modalOne.onclick = () => {
    modal.showModal();
}
modalTwo.onclick = () => {
    modal.showModal();
}
modalThree.onclick = () => {
    modal.showModal();
}
modalFour.onclick = () => {
    modal.showModal();
}
modalFive.onclick = () => {
    modal.showModal();
}
modalSix.onclick = () => {
    modal.showModal();
}
closeModal.onclick = () => {
    modal.close();
}