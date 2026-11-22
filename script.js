const form = document.querySelector("#enquiry-form");

if (form) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");
    const status = document.querySelector("#form-status");

    const carSelect = document.querySelector("#car");
    const chosenCar = new URLSearchParams(window.location.search).get("car");
    if (chosenCar && [...carSelect.options].some((option) => option.value === chosenCar)) {
        carSelect.value = chosenCar;
    }

    const setError = (input, message) => {
        document.querySelector("#" + input.id + "-error").textContent = message;
        if (message) {
            input.setAttribute("aria-invalid", "true");
        } else {
            input.removeAttribute("aria-invalid");
        }
        return message ? input : null;
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        status.textContent = "";

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const contact = form.elements.contact.value;

        let nameMessage = "";
        if (name === "") {
            nameMessage = "Enter your full name.";
        }

        let emailMessage = "";
        if (email === "") {
            emailMessage = "Enter your email address.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailMessage = "Enter an email address like name@example.com.";
        }

        let phoneMessage = "";
        if (phone === "" && contact === "phone") {
            phoneMessage = "Enter a phone number, or choose Email as your contact method.";
        } else if (phone !== "" && phone.replace(/\D/g, "").length < 10) {
            phoneMessage = "Enter a phone number with at least 10 digits, like 01707 111 222.";
        }

        const invalid = [
            setError(nameInput, nameMessage),
            setError(emailInput, emailMessage),
            setError(phoneInput, phoneMessage)
        ].filter(Boolean);

        if (invalid.length > 0) {
            invalid[0].focus();
            return;
        }

        status.textContent = "Thank you, " + name + ". Your enquiry has been sent. We aim to respond within two working days.";
        form.reset();
    });
}