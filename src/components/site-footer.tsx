import Link from "next/link";
import { ClaraMark } from "./brand";

type SiteFooterProps = {
  storyHref?: string;
  waitlistHref?: string;
};

export function SiteFooter({ waitlistHref = "/", storyHref = "/our-story" }: SiteFooterProps) {
  return (
    <footer className="footer footer-lite">
      <div className="footer-lite-row">
        <Link href={waitlistHref} className="footer-brand-row" aria-label="Clara home">
          <ClaraMark size={40} color="var(--cream)" accent="var(--mustard)" />
          <span className="word">Clara</span>
        </Link>
        <div className="footer-lite-links">
          <Link href={storyHref}>Our Story</Link>
          <a href="mailto:hello@clara.co">hello@clara.co</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div>Copyright 2026 Clara Technologies Ltd. - Made with love in London</div>
      </div>
    </footer>
  );
}
