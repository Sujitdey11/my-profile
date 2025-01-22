// Select the button and surprise message
const button = document.getElementById('surpriseButton');
const surpriseMessage = document.getElementById('surpriseMessage');

// Add event listener to the button
button.addEventListener('click', () => {
    // Show the surprise message
    surpriseMessage.classList.remove('hidden');
    button.style.display = 'none'; // Hide the button after click
});