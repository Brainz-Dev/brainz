import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { Vortex } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

function FeedBackCard() {
  const [isClicked, setClicked] = useState(false);

  // ── API LOGIC — unchanged ──────────────────────────────────────────────────
  const showToast = (message) => {
    toast(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const sentMail = async (e) => {
    e.preventDefault();
    const btn = document.getElementById("submit-btn");
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    if (email == "" || subject == "" || message == "") {
      showToast("Please fill all the field");
      return;
    }
    setClicked(true);
    btn.disabled = true;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    axios
      .post(
        "https://brainz-server.onrender.com/sentmail",
        { email, subject, message },
        options
      )
      .then((res) => {
        if (res.status === 200) {
          showToast("Submitted successfully, We will get back to you zoon...!");
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
        } else showToast("Something went wrong, please try again later");
        setClicked(false);
      })
      .catch((er) => {
        console.error(er);
        showToast("Something went wrong, please try again later");
        setClicked(false);
      });
  };
  // ── END API LOGIC ──────────────────────────────────────────────────────────

  return (
    <div id="contact-form" className="glass-card rounded-2xl px-8 py-9 w-full">
      <h4 className="font-poppins font-bold text-[24px] text-white mb-7 leading-tight">
        Send us a message
      </h4>

      <div className="flex flex-col gap-5">
        <div>
          <label
            htmlFor="email"
            className="block font-poppins text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-2"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="input-glow w-full rounded-xl px-4 py-3 font-poppins text-[15px]"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block font-poppins text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="input-glow w-full rounded-xl px-4 py-3 font-poppins text-[15px]"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-poppins text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="input-glow w-full rounded-xl px-4 py-3 font-poppins text-[15px] resize-none"
            placeholder="Tell us about your project, your stack, and what you want to achieve..."
          />
        </div>

        <button
          type="button"
          id="submit-btn"
          onClick={sentMail}
          className="w-full bg-brand-gradient font-poppins font-semibold text-[15px] text-white py-4 rounded-xl flex justify-center items-center gap-3 hover:opacity-90 hover:shadow-glow transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
        >
          {isClicked ? "Sending…" : "Send Message →"}
          <Vortex
            visible={isClicked}
            height="22"
            width="22"
            colors={["#fff", "#c4b5fd", "#e879f9", "#fff", "#c4b5fd", "#e879f9"]}
            wrapperStyle={{}}
            wrapperClass=""
          />
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default FeedBackCard;
