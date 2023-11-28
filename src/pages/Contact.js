import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ModalPortal from "../components/ModalPortal";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptySubject, setEmptySubject] = useState(false);
  const [emptyComment, setEmptyComment] = useState(false);
  const [modalOpen, setModalOpen] = useState(null);
  const form = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();

    const obj = {
      email,
      subject,
      comment,
    };
    if (email === "" && subject === "" && comment === "") {
      setEmptyEmail(true);
      setEmptySubject(true);
      setEmptyComment(true);
    }

    localStorage.setItem("userSignup", JSON.stringify(obj));
    const user = JSON.parse(localStorage.getItem("userSignup"));
    console.log(user);

    emailjs
      .sendForm(
        "service_o4khhsa",
        "template_6dk5o4l",
        form.current,
        "w7J_VYxupwF1nmLrS"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("message not sent");
        }
      );
    setComment("");
    setEmail("");
    setSubject("");
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(null);
  };

  return (
    <section class="bg-white dark:bg-gray-900 font-monte">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-tahiti dark:text-white">
          Kontakt
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Budite slobodni kontaktirajte nas i za sva vasa pitanja Vam stojimo na
          raspolaganju. Takodje mozete dobiti informaciju koliko bi okvirno
          kostao prevoz robe...
        </p>
        <form ref={form} class="space-y-8" onSubmit={handleSendEmail}>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              value={email}
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="test@test.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              name="from_name"
            />
            {emptyEmail && email === "" ? (
              <label style={{ color: "red" }}>
                <i>Email polje je prazno</i>
              </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Naslov
            </label>
            <input
              value={subject}
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Recite o cemu zelite da razgovaramo..."
              required
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
            />
            {emptySubject && subject === "" ? (
              <label style={{ color: "red" }}>
                <i>Naslov je prazno polje</i>
              </label>
            ) : (
              ""
            )}
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Poruka
            </label>
            <textarea
              value={comment}
              required
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Upisite poruku..."
              onChange={(e) => setComment(e.target.value)}
              name="message"
            ></textarea>
            {emptyComment && comment === "" ? (
              <label style={{ color: "red" }}>
                <i>Komentar polje je prazno</i>
              </label>
            ) : (
              ""
            )}
          </div>
          <button
            onClick={() => handleOpen()}
            type="submit"
            disabled={!email && !comment && !subject}
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-tahiti sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Posaljite poruku
          </button>
          <ModalPortal
            isOpen={modalOpen ? !email && !comment && !subject : ""}
            onClose={handleClose}
          >
            {" "}
            <h2>Poruka je poslata, ocekujte nas odgovor uskoro, hvala!</h2>
          </ModalPortal>
        </form>
      </div>
    </section>
  );
};
export default Contact;
