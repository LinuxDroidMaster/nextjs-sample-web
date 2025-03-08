export default function Tab2() {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-8 text-center"
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <h1 className="text-3xl font-bold mb-4">Join the Community</h1>
        <p className="mb-6 text-lg">
          Share, learn, and grow with fellow tech enthusiasts and Linux experts.
        </p>
        <a
          href="https://www.youtube.com/@LinuxDroidMaster/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-purple-600 text-white rounded-full transition duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-lg"
        >
          Explore Community
        </a>
      </div>
    );
  }
  