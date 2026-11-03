import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { Vortex } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

function FeedBackCard() {
  const [isClicked, setClicked] = useState(false);

  /* ── API logic — unchanged ──────────────────────────────── */
  const showToast = (message) => {
    toast(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  const sentMail = async (e) => {
    e.preventDefault();
    const btn = document.getElementById("submit-btn");
    const email   = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    if (!email || !subject || !message) {
      showToast("Please fill in all fields.");
      return;
    }
    setClicked(true);
    btn.disabled = true;
    axios
      .post("https://api.brainz-dev.com/sentmail", { email, subject, message }, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          showToast("Submitted successfully — we'll get back to you soon!");
          document.getElementById("email").value   = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
        } else {
          showToast("Something went wrong. Please try again.");
        }
        setClicked(false);
      })
      .catch(() => {
        showToast("Something went wrong. Please try again.");
        setClicked(false);
      });
  };
  /* ── End API logic ──────────────────────────────────────── */

  return (
    <div id="contact-form" className="bg-white rounded-2xl border border-line shadow-lg p-6 sm:p-8 w-full">
      <h3 className="font-poppins font-semibold text-[18px] text-ink mb-6 tracking-[-0.01em]">
        Send us a message
      </h3>

      <form className="flex flex-col gap-5" onSubmit={sentMail} noValidate>
        <div>
          <label
            htmlFor="email"
            className="block font-poppins text-[14px] font-medium text-ink mb-1.5"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="input-glow w-full rounded-lg px-3.5 py-2.5 font-poppins text-[15px] text-ink"
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block font-poppins text-[14px] font-medium text-ink mb-1.5"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="input-glow w-full rounded-lg px-3.5 py-2.5 font-poppins text-[15px] text-ink"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-poppins text-[14px] font-medium text-ink mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="input-glow w-full rounded-lg px-3.5 py-2.5 font-poppins text-[15px] text-ink resize-none"
            placeholder="Tell us about your project, your stack, and what you want to achieve..."
          />
        </div>

        <button
          type="submit"
          id="submit-btn"
          onClick={sentMail}
          className="w-full btn-brand font-poppins text-[15px] py-3 rounded-lg flex justify-center items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
          disabled={isClicked}
        >
          {isClicked ? "Sending…" : "Send message"}
          {!isClicked && (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          )}
          <Vortex
            visible={isClicked}
            height="20"
            width="20"
            colors={["#fff", "#d4d4d2", "#8f8e8a", "#fff", "#d4d4d2", "#8f8e8a"]}
            wrapperStyle={{}}
            wrapperClass=""
          />
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default FeedBackCard;
