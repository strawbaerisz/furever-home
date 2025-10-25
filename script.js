document.addEventListener("DOMContentLoaded", () => {
  const detailsContainer = document.getElementById("submitted-details");

  if (detailsContainer) {
    const params = new URLSearchParams(window.location.search);

    const name = params.get("name") || "Not Provided";
    const contact = params.get("contact") || "Not Provided";
    const email = params.get("email") || "Not Provided";
    const address = params.get("address") || "Not Provided";
    const petName = params.get("pet") || "Not Provided";
    const petType = params.get("pet-type") || "Not Selected";
    const reason = params.get("reason") || "No reason given.";

    const output = `
      <h2>Submitted Information</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Pet Name:</strong> ${petName}</p>
      <p><strong>Pet Type:</strong> ${petType}</p>
      <p><strong>Reason:</strong> ${reason}</p>
    `;

    detailsContainer.innerHTML = output;
  }
});
