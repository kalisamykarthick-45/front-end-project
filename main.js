/* ==========================
   Contact Form Submission
========================== */

function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById("contactForm");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Simulate form submission
    const submitBtn = form.querySelector(".submit-btn");
    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.innerHTML = "Message Sent ✓";
        submitBtn.style.background = "#28a745";

        form.reset();

        setTimeout(() => {
            submitBtn.innerHTML = "Send Message";
            submitBtn.disabled = false;
            submitBtn.style.background = "";
        }, 3000);
    }, 1500);
}

/* ==========================
   FAQ Accordion Toggle
========================== */

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector(".faq-answer");

    faqItem.classList.toggle("active");

    if (faqItem.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
        answer.style.maxHeight = null;
    }
}

/* ==========================
   Cart Toggle (Demo)
========================== */

function toggleCart() {
    alert("Cart feature coming soon!");
}



/* ==========================
   Map Overlay Click
========================== */

const mapOverlay = document.querySelector(".map-overlay");

if (mapOverlay) {
    mapOverlay.addEventListener("click", () => {
        window.open(
            "https://www.google.com/maps/search/?api=1&query=Gandhipuram+Coimbatore",
            "_blank"
        );
    });
}

/* ==========================
   Smooth Scroll (Optional)
========================== */

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            ?.scrollIntoView({ behavior: "smooth" });
    });
});
