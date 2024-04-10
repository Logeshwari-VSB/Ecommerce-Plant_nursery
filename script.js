document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Show success message
        successMessage.style.display = "block";

        // Reset form after 3 seconds
        setTimeout(function() {
            contactForm.reset();
            successMessage.style.display = "none";
        }, 3000);
    });
});

