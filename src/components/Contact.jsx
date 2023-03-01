// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";

// export default function Contact() {
//   const formInitialDetails = {
//     fullName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("Send");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");

//     try {
//       const response = await fetch("/.netlify/functions/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//         body: JSON.stringify(formDetails),
//       });

//       const result = await response.json();

//       if (result.code === 200) {
//         setStatus({ success: true, message: "Message sent successfully" });
//       } else {
//         setStatus({
//           success: false,
//           message: "Something went wrong, please try again later.",
//         });
//       }
//     } catch (error) {
//       setStatus({
//         success: false,
//         message: "Something went wrong, please try again later.",
//       });
//     } finally {
//       setButtonText("Send");
//       setFormDetails(formInitialDetails);
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           {/* <Col size={12} md={6}>
//             <img src={contactImg} alt="Contact Me" />
//           </Col> */}
//           <Col size={12} md={6}>
//             <div>
//               <h2>Send me an mail</h2>
//               <form
//                 name="contact"
//                 method="POST"
//                 onSubmit={handleSubmit}
//                 data-netlify-honeypot="bot-field"
//                 data-netlify="true"
//               >
//                 <input type="hidden" name="form-name" value="contact" />
//                 <Row>
//                   <Col size={12} sm={12} className="px-1">
//                     <input
//                       type="text"
//                       value={formDetails.fullName}
//                       placeholder="Full Name"
//                       onChange={(e) => onFormUpdate("fullName", e.target.value)}
//                     />
//                   </Col>
//                   <Col size={12} sm={6} className="px-1">
//                     <input
//                       type="email"
//                       value={formDetails.email}
//                       placeholder="Email Address"
//                       onChange={(e) => onFormUpdate("email", e.target.value)}
//                     />
//                   </Col>
//                   <Col size={12} sm={6} className="px-1">
//                     <input
//                       type="tel"
//                       value={formDetails.phone}
//                       placeholder="Phone No."
//                       onChange={(e) => onFormUpdate("phone", e.target.value)}
//                     />
//                   </Col>
//                   <Col size={12} sm={12} className="px-1">
//                     <textarea
//                       rows="6"
//                       value={formDetails.message}
//                       placeholder="Message"
//                       onChange={(e) => onFormUpdate("message", e.target.value)}
//                     ></textarea>
//                     <button type="submit">
//                       <span>{buttonText}</span>
//                     </button>
//                   </Col>
//                   {status.message && (
//                     <Col className="mt-3">
//                       <p
//                         className={
//                           status.success === false ? "danger" : "success"
//                         }
//                       >
//                         {status.message}
//                       </p>
//                     </Col>
//                   )}
//                 </Row>
//               </form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // honeypot field

  const handleSubmit = (e) => {
    e.preventDefault();
    if (honeypot) {
      console.log("This is a spam submission");
      return;
    }
    const data = { name, email, message };
    fetch("/.netlify/functions/submitForm", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Thank you for your submission!");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert(
          "There was an error submitting your form. Please try again later."
        );
      });
  };

  return (
    <section className="contact" id="connect">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <label style={{ display: "none" }}>
          Don’t fill this out if you’re human:{" "}
          <input
            name="bot-field"
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>{" "}
        {/* honeypot field */}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
