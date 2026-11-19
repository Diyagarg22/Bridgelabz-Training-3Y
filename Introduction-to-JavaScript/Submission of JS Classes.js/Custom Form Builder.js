
// Q4: Custom Form Builder

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    // Create form dynamically
    createForm() {
        const container = document.getElementById("formContainer");

        let formHTML = '<form id="dynamicForm">';

        this.fields.forEach((field, index) => {
            formHTML += `
                <label>${field.label}</label>
                <input
                    type="${field.type}"
                    id="field${index}"
                    name="${field.name}"
                    required
                >
                <br><br>
            `;
        });

        formHTML += '<button type="submit">Submit</button>';
        formHTML += '</form>';

        container.innerHTML = formHTML;

        const form = document.getElementById("dynamicForm");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = this.getFormData();

            document.getElementById("formResult").textContent =
                JSON.stringify(formData, null, 2);
        });
    }

    // Collect entered form values
    getFormData() {
        const formData = {};

        this.fields.forEach((field, index) => {
            const input = document.getElementById("field" + index);

            formData[field.name] = input.value;
        });

        return formData;
    }
}

// Fields for the dynamic form
const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

// Create form
const formBuilder = new FormBuilder(fields);
formBuilder.createForm();
