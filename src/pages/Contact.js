import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { validateField, validateForm } from "../utils/validation";

const initialFormData = {
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
};

function Contact() {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        document.title = "Contact Herbal Blend";
    }, []);

    const handleChange = (e) => {
        const { name, value: inputValue } = e.target;

        let value = inputValue;
        let fieldError = "";

        if (name === "fullName" || name === "subject") {
            if (/[0-9]/.test(value)) {
                fieldError =
                    name === "fullName"
                        ? "Numbers are not allowed in the full name."
                        : "Numbers are not allowed in the subject.";

                value = value.replace(/[0-9]/g, "");
            }

            value = value.slice(0, 20);

            if (!fieldError) {
                fieldError = validateField(name, value);
            }
        } else if (name === "phone") {
            value = value.replace(/[^\d+\-\s()]/g, "");
            value = value.slice(0, 20);
            fieldError = validateField(name, value);
        } else if (name === "message") {
            value = value.slice(0, 500);
            fieldError = validateField(name, value);
        } else {
            fieldError = validateField(name, value);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: fieldError
        }));

        if (successMessage) {
            setSuccessMessage("");
        }
    };

    const handlePaste = (e) => {
        const { name } = e.target;

        if (name === "fullName" || name === "subject") {
            const pastedText = e.clipboardData.getData("text");

            if (/[0-9]/.test(pastedText)) {
                e.preventDefault();

                setErrors((prev) => ({
                    ...prev,
                    [name]:
                        name === "fullName"
                            ? "Numbers are not allowed in the full name."
                            : "Numbers are not allowed in the subject."
                }));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validateForm(formData);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            setSuccessMessage(
                "Message sent successfully! Our team will respond within 24 hours."
            );

            setFormData(initialFormData);
            setErrors({});
            return;
        }

        setSuccessMessage("");
    };

    const renderInput = (
        label,
        name,
        type = "text",
        isTextArea = false
    ) => {
        const value = formData[name];
        const error = errors[name];
        const InputComponent = isTextArea ? "textarea" : "input";

        const maxLength =
            name === "message"
                ? 500
                : name === "fullName" ||
                  name === "subject" ||
                  name === "phone"
                ? 20
                : undefined;

        return (
            <div className="form-group" key={name}>
                <label htmlFor={name}>{label}</label>

                <InputComponent
                    id={name}
                    type={type}
                    name={name}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    value={value}
                    onChange={handleChange}
                    onPaste={handlePaste}
                    maxLength={maxLength}
                    rows={isTextArea ? 5 : undefined}
                    className={error ? "input-error" : ""}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${name}-error` : undefined}
                />

                {error && (
                    <span
                        id={`${name}-error`}
                        className="error-message"
                    >
                        {error}
                    </span>
                )}
            </div>
        );
    };

    return (
        <>
            <Header />

            <main className="contact-page">
                <div className="contact-intro">
                    <p className="eyebrow">Get in touch</p>

                    <h1>Contact Us</h1>

                    <p>
                        We would love to hear from you. Send us a message below.
                    </p>
                </div>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    {renderInput("Full Name", "fullName")}

                    {renderInput(
                        "Email Address",
                        "email",
                        "email"
                    )}

                    {renderInput(
                        "Phone Number",
                        "phone",
                        "tel"
                    )}

                    {renderInput("Subject", "subject")}

                    {renderInput(
                        "Message",
                        "message",
                        "text",
                        true
                    )}

                    <button type="submit">
                        Send Message
                    </button>

                    {successMessage && (
                        <p
                            className="success-message"
                            role="alert"
                        >
                            {successMessage}
                        </p>
                    )}
                </form>
            </main>

            <Footer />
        </>
    );
}

export default Contact;
