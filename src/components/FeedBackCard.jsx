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
    <div id="contact-form" className="bg-white rounded-2xl border border-line shadow-md px-7 py-8 w-full">
      <h3 className="font-poppins font-bold text-[22px] text-ink mb-6 leading-tight">
        Send us a message
      </h3>

      <form className="flex flex-col gap-5" onSubmit={sentMail} noValidate>
        <div>
          <label
            htmlFor="email"
            className="block font-poppins text-[12px] font-semibold text-ink-2 uppercase tracking-wider mb-2"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="input-glow w-full rounded-xl px-4 py-3 font-poppins text-[15px] text-ink"
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block font-poppins text-[12px] font-semibold text-ink-2 uppercase tracking-wider mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="input-glow w-full rounded-xl px-4 py-3 font-poppins text-[15px] text-ink"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-poppins text-[12px] font-semibold text-ink-2 uppercase tracking-wider mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="input-glow w-full rounded-xl px-4 py-3 font-poppins text-[15px] text-ink resize-none"
            placeholder="Tell us about your project, your stack, and what you want to achieve..."
          />
        </div>

        <button
          type="submit"
          id="submit-btn"
          onClick={sentMail}
          className="w-full btn-brand font-poppins font-semibold text-[15px] py-4 rounded-xl flex justify-center items-center gap-3 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
          disabled={isClicked}
        >
          {isClicked ? "Sending…" : "Send Message"}
          {!isClicked && (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          )}
          <Vortex
            visible={isClicked}
            height="20"
            width="20"
            colors={["#fff", "#ede9fe", "#7c3aed", "#fff", "#ede9fe", "#7c3aed"]}
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
