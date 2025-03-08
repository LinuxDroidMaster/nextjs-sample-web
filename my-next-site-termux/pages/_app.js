import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, padding: "20px" }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}