import Link from "next/link";
import { PhoneMock } from "@/components/phone-mock";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SignupSection } from "./signup-section";
import { quotes, steps, waitlistFaq, waitlistFeatures } from "./data";
import { founders } from "../story/data";

const QrGrid = () => {
  return Array.from({ length: 225 }).map((_, index) => {
    const x = index % 15;
    const y = Math.floor(index / 15);
    const finder = (x < 5 && y < 5) || (x > 9 && y < 5) || (x < 5 && y > 9);
    const finderEdge =
      finder &&
      (x === 0 ||
        x === 4 ||
        x === 10 ||
        x === 14 ||
        y === 0 ||
        y === 4 ||
        y === 10 ||
        y === 14);
    const on = finder
      ? finderEdge || (x % 2 === 0 && y % 2 === 0)
      : (x * 7 + y * 11 + index) % 5 < 2;
    return (
      <div
        key={index}
        style={{
          background: on ? "var(--mustard)" : "transparent",
          borderRadius: on ? 1 : 0,
        }}
      />
    );
  });
};

export const WaitlistPage = () => {
  return (
    <>
      <SiteNav current="waitlist" />

      {/* HERO */}
      <section className="wl-hero">
        <div className="sticker">
          PRIVATE
          <br />
          BETA
          <br />
          2026
        </div>
        <div className="kicker" style={{ marginBottom: 20 }}>
          ✦ A little love letter to UK hospitality ✦
        </div>
        <h1>
          Your restaurant <span className="serif-i tomato">on your</span>{" "}
          <span className="tomato">terms.</span>
        </h1>
        <div className="hero-below">
          <p className="sub">
            Your website, your orders, your customers, your margin. Clara is the
            kit of tools an independent restaurant would build for itself - if
            it had time to build anything.
          </p>
          <div className="hero-cta-row">
            <Link href="#signup" className="btn-pill tomato-bg">
              Join the waitlist -&gt;
            </Link>
          </div>
        </div>
      </section>

      {/* Triptych */}
      <section className="wl-triptych">
        <div
          className="wl-tile-phone"
          style={{ backgroundImage: "url(/assets/food-hero.jpg)" }}
        >
          <div className="tag">TABLE ORDERING</div>
          <div style={{ transform: "rotate(-6deg)" }}>
            <PhoneMock scheme="light" hero="/assets/food-bowl.jpg" />
          </div>
        </div>
        <div
          className="wl-tile-food"
          style={{ backgroundImage: "url(/assets/food-bowl.jpg)" }}
        >
          <div className="caption">
            <h3>Menus that sell themselves.</h3>
            <div style={{ fontSize: 13, opacity: 0.9 }}>
              Imagery, modifiers, upsells, time-of-day menus.
            </div>
          </div>
        </div>
        <div className="wl-tile-stats">
          <div>
            <div className="mono-label" style={{ opacity: 0.8 }}>
              WHY CLARA
            </div>
            <div
              className="serif"
              style={{
                fontSize: "clamp(22px, 2.6vw, 40px)",
                lineHeight: 1.05,
                marginTop: 12,
              }}
            >
              Direct orders. Happier guests.{" "}
              <span className="serif-i">More margin.</span>
            </div>
          </div>
          <div className="grid">
            {[
              ["Up to 30%", "kept, not lost to marketplaces"],
              ["£99 flat", "for the whole ops suite"],
              ["0 apps", "for your guests to download"],
              ["14 days", "free trial, no card"],
            ].map(([key, value]) => (
              <div key={key}>
                <div className="stat-key">{key}</div>
                <div className="stat-value">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={index}>
              DIRECT ORDERING <span>✦</span> HAPPY GUESTS <span>✦</span> OWN
              YOUR DATA <span>✦</span> NO MIDDLEMAN <span>✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="wl-steps">
        <div className="intro">
          <div>
            <div className="kicker clay">✦ How it works ✦</div>
            <h2>
              Live by <span className="serif-i tomato">lunch.</span>
            </h2>
          </div>
          <p>
            We onboard you in a single afternoon. No integrator, no IT project,
            no &quot;we&apos;ll be in touch next quarter.&quot; Just a warm
            set-up call and a working restaurant by the next service.
          </p>
        </div>
        <div className="cards">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="wl-step card-bordered"
              style={{ background: step.bg, color: step.fg }}
            >
              <div className="head">
                <div
                  className="badge"
                  style={{
                    background: "rgba(255,255,255,0.25)",
                    color: step.fg,
                  }}
                >
                  {step.num}
                </div>
                {index < 2 && (
                  <div
                    className="display"
                    style={{ fontSize: 32, opacity: 0.55 }}
                  >
                    -&gt;
                  </div>
                )}
              </div>
              <h3>{step.title}</h3>
              <p
                style={{
                  color:
                    step.fg === "var(--ink)"
                      ? "rgba(29,26,20,0.7)"
                      : "rgba(255,251,236,0.85)",
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="wl-features" id="features">
        <header>
          <div className="kicker clay">✦ What&apos;s in the box ✦</div>
          <h2>
            A whole restaurant&apos;s worth of tools, in one warm-hearted
            platform.
          </h2>
        </header>

        <div className="cards">
          {waitlistFeatures.map((feature, index) => {
            const themes = [
              { bg: "var(--mustard)", fg: "var(--ink)", rot: -1 },
              { bg: "var(--tomato)", fg: "var(--cream)", rot: 1 },
              { bg: "var(--teal)", fg: "var(--cream)", rot: -0.5 },
              { bg: "var(--clay)", fg: "var(--cream)", rot: 0.8 },
              { bg: "var(--cream)", fg: "var(--ink)", rot: -0.8 },
              { bg: "var(--plum)", fg: "var(--cream)", rot: 0.5 },
            ][index];
            return (
              <div
                key={feature.num}
                className="wl-feature card-bordered"
                style={{
                  background: themes.bg,
                  color: themes.fg,
                  transform: `rotate(${themes.rot}deg)`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="num">No. {feature.num}</div>
                  {index === 5 && (
                    <div
                      style={{
                        padding: "4px 10px",
                        borderRadius: 999,
                        border: "1px solid currentColor",
                        fontSize: 10,
                        fontFamily: "var(--display)",
                        letterSpacing: 1.5,
                      }}
                    >
                      COMING SOON
                    </div>
                  )}
                </div>
                <h3 style={{ fontStyle: index % 2 ? "italic" : "normal" }}>
                  {feature.title}
                </h3>
                <p>{feature.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* QR MOMENT */}
      <section className="wl-qr">
        <div>
          <div className="kicker">✦ Less machine, more human ✦</div>
          <h2>A QR code that doesn&apos;t feel like one.</h2>
          <p>
            Designed for restaurants that care about the room. Branded, warm,
            and handed to guests like a menu - not bolted to the wall like a
            fire-safety sign.
          </p>
        </div>
        <div className="wl-qr-card">
          <div className="name">The Pantry</div>
          <div className="sub">Table 12 · Scan for the menu</div>
          <div className="qr">
            <QrGrid />
          </div>
          <div className="ribbon">SCAN TO ORDER</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="wl-pricing">
        <header>
          <div className="kicker clay">✦ Pricing ✦</div>
          <h2>
            Free to start. <span className="serif-i tomato">Honest</span> when
            you grow.
          </h2>
        </header>
        <div className="cards">
          <div className="wl-plan" style={{ background: "var(--card)" }}>
            <div className="tier">START</div>
            <div className="name">Website</div>
            <div className="price">Free, forever.</div>
            <p>
              A branded site with direct ordering, pickup and delivery. No setup
              fee. No per-order cut.
            </p>
          </div>
          <div className="wl-plan dark">
            <div className="badge-trial">14-DAY TRIAL</div>
            <div className="tier">SCALE</div>
            <div className="name">Operations</div>
            <div className="price" style={{ fontFamily: "var(--serif)" }}>
              £99{" "}
              <span style={{ fontSize: 18, opacity: 0.7 }}>/ month, flat</span>
            </div>
            <p>
              QR ordering, split bills, guest payments, full reporting, team &
              permissions, customer data.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="wl-quotes">
        <header>
          <div className="kicker clay">✦ From the kitchen ✦</div>
          <h2>
            Early operators on the{" "}
            <span className="serif-i tomato">private beta.</span>
          </h2>
        </header>
        <div className="cards">
          {quotes.map((quote) => (
            <div
              key={quote.name}
              className="wl-quote card-bordered"
              style={{
                background: quote.bg,
                color: quote.fg,
                transform: `rotate(${quote.rotation}deg)`,
              }}
            >
              <div className="big">&quot;</div>
              <div className="body">{quote.quote}</div>
              <div className={"who " + (quote.darkBorder ? "dark-border" : "")}>
                <div
                  className="avatar"
                  style={{
                    background:
                      quote.fg === "var(--ink)"
                        ? "rgba(29,26,20,0.1)"
                        : "rgba(255,251,236,0.2)",
                  }}
                >
                  {quote.name[0]}
                </div>
                <div>
                  <div className="name">{quote.name}</div>
                  <div className="role">{quote.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="wl-story-teaser" id="story">
        <div className="wrap">
          <div>
            <div className="kicker">✦ Our Story ✦</div>
            <h2>
              Built by people who&apos;ve{" "}
              <span className="serif-i tomato">
                sat on the other side of the pass.
              </span>
            </h2>
            <div className="founders-row">
              <ul className="avatars">
                {founders.map(({ name, fg, bg }) => (
                  <li
                    className="-ml-2.5"
                    style={{ background: bg, color: fg }}
                    key={name}
                  >
                    {name.charAt(0)}
                  </li>
                ))}
              </ul>

              <div
                style={{ fontSize: 13, color: "var(--sub)", lineHeight: 1.4 }}
              >
                The founding team.
                <br />
                London · Lagos · Lahore.
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p className="lede">
              We grew up in restaurants. Not ones that made the Guardian top-50.
              The ones where mum did the books at the kitchen table and dad
              stayed late to fix the card reader that never really worked.
            </p>
            <p className="body">
              We moved to the UK to build software. And every time we came home
              - Peckham, Tooting, Manchester, Leicester - we saw the same thing.
              Independent restaurants, full of soul, losing a third of every
              order to a marketplace that wouldn&apos;t even tell them who their
              own customers were.
            </p>
            <div className="note">
              <div className="kicker">✦ A note from the founders</div>
              <p>
                &quot;We&apos;re immigrants. We&apos;re children of restaurant
                people. We&apos;re building the thing our families needed twenty
                years ago - and that tens of thousands of UK operators still
                need today. Clara is for you.&quot;
              </p>
            </div>
            <Link
              href="/our-story"
              className="btn-pill"
              style={{ alignSelf: "flex-start" }}
            >
              Read the full story -&gt;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="wl-faq">
        <div className="wrap">
          <div>
            <div className="kicker">✦ Q&A ✦</div>
            <h2>
              Ask us <span className="serif-i tomato">anything.</span>
            </h2>
          </div>
          <div>
            {waitlistFaq.map((item) => (
              <details key={item.question}>
                <summary>
                  <span className="question">{item.question}</span>
                  <span className="plus">+</span>
                </summary>
                <div className="answer">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SignupSection />
      <SiteFooter />
    </>
  );
};
