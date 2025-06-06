import React from "react";
import "./Tavlo.css";

const Tavlo = () => {
  return (
    <div className="dummy-container">
      <h1 className="heading-with-logo">
        <span className="heading-text">
          Welcome to <span className="brand">𝕋𝕒𝕧𝕝𝕠</span> 🍽️
        </span>
        <img
          src="/imagesforapp/tavlo.jpg"
          className="tavlo-logo"
          alt="Tavlo Logo"
        />
      </h1>

      <p>
        What started as a scribble on a napkin at a crowded café is now a
        growing digital revolution in dining.
        <strong> Tavlo</strong> (a twist on the word "table") was born with a
        simple yet powerful idea:
        <em> why wait when your perfect table is just a tap away?</em>
      </p>

      <h2>✨ Our Story</h2>
      <p>
        Back in 2023, a group of food lovers and tech nerds decided to make
        dining out smarter, smoother, and way more satisfying. We were tired of
        waiting in lines, calling restaurants, or missing out on our favorite
        table. So we built <strong>Tavlo</strong> — your table's personal
        assistant.
      </p>

      <h2>🍴 What Makes Tavlo Special?</h2>
      <ul>
        <li>
          <strong>One-Tap Bookings:</strong> Reserve a table in under 10
          seconds. No calls. No queues.
        </li>
        <li>
          <strong>Live Availability:</strong> See what's open, what's full, and
          what's sizzling!
        </li>
        <li>
          <strong>Menus Up Front:</strong> Browse menus, photos, and ratings
          before you even step in.
        </li>
        <li>
          <strong>Smart Suggestions:</strong> Based on your taste, mood, and
          past adventures.
        </li>
        <li>
          <strong>Past Orders & Faves:</strong> Reorder, revisit, and relive
          your best bites.
        </li>
      </ul>

      <h2>🌍 A Community of Foodies</h2>
      <p>
        Tavlo is more than an app — it's a movement. A community of food lovers,
        restaurant dreamers, and hospitality heroes. Whether you're dining solo
        or booking for ten, we make sure every table tells a story.
      </p>

      <h2>🏆 Our Pride</h2>
      <p>
        In just a short time, Tavlo has helped thousands of users avoid the
        waiting game and enjoy hassle-free dining. We’ve partnered with
        restaurants across cities to bring you trusted, top-rated spots and
        hidden gems alike. When restaurants smile and customers return — that's
        the Tavlo magic.
      </p>

      <h2>🚀 What's Next?</h2>
      <p>
        From candlelit rooftop dinners to spontaneous biryani cravings, Tavlo is
        expanding, innovating, and always hungry for more. Soon, you’ll see
        features like live wait times, table personalization, and even AR menus!
      </p>

      <h2>🤝 Join the Journey</h2>
      <p>
        Tavlo isn’t just our dream — it’s yours too. Book your first table,
        explore new tastes, and be a part of the story. Every time you tap{" "}
        <em>“Book Now”</em>, you’re supporting local restaurants, efficient
        hospitality, and a smarter dining future.
      </p>

      <p className="footer-message">
        Thank you for choosing Tavlo. <br />
        Where every seat is reserved just for you. 💙
      </p>
    </div>
  );
};

export default Tavlo;
