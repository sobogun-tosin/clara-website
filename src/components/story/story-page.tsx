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
          Built from <span className="serif-i tomato">l ived experience </span>
          across food, business, and technology, between Nigeria and the UK.
        </h1>
        <div className="lede-row">
          <p className="lede">
            We grew up between food, business, and technology — from family-run
            operations in Nigeria to real restaurant floors in the UK and
            start-up all hand and product roadmaps. We saw the same pattern
            everywhere: great food and hard work held back by disconnected
            systems. Clara is what happens when those experiences come together.
          </p>

          <p className="context">
            Built from firsthand experience across service, finance, and
            engineering, Clara is our attempt to fix the everyday problems
            restaurants face — from managing orders to managing customers
            relationship — without adding complexity.{" "}
            <span className="serif-i">
              It’s a solution shaped by real life experiences, and built to make
              restaurants run better.
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
              Clara was not built in a boardroom, and we didn’t arrive at this
              idea by accident. Between us, we’ve seen the food business from
              every angle, from cooked food to raw supply, from family-run
              operations to the day-to-day realities of serving customers.
            </p>
            <p>
              We didn’t grow up in identical stories, but they were closely
              connected. Oluwabusola and Ajisola’s family had a food restaurant,
              learning firsthand what it takes to serve people daily with
              consistency and care. Tosin’s background comes from the food
              business, understanding supply, sourcing, and the foundation every
              food business depends on. Tobiloba grew up around business more
              broadly, where adaptability and problem-solving were part of
              everyday life.
            </p>
            <p>
              Oluwabusola worked as a food server in a hotel, where the cracks
              were impossible to ignore, customer preferences forgotten,
              delivery issues piling up, and staff constantly rewriting the same
              customer details because there was no system that actually worked
              or connected together. Moving to the UK made those gaps even
              clearer: tighter constraints around customer data, fragmented
              ordering systems, and the operational pressure on small and
              mid-sized restaurants trying to keep up.
            </p>
            <p>
              Ajisola saw the same problem from another side. Working in a small
              restaurant in Essex, he experienced how traditional ordering
              systems slowed everything down, orders missed, deliveries
              disorganised, and no reliable way to track or retain customer
              information. It wasn’t a lack of effort. It was a lack of the
              right tools.
            </p>

            <p>And that’s the pattern we couldn’t ignore.</p>

            <p>
              Alongside this, we’ve been building hand in hand with engineers
              who not only have experience across multiple companies, but who
              also come from homes shaped by family businesses. These technical
              expertise and lived understanding mean we’re not guessing. We
              understand both how these systems are built and how they’re
              actually used in real life. It’s this perspective that shapes how
              Clara is designed to genuinely support restaurants, not complicate
              them.
            </p>

            <p>
              UK restaurants are doing everything right, from the food, the
              service, the hustle, but they’re being held back by systems that
              don’t understand how they actually operate. So we built Clara.
            </p>
            <p>
              Clara Commerce is designed to help small and mid-sized restaurants
              run better without adding complexity. It gives restaurants a
              simple way to manage orders, handle deliveries, and, importantly,
              retain customer information properly in just one platform. No more
              rewriting details. No more losing track of regulars. Just a system
              that enables restaurants to operate more profitably by owning
              demand, data, and customer relationships{" "}
            </p>

            <p>
              We believe small and mid-sized restaurants deserve better
              infrastructure, not just better margins.
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
                Things we{" "}
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
