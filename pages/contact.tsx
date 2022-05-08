import { Container } from "@components/Container";
import { Heading } from "@components/Heading";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type Message = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const [message, setMessage] = useState<Message>({
    name: "",
    email: "",
    message: "",
  });

  const clearForm = () => {
    setMessage({
      name: "",
      email: "",
      message: "",
    });
  };

  const notify = (message: string) => toast(message);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const inputName = e.target.name;
    setMessage((prev) => ({ ...prev, [inputName]: e.target.value }));
  };

  const handleSubmit = (message: Message) => {
    const URL = "https://fabform.io/f/TvCd_o0";

    fetch(URL, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    clearForm();
  };

  return (
    <Container>
      <>
        <Heading active="/contact" />
        <div className="flex items-center justify-center mt-8 text-2xl flex-col gap-4 font-jim">
          <div className="text-left">
            <div className="hidden sm:block">
              You might have
              <div className="pl-2">
                <span className="text-gray-700 text-3xl"> question </span>,
                <span className="text-gray-700 text-3xl"> offer </span> or
                <span className="text-gray-700 text-3xl"> suggestion... </span>
              </div>
            </div>
            <div>I would love to hear from you</div>
            <div>please don't hesitate to fill the form down below</div>
          </div>
          <div className="text-left">
            <form
              className="flex flex-col items-center"
              id="contact-form"
              role="form"
              onSubmit={(e) => {
                e.preventDefault();
                notify(
                  `Hi ${message.name}, I got your message. I will reach you back over ${message.email} as soon as possible`
                );
                handleSubmit(message);
              }}
            >
              <div className="my-2">
                <input
                  className="p-2 w-80 sm:w-96 border-2 border-gray-600 focus:border-red-900 outline-none rounded-lg"
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  value={message?.name}
                  onChange={handleChange}
                  autoComplete="off"
                  maxLength={10}
                  required
                />
              </div>

              <div className="my-2">
                <input
                  className="p-2 w-80 sm:w-96 border-2 border-gray-600 focus:border-red-900 outline-none rounded-lg"
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={message?.email}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>

              <div className="my-2">
                <textarea
                  className="p-2 w-80 sm:w-96 border-2 border-gray-600 focus:border-red-900 outline-none rounded-lg"
                  rows={4}
                  placeholder="Hi Enes, I would ..."
                  name="message"
                  value={message?.message}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>

              <div className="my-2 w-full text-right">
                <button
                  id="submit"
                  type="submit"
                  className="py-1 px-3 bg-gray-600 text-white rounded-lg hover:bg-red-900"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <ToastContainer
          position="bottom-right"
          bodyClassName={() => "text-sm font-white block p-3"}
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
        />
      </>
    </Container>
  );
};

export default Contact;
