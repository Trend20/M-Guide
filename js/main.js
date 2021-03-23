//Get the button:
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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


// callback modal
const callbackBtn = document.getElementById('request');

// add eventListner

callbackBtn.addEventListener('click', showModal);

// declare the showMOdal function

const showModal = () =>{

    let modalContainer = document.createElement('div');
    modalContainer.innerHTML = `
      <h3><b>Request</b> a Callback</h3>
      <p>We can call you in 30 seconds, just enter your number.</p>
      <form id="request-form">
        <input type="text" placeholder=" Name*" />
        <br />
        <input type="tel" placeholder="Phone*" />
        <br />
        <button type="submit"> Request </button>
      </form>
    `;
}
