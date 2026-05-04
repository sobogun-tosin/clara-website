"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ClaraMark } from "./brand";

type SiteNavProps = {
  current?: "story" | "waitlist";
  storyHref?: string;
  waitlistHref?: string;
};

export const SiteNav: React.FC<SiteNavProps> = ({
  current,
  storyHref = "/our-story",
  waitlistHref = "/",
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="nav">
        <Link href={waitlistHref} className="nav-brand" aria-label="Clara home">
          <ClaraMark size={30} color="currentColor" accent="var(--tomato)" />
          <span className="word">Clara</span>
        </Link>
        <div className="nav-links">
          <Link
            href={storyHref}
            className={"nav-link" + (current === "story" ? " current" : "")}
          >
            Our Story
          </Link>
          <Link
            href={`${waitlistHref}#signup`}
            className="btn-pill small tomato-bg"
            style={{ marginLeft: 4 }}
          >
            Join the waitlist
          </Link>
        </div>
        <button
          className="nav-burger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          Menu
          <span className="nav-burger-bars">
            <span className="nav-burger-bar" />
            <span className="nav-burger-bar" />
          </span>
        </button>
      </nav>

      <div className={"nav-sheet" + (open ? " open" : "")} aria-hidden={!open}>
        <div className="sheet-head">
          <Link
            href={waitlistHref}
            className="nav-brand"
            onClick={() => setOpen(false)}
          >
            <ClaraMark size={30} color="currentColor" accent="var(--tomato)" />
            <span className="word">Clara</span>
          </Link>
          <button
            className="nav-burger"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            Close x
          </button>
        </div>
        <div className="sheet-links">
          <Link
            className="sheet-link"
            href={waitlistHref}
            onClick={() => setOpen(false)}
          >
            Waiting list
          </Link>
          <Link
            className="sheet-link"
            href={storyHref}
            onClick={() => setOpen(false)}
          >
            Our Story
          </Link>
          <a
            className="sheet-link"
            href="mailto:hello@clara.co"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
        <Link
          href={`${waitlistHref}#signup`}
          onClick={() => setOpen(false)}
          className="btn-pill tomato-bg sheet-cta"
          style={{ justifyContent: "center", width: "100%" }}
        >
          Join the waitlist -&gt;
        </Link>
      </div>
    </>
  );
};
