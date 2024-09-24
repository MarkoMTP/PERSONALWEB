import { forwardRef } from "react";

const ContactInfo = forwardRef(({ isAnimated }, ref) => {
  return (
    <div
      ref={ref}
      className={`contact-info ${isAnimated ? "animate-border" : ""}`}
    >
      <h2>Contact Information</h2>
      <p>
        <strong>Name:</strong> Marko Matković
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:marko@example.com">marko@example.com</a>
      </p>
      <p>
        <strong>Phone:</strong> <a href="tel:+1234567890">+12 345 678 90</a>
      </p>
    </div>
  );
});

export default ContactInfo;
