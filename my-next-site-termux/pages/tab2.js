export default function Tab2() {
    return (
      <div style={{
        textAlign: "center",
        padding: "50px",
        background: "linear-gradient(135deg, #222, #444)",
        color: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",
        maxWidth: "800px",
        margin: "auto"
      }}>
        <h1>🛠️ Advanced Termux Tricks</h1>
        <p>Unlock hidden features and automation in Termux.</p>
  
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          {/* Watch Advanced Tricks */}
          <a
            href="https://www.youtube.com/@LinuxDroidMaster"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#FF4444",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "8px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 8px rgba(255, 68, 68, 0.4)"
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 6px 12px rgba(255, 68, 68, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 8px rgba(255, 68, 68, 0.4)";
            }}
          >
            🎥 Watch Advanced Tricks
          </a>
        </div>
      </div>
    );
  }