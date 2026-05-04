type PhoneMockProps = {
  hero?: string;
  scheme?: "dark" | "light";
};

export function PhoneMock({ scheme = "light", hero = "/assets/food-hero.jpg" }: PhoneMockProps) {
  const bg = scheme === "dark" ? "#1a1a1c" : "#ffffff";
  const ink = scheme === "dark" ? "#f1ede4" : "#151414";
  const sub = scheme === "dark" ? "rgba(241,237,228,0.55)" : "rgba(21,20,20,0.55)";
  const chipBg = scheme === "dark" ? "rgba(255,255,255,0.06)" : "#f4f2ec";

  return (
    <div
      style={{
        width: 300,
        height: 620,
        borderRadius: 42,
        background: bg,
        boxShadow:
          "0 40px 80px -20px rgba(0,0,0,0.35), 0 0 0 10px #111 inset, 0 0 0 11px rgba(255,255,255,0.04) inset",
        padding: "12px 12px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 100, height: 26, background: "#000", borderRadius: 14, zIndex: 3 }} />
      <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 14px 0", fontSize: 11, fontWeight: 600, color: ink, position: "relative", zIndex: 2 }}>
        <span>9:41</span>
        <span style={{ opacity: 0.7 }}>100%</span>
      </div>

      <div style={{ marginTop: 28, borderRadius: 28, overflow: "hidden", height: 540, background: bg }}>
        <div
          style={{
            height: 200,
            position: "relative",
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)" }} />
          <div style={{ position: "absolute", top: 14, left: 14, padding: "6px 10px", borderRadius: 999, background: "rgba(255,255,255,0.92)", fontSize: 10, fontWeight: 600, color: "#151414" }}>
            TABLE 12 · DINE-IN
          </div>
          <div style={{ position: "absolute", bottom: 14, left: 14, right: 14 }}>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 28, lineHeight: 1, color: "#fff", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>The Pantry</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.9)", marginTop: 4 }}>Shoreditch · Open until 23:00</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 6, padding: "12px 14px 8px", overflow: "hidden" }}>
          {["All", "Small plates", "Mains", "Sides", "Desserts"].map((category, index) => (
            <div
              key={category}
              style={{
                padding: "6px 10px",
                fontSize: 11,
                fontWeight: 500,
                borderRadius: 999,
                background: index === 0 ? ink : chipBg,
                color: index === 0 ? bg : ink,
                whiteSpace: "nowrap",
              }}
            >
              {category}
            </div>
          ))}
        </div>

        {[
          { name: "Jollof spaghetti, beef suya", sub: "Scotch bonnet · smoked paprika", price: "£14" },
          { name: "Egusi & pounded yam", sub: "Goat meat · leafy greens", price: "£18" },
          { name: "Peppered seabass", sub: "Plantain · tomato stew", price: "£22" },
        ].map((item) => (
          <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "14px 14px", borderTop: `1px solid ${scheme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}` }}>
            <div style={{ flex: 1, paddingRight: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: ink }}>{item.name}</div>
              <div style={{ fontSize: 11, color: sub, marginTop: 2 }}>{item.sub}</div>
            </div>
            <div style={{ fontSize: 13, color: ink, fontVariantNumeric: "tabular-nums", fontWeight: 500 }}>{item.price}</div>
          </div>
        ))}

        <div style={{ padding: "14px 14px 0" }}>
          <div style={{ background: ink, color: bg, borderRadius: 14, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 12, opacity: 0.6 }}>View bill · Table 12</div>
              <div style={{ fontSize: 16, fontWeight: 600, marginTop: 2, fontVariantNumeric: "tabular-nums" }}>£64.00</div>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>Pay -&gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
