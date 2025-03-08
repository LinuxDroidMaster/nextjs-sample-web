export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 text-center"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Linux Droid Master</h1>
      <p className="mb-6 text-xl">
        Your minimalist and modern portal for the best Linux tips and tutorials.
      </p>
      <a
        href="https://www.youtube.com/@LinuxDroidMaster/videos"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-red-600 text-white rounded-full transition duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-lg"
      >
        Subscribe to my channel
      </a>
    </div>
  );
}
