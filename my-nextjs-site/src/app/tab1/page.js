export default function Tab1() {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-8 text-center"
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <h1 className="text-3xl font-bold mb-4">Latest Videos</h1>
        <p className="mb-6 text-lg">
          Discover the latest tutorials and tips to master Linux and technology.
        </p>
        <a
          href="https://www.youtube.com/@LinuxDroidMaster/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-full transition duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
        >
          Watch Videos
        </a>
      </div>
    );
  }
  