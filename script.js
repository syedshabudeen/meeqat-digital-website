const form = document.querySelector("#enquiryForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const service = document.querySelector("#service").value;
  const message = document.querySelector("#message").value.trim();

  const text = [
    "New enquiry for Meeqat Digital Consulting",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Requirement: ${message}`
  ].join("\n");

  const whatsappUrl = `https://wa.me/919629047680?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank", "noopener");
});
