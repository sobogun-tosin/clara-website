"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

type SignupFormState = {
  city: string;
  email: string;
  name: string;
  restaurant: string;
  type: string;
};

export const SignupSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<SignupFormState>({
    name: "",
    email: "",
    restaurant: "",
    city: "",
    type: "",
  });

  const update =
    (key: keyof SignupFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm({ ...form, [key]: event.target.value });
    };

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.email) return;
    setSubmitted(true);
  };

  return (
    <section className="wl-signup" id="signup">
      <div className="blob1" />
      <div className="blob2" />
      <header>
        <div className="kicker">✦ Join the list ✦</div>
        <h2>
          Save your <span className="serif-i tomato">seat.</span>
        </h2>
        <p>
          Onboarding restaurants in waves through 2026. Earlier signups get
          priority scheduling and locked-in pricing.
        </p>
      </header>
      <div className="form-wrap">
        {submitted ? (
          <div className="wl-thanks">
            <h3>You&apos;re on the list.</h3>
            <p>
              We&apos;ll be in touch with your onboarding wave in the next few
              weeks. Thank you for trusting us with your restaurant.
            </p>
          </div>
        ) : (
          <form className="wl-form" onSubmit={onSubmit}>
            <div className="row">
              <div>
                <label>Your name</label>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Adaeze Okonkwo"
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@restaurant.co.uk"
                />
              </div>
            </div>

            <div className="row">
              <div>
                <label>Restaurant name</label>
                <input
                  value={form.restaurant}
                  onChange={update("restaurant")}
                  placeholder="The Pantry"
                />
              </div>

              <div>
                <label>City</label>
                <input
                  value={form.city}
                  onChange={update("city")}
                  placeholder="Shoreditch, London"
                />
              </div>
            </div>

            <div>
              <label>Type</label>
              <select value={form.type} onChange={update("type")}>
                <option value="">Select one...</option>
                <option>Independent restaurant</option>
                <option>Small restaurant group (2-10 sites)</option>
                <option>Cafe</option>
                <option>Takeaway</option>
                <option>Bar / pub with food</option>
              </select>
            </div>

            <button type="submit">Join the waitlist -&gt;</button>
            <p className="fine">
              We&apos;ll only use this to get you onboarded. No spam, no
              list-sharing. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
