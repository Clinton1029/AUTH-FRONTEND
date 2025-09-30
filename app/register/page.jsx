"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-blue-600 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl"
      >
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          Create Account
        </h1>

        {/* Full Name */}
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 font-medium"
          placeholder="John Doe"
        />

        {/* Email */}
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 font-medium"
          placeholder="example@email.com"
        />

        {/* Password */}
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Password
        </label>
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 font-medium"
            placeholder="Enter your password"
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-600 hover:text-gray-800"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition font-bold shadow-md"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-4 text-gray-700 font-medium">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
