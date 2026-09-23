// WhatsApp Button

function sendWhatsApp() {

    let phone = "919789398717";

    let message =
        "Hello Ganesh Tiles,%0A%0A" +
        "I am interested in your tile services.%0A" +
        "Please share details and pricing.";

    let url =
        "https://wa.me/" + phone +
        "?text=" + message;

    window.open(url, "_blank");
}


// Enquiry Form

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name =
        document.getElementById("name").value;

    let phone =
        document.getElementById("phone").value;

    let work =
        document.getElementById("work").value;

    let message =
        document.getElementById("message").value;

    let whatsappMessage =
        "Hello Ganesh Tiles,%0A%0A" +

        "Name: " + name + "%0A" +

        "Phone: " + phone + "%0A" +

        "Tile Work: " + work + "%0A" +

        "Requirement: " + message;

    let whatsappNumber = "919789398717";

    let whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage;

    window.open(whatsappURL, "_blank");

    document.getElementById("contactForm").reset();

});