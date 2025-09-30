export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-green-50">
      <div className="text-center p-10 bg-white shadow-lg rounded-2xl">
        <h1 className="text-4xl font-bold mb-4">Welcome 👋</h1>
        <p className="text-gray-600 mb-6">
          This is a simple authentication app built with Next.js 15 + Tailwind.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
