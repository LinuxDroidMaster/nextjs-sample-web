export default function Home() {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Welcome to My Next.js Website</h1>
        <p>Subscribe to my YouTube channel **LinuxDroidMaster** for tech content!</p>
  
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          {/* Subscribe Button */}
          <a
            href="https://www.youtube.com/@LinuxDroidMaster?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#FF0000",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "8px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 8px rgba(255, 0, 0, 0.4)"
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 6px 12px rgba(255, 0, 0, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.4)";
            }}
          >
            🔔 Subscribe to LinuxDroidMaster
          </a>
  
          {/* Watch Videos Button */}
          <a
            href="https://www.youtube.com/@LinuxDroidMaster/videos"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#0088FF",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "8px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 8px rgba(0, 136, 255, 0.4)"
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 6px 12px rgba(0, 136, 255, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 136, 255, 0.4)";
            }}
          >
            ▶️ Watch LinuxDroidMaster Videos
          </a>
        </div>
      </div>
    );
  }