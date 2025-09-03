import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import Dashboard from "../components/Dashboard";
import PageWrapper from '../components/PageWrapper';

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError("⚠️ Please fill in all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("students")) || [];
    const user = users.find(
      (u) =>
        (u.username === form.username || u.email === form.username) &&
        u.password === form.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setLoggedIn(true);
      setError("");
    } else {
      setError("❌ Invalid credentials");
    }
  };

  if (loggedIn) {
    return <Dashboard user={JSON.parse(localStorage.getItem("currentUser"))} />;
  }

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 relative z-10">
          <h2 className="text-3xl font-extrabold text-red-800 text-center mb-2">
            Student Login
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Welcome back! Please log in with your credentials.
          </p>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-center font-medium shadow-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username or Email
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username or email"
                value={form.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "🙈 Hide" : "👁️ Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition duration-200"
            >
              Login
            </button>

            <div className="flex justify-end items-center mt-3">
              <Link
                to="/Registration"
                className="text-sm text-gray-600 hover:text-red-700 font-medium"
              >
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Login;
