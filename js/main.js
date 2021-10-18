// grab the navbar element
// const navbar = document.getElementById('nav');
// const toggleBtn = document.querySelector('.toggle');

// toggleBtn.addEventListener('click', showNavbar);

// function showNavbar() {
//     // check fpr the toggle functionality
//     if (navbar.style.display === 'none') {
//         navbar.style.display = 'block';
//     } else {
//         navbar.style.display = 'none'
//     };
// }

//Get the button:
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// modal
const modal = document.querySelector(".modal");
const trigger = document.querySelector("#request");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// validate the input fields
// const inputFields = document.querySelectorAll('.input-field');
// const submitBtns = document.querySelectorAll('submit-btn');

// submitBtns.forEach((btn) => {
//     btn.addEventListener('click', showError);

//     function showError() {
//         inputFields.forEach((field) => {
//             if (field.value == "") {
//                 alert('fill in the fields');
//             }
//         })
//     }
// });

// add the function to the price cards

const priceCards = document.querySelectorAll('.card-btn');

// loop through the cards
priceCards.forEach((card) => {
    card.addEventListener('click', toggleModal);
});


// validate the contact form

const contactBtn = document.getElementById('submit-btn');
const formInputs = document.querySelectorAll('.form-input');
const form = document.getElementById('form');

form.addEventListener('submit', validateForm);

function validateForm(event){
    
    event.preventDefault();
    formInputs.forEach((input) =>{
        if(input.value == ""){
           let alertText= document.createElement('p').innerHTML=`${input.value} field can not be empty!`
        //    console.log(alertText);
        form.appendChild(alertText);

        }
    })
}