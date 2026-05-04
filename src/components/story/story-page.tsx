import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { founders, principles, timeline } from "./data";

export const StoryPage = () => {
  return (
    <>
      <SiteNav current="story" />

      {/* HERO */}
      <section className="os-hero">
        <div className="kicker">✦ Our Story ✦</div>
        <h1>
          Built by <span className="serif-i tomato">restaurant kids</span> who
          moved to Britain, and never really left the kitchen.
        </h1>
        <div className="lede-row">
          <p className="lede">
            We grew up between two worlds. One of recipe books and double
            shifts. Another of startup all-hands and product roadmaps. Clara is
            what happens when those worlds finally talk to each other.
          </p>
          <p className="context">
            Our parents opened their first restaurants in the UK with very
            little - a recipe, a lease, a card reader that &quot;mostly&quot;
            worked. Two decades later the recipes are still perfect. The tools
            around them are not. Clara is our attempt to finally fix that, built
            with every shortcut, workaround and 2am spreadsheet our families
            ever taught us.{" "}
            <span className="serif-i">
              It&apos;s a love letter, and a business.
            </span>
          </p>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="os-photos">
        <div className="row">
          <div
            className="photo"
            style={{ backgroundImage: "url(/assets/food-hero.jpg)" }}
          >
            <div
              className="tag"
              style={{ background: "var(--mustard)", color: "var(--ink)" }}
            >
              THE ROOM
            </div>
            <div className="caption">
              Friday dinner service.
              <br />
              Sixteen covers turned into twenty-two.
            </div>
          </div>
          <div
            className="photo"
            style={{ backgroundImage: "url(/assets/food-bowl.jpg)" }}
          >
            <div
              className="tag"
              style={{ background: "var(--tomato)", color: "var(--cream)" }}
            >
              THE FOOD
            </div>
            <div className="caption">
              Jollof as it should be. And a dal we argue about with our cousins.
            </div>
          </div>
          <div className="os-stats card-bordered">
            <div>
              <div className="mono-label" style={{ opacity: 0.8 }}>
                THE NUMBERS
              </div>
              <div className="lead">
                What independent restaurants quietly lose every year.
              </div>
            </div>
            <div>
              {[
                ["25-35%", "taken by marketplaces on each order"],
                ["£40k+", "typical annual spend on fragmented tools"],
                ["0 rows", "of customer data most operators own"],
              ].map(([key, value]) => (
                <div className="stat" key={key}>
                  <div className="stat-key">{key}</div>
                  <div className="stat-value">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LETTER */}
      <section className="os-letter">
        <div className="wrap">
          <div className="kicker">✦ A letter, from the founders ✦</div>
          <div className="body" style={{ marginTop: 24 }}>
            <p>Dear operator,</p>
            <p>
              Clara Commerce was born from firsthand experience — four founders
              who grew up around food, business, and technology, and
              couldn&apos;t ignore the gap they kept seeing: good restaurants
              being held back by the wrong tools.
            </p>
            <p>
              Oluwabusola and Ajisola grew up in a family restaurant, giving
              them an early, intimate understanding of what running a food
              business actually demands. Oluwabusola&apos;s time as a food
              server in a hotel brought the operational frustrations into sharp
              focus — forgotten customer details, disconnected systems, and no
              single platform that held everything together. Moving to the UK
              made those gaps even harder to overlook. Ajisola brought the
              financial lens, using his Master&apos;s in Finance and Management
              to put a number on what inefficiency quietly costs restaurants
              already operating on razor-thin margins.
            </p>
            <p>
              Tosin bridges the food supply world with frontend engineering and
              product thinking — someone who understands both the chain that
              keeps a restaurant running and the importance of building software
              that actually works for the people using it under pressure.
              Tobiloba combines a business-shaped upbringing with backend
              engineering and product roadmapping, building the reliable
              infrastructure that powers Clara beneath the surface while keeping
              a clear eye on how the product grows and scales.
            </p>
            <p>
              Clara Commerce is designed to help small and mid-sized restaurants
              run better without adding complexity. It gives restaurants a
              simple way to manage orders, handle deliveries, and, importantly,
              retain customer information properly in just one platform. No more
              rewriting details. No more losing track of regulars. Just a system
              that enables restaurants to operate more profitably by owning
              demand, data, and customer relationships
            </p>

            <p>
              We believe small restaurants deserve better infrastructure, not
              just better margins.
            </p>

            <p>Clara is our way of building it.</p>
            <p>
              With respect for the work you do,
              <br />
              <span className="serif-i">The Clara team</span>
            </p>
          </div>
          <div className="sigs">
            {founders.map((founder) => (
              <div key={founder.name} className="os-sig">
                <div
                  className="bubble"
                  style={{ background: founder.bg, color: founder.fg }}
                >
                  {founder.name[0]}
                </div>
                <div>
                  <div className="founder-name">{founder.name}</div>
                  <div className="founder-role">
                    {founder.role} · {founder.origin}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE GOT HERE */}
      <section className="os-timeline">
        <header>
          <div className="kicker clay">✦ How we got here ✦</div>
          <h2>
            From a kitchen in 2005 to a{" "}
            <span className="serif-i tomato">beta in 2026.</span>
          </h2>
        </header>
        <div className="items">
          {timeline.map((item) => (
            <div className="item" key={item.year}>
              <div className="year">{item.year}</div>
              <div>
                <div className="title">{item.title}</div>
                <div className="body">{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="os-principles">
        <div className="wrap">
          <div className="intro">
            <div>
              <div className="kicker clay">✦ How we work ✦</div>
              <h2>
                Four things we{" "}
                <span className="serif-i tomato">
                  won&apos;t compromise on.
                </span>
              </h2>
            </div>
            <p>
              We are a small team by design, where every decision has clear
              ownership and every shortcut must be justified. Our choices are
              intentional, human-led, and always explainable in practical,
              real-world terms.
            </p>
          </div>
          <div className="grid">
            {principles.map((principle, index) => (
              <div
                key={principle.num}
                className="os-principle card-bordered"
                style={{
                  background: index % 2 ? "var(--card)" : "var(--cream)",
                }}
              >
                <div className="top">
                  <div className="num">{principle.num}</div>
                  <h3 className="font-bold">{principle.title}</h3>
                </div>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="os-close">
        <div className="wrap">
          <div className="kicker">✦ Come with us ✦</div>
          <h2>
            If any of this{" "}
            <span className="serif-i mustard">resonates with you,</span>
            <br />
            we’d be glad to hear from you and explore what we could build
            together.
          </h2>
          <div className="cta-row">
            <Link href="/#signup" className="btn-pill tomato-bg">
              Join the waitlist -&gt;
            </Link>
            <a href="mailto:hello@clara.co" className="btn-pill outline">
              Say hello
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};
