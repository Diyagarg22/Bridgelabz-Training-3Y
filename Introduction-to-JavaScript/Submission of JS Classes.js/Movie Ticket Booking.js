
// Q5: Movie Ticket Booking

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const seatsError = document.getElementById("seatsError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    seatsError.textContent = "";

    let isValid = true;

    // Validate name
    if (!/^[A-Za-z ]+$/.test(name)) {
        nameError.textContent = "Name must contain only alphabets";
        nameError.style.color = "red";
        isValid = false;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Enter a valid email";
        emailError.style.color = "red";
        isValid = false;
    }

    // Validate seats
    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        seatsError.textContent = "Seats must be between 1 and 10";
        seatsError.style.color = "red";
        isValid = false;
    }

    if (isValid) {
        // Store booking information in an object
        const booking = {
            name: name,
            email: email,
            seats: seats
        };

        console.log("Booking Information:", booking);

        document.getElementById("ticketDetails").textContent =
            `Booking Successful! Name: ${booking.name}, ` +
            `Email: ${booking.email}, Seats: ${booking.seats}`;
    } else {
        document.getElementById("ticketDetails").textContent = "";
    }
});
