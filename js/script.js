const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const type = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();

        const subject = encodeURIComponent(`Amber's Braids: ${type}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nMessage type: ${type}\n\nMessage:\n${message}`
        );

        document.getElementById("contactStatus").textContent =
            "Your email app should open with the message ready to send.";

        window.location.href =
            `mailto:koketsokhunoana@gmail.com?subject=${subject}&body=${body}`;
    });
}

// Enquiry form 
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let service = document.getElementById("enqService").value;
        let price = 180; // Default price
        if (service === "Knotless Braids") price = 180;
        if (service === "Goddess Braids") price = 180;
        if (service === "Island Twist") price = 180;
        if (service === "Twisted locks") price = 200;
        if (service === "Natural Hair Treatment") price = 50;

        document.getElementById("enqResponse").innerHTML =
        "<p>Thank you for your enquiry! " + service + " will cost approx R" + price + ". We will confirm availability.</p>";
    });
}

// Search Filter
function searchProducts() {
    let filter = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".shop-card");
    cards.forEach(function(card) {
        let title = card.querySelector("h3").innerText.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

//Lightbox
function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}   
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

//Accordion
function toggleAccordion(id) {
    let el = document.getElementById(id);
    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";
    }
}