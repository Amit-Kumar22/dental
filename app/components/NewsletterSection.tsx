"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-[#FF7F3E] to-[#FF8F4D] py-5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left Side - Text */}
          <div className="text-white">
            <h3 className="text-2xl font-normal">
              Subscribe to our <span className="font-bold">Newsletter</span>
            </h3>
          </div>

          {/* Right Side - Email Form */}
          <form onSubmit={handleSubmit} className="flex-1 max-w-2xl w-full">
            <div className="flex items-center gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="flex-1 px-6 py-3 rounded-l-full border-0 text-gray-700 placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-10 py-3 bg-white text-[#FF7F3E] font-bold rounded-r-full hover:bg-gray-50 transition-colors whitespace-nowrap border-0"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
