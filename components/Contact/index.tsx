"use client";
import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import Image from "next/image";

import CloseModalIcon from "../../public/images/X.svg";
import small from "../../public/images/email.gif";
import "./index.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const isDisabled =
    name === "" || email === "" || message === "" || !validateEmail(email);

  const emailKey = {
    user_id: "user_hukTKLHS2cwezXJaMowj4",
    service_id: "service_mg2dvpp",
    template_id: "template_iotqp33",
  };

  const inputFields = {
    ToName: "Santosh",
    Name: name,
    UserEmail: email,
    Message: message,
  };

  const handleSendMessage = () => {
    var data = {
      service_id: emailKey.service_id,
      template_id: emailKey.template_id,
      user_id: emailKey.user_id,
      template_params: inputFields,
    };
    setLoader(true);
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      setLoader(false);
      setName("");
      setEmail("");
      setMessage("");
      setShowModal(true);
    });
  };

  const onCloseIconClick = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <div
          style={{
            backgroundColor: "rgb(0, 0, 0,0.8)",
            zIndex: 1000,
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div className={`modal ${"animationFromTopToBottom"}`}>
            <div
              style={{
                maxWidth: "350px",
                height: "350px",
                borderRadius: "16px",
                background: "#fff",
                padding: "20px",
              }}
            >
              <div style={{ position: "relative" }}>
                <Image
                  src={CloseModalIcon}
                  alt="CloseModalIcon"
                  className="closeModal"
                  onClick={onCloseIconClick}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src={small}
                  alt=""
                  onClick={onCloseIconClick}
                  width={250}
                  height={200}
                />
                <div className="font-semibold text-dark">
                  Thankyou for reaching to us, our support team will reach out
                  to you as soon as possible.
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      ) : null}
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s
              "
              >
                <h2 className="mb-3 text-2xl font-semibold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Need Help? {/* Need Help? Let's Talk */}
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Our support team will get back to you ASAP.
                </p>
                <>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-semibold text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          placeholder="Enter your name"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-semibold text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className={`w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none  focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp ${
                            validateEmail(email)
                              ? "focus:border-primary"
                              : "focus:border-red"
                          }`}
                        />
                        {email && !validateEmail(email) ? (
                          <div className="font-semibold text-red">
                            please provide proper mail id
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-semibold text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          name="message"
                          rows={5}
                          placeholder="Enter your Message"
                          className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        disabled={isDisabled || loader}
                        onClick={handleSendMessage}
                        className={`rounded-md py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp  ${
                          isDisabled
                            ? "cursor-not-allowed bg-body-color"
                            : "cursor-pointer bg-primary"
                        }`}
                      >
                        {loader ? "Sending Ticket" : " Submit Ticket"}
                      </button>
                    </div>
                  </div>
                </>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <NewsLatterBox />
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15154.912956911325!2d83.79420589435556!3d18.268275550762016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDoor%20No%3A%203-35%2FF%2C%20CHILAKAPALEM%2C%20ETCHERLA%20(MANDAL%20SRIKAKULAM(DIST)%20ANDHRA%20PRADESH-532410%20INDIA!5e0!3m2!1sen!2sin!4v1694875613725!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, marginTop: "5rem" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
