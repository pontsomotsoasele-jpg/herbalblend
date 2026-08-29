export const validateField = (name, value) => {
    const trimmed = String(value ?? "").trim();

    switch (name) {
        case "fullName":
            if (!trimmed) return "Full name is required.";
            if (trimmed.length < 2) return "Full name must contain at least 2 characters.";
            if (!/^[A-Za-zÀ-ÿ\s'-]+$/.test(trimmed)) return "Full name may only contain letters and spaces.";
            return "";

        case "email":
            if (!trimmed) return "Email address is required.";
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return "Please enter a valid email address.";
            return "";

        case "phone":
            if (!trimmed) return "Phone number is required.";
            if (!/^[0-9+\-\s()]+$/.test(trimmed)) return "Please enter a valid phone number.";
            if (trimmed.replace(/\D/g, "").length < 7) return "Phone number must include at least 7 digits.";
            return "";

        case "subject":
            if (!trimmed) return "Subject is required.";
            if (trimmed.length < 3) return "Subject must be at least 3 characters long.";
            return "";

        case "message":
            if (!trimmed) return "Message is required.";
            if (trimmed.length < 10) return "Message must contain at least 10 characters.";
            return "";

        default:
            return "";
    }
};

export const validateForm = (formData) => {
    const errors = {};

    Object.keys(formData).forEach((field) => {
        const error = validateField(field, formData[field]);
        if (error) {
            errors[field] = error;
        }
    });

    return errors;
};