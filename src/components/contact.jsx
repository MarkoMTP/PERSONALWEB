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
        <a href="mailto:marko.mtp8@gmail.com">marko.mtp8@gmail.com</a>
      </p>
      <p>
        <strong>Phone:</strong> <a href="tel:+393515157952">+39 351 515 7952</a>
      </p>
    </div>
  );
});

export default ContactInfo;
