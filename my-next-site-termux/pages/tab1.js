export default function Tab1() {
  return (
    <div style={{
      textAlign: "center",
      padding: "50px",
      background: "linear-gradient(135deg, #00ffaa, #0066ff)",
      color: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0, 255, 170, 0.3)",
      maxWidth: "800px",
      margin: "auto"
    }}>
      <h1>🚀 Tech Setup Guide</h1>
      <p>Learn how to set up Node.js in Termux with this guide.</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {/* Watch Setup Guide */}
        <a
          href="https://www.youtube.com/@LinuxDroidMaster"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#FFCC00",
            color: "#000",
            fontSize: "18px",
            fontWeight: "bold",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "8px",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            boxShadow: "0 4px 8px rgba(255, 204, 0, 0.4)"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 6px 12px rgba(255, 204, 0, 0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 8px rgba(255, 204, 0, 0.4)";
          }}
        >
          📺 Watch Setup Video
        </a>
      </div>
    </div>
  );
}