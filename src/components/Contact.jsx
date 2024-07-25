import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_v1hhcoy", "template_x37e1af", form.current, {
        publicKey: "AiyUTa6FuJuz9opm6",
      })
      .then(
        () => {
          alert("Thank you for choosing us!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className=" flex flex-col gap-10 lg:flex-row">
      <div className="w-full flex flex-col gap-10 font-Saira">
        <h1 className=" text-4xl md:text-6xl text-center font-semibold">
          Claim your 7 day free trial
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="text-black flex flex-col items-start w-full gap-5"
        >
          <label className="text-white text-3xl font-semibold">Name*</label>
          <input
            className="w-full text-2xl rounded-sm min-h-10 p-5 outline-none"
            type="text"
            name="user_name"
          />
          <label className="text-white text-3xl font-semibold">Contact*</label>
          <input
            className="w-full text-2xl rounded-sm min-h-10 p-5 outline-none"
            type="text"
            name="user_contact"
          />
          <label className="text-white text-3xl font-semibold">Email*</label>
          <input
            className="w-full text-2xl rounded-sm min-h-10 p-5 outline-none"
            type="email"
            name="user_email"
          />
          <label className="text-white text-3xl font-semibold">Message</label>
          <textarea
            className="w-full text-2xl rounded-sm min-h-60 p-5 outline-none"
            name="message"
          />
          <input
            className=" border-2 text-2xl  px-4 py-2 rounded-md font-semibold text-2xl text-white cursor-pointer hover:scale-110 transition-all duration-500"
            type="submit"
            value="Send"
          />
        </form>
      </div>
      <img
        src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753464528a3644b1eb3c80_two%20trainers.png"
        alt="Owner"
      />
    </div>
  );
}

export default Contact;
