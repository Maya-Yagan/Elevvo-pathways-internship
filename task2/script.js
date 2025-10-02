const form = document.getElementById('contactForm');
const dialog = document.getElementById('successDialog');
const closeBtn = document.getElementById('closeDialog');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let isValid = true;

    // Validation
    const name = document.getElementById('fullName').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Full Name is required';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email';
        isValid = false;
    }

    const subject = document.getElementById('subject').value.trim();
    if (subject === '') {
        document.getElementById('subjectError').textContent = 'Subject is required';
        isValid = false;
    }

    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    }

    if (isValid) {
        form.reset();
        dialog.showModal(); // Show the dialog
    }
});

// Close the dialog when button is clicked
closeBtn.addEventListener('click', () => {
    dialog.close();
});
