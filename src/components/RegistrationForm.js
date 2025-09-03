import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudentIDPreview from "./StudentIDPreview";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    program: "",
    yearLevel: "",
    password: "",
    captcha: "",
    photo: "",
  });

  const navigate = useNavigate();
  const [captchaCode, setCaptchaCode] = useState(
    Math.random().toString(36).substring(2, 8).toUpperCase()
  );
  const [success, setSuccess] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false); // 👁️ Password toggle
  const suggestionsRef = useRef(null);

  // Program Options
  const programOptions = {
    "Computing & IT": [
      "BS Computer Science",
      "BS Information Technology",
      "BS Information Systems",
      "BS Software Engineering",
      "BS Data Science",
      "BS Cybersecurity",
      "BS Computer Engineering",
    ],
    Engineering: [
      "BS Civil Engineering",
      "BS Mechanical Engineering",
      "BS Electrical Engineering",
      "BS Electronics Engineering",
      "BS Industrial Engineering",
      "BS Chemical Engineering",
      "BS Aerospace Engineering",
      "BS Mining Engineering",
    ],
    Business: [
      "BS Accountancy",
      "BS Business Administration",
      "BS Marketing Management",
      "BS Financial Management",
      "BS Entrepreneurship",
      "BS Management Accounting",
      "BS Human Resource Management",
      "BS Economics",
    ],
    Education: [
      "BSEd English",
      "BSEd Mathematics",
      "BSEd Science",
      "BSEd Social Studies",
      "BSEd Filipino",
      "Bachelor of Elementary Education",
      "Bachelor of Early Childhood Education",
      "Bachelor of Physical Education",
    ],
    Health: [
      "BS Nursing",
      "BS Pharmacy",
      "BS Medical Technology",
      "BS Physical Therapy",
      "BS Radiologic Technology",
      "BS Nutrition and Dietetics",
      "BS Public Health",
      "BS Occupational Therapy",
    ],
    Arts: [
      "BA Communication",
      "BA Psychology",
      "BA Political Science",
      "BA Sociology",
      "BA Philosophy",
      "BA Literature",
      "BA Fine Arts",
      "BA History",
      "BA Theater Arts",
    ],
    "Hospitality & Tourism": [
      "BS Hotel and Restaurant Management",
      "BS Tourism Management",
      "BS Culinary Arts",
      "BS Hospitality Management",
    ],
  };

  const allSuggestions = Object.entries(programOptions).flatMap(([cat, programs]) =>
    programs.map((p) => ({ category: cat, program: p }))
  );

  const filteredSuggestions = allSuggestions.filter((item) =>
    item.program.toLowerCase().includes(form.program.toLowerCase())
  );

  // Program input handlers
  const handleProgramChange = (e) => {
    setForm({ ...form, program: e.target.value });
    setShowSuggestions(true);
    setHighlightedIndex(0);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || filteredSuggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev === filteredSuggestions.length - 1 ? 0 : prev + 1
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev === 0 ? filteredSuggestions.length - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      const chosen = filteredSuggestions[highlightedIndex];
      if (chosen) {
        setForm({ ...form, program: chosen.program });
        setShowSuggestions(false);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setForm({ ...form, photo: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const getPasswordStrength = () => {
    const { password } = form;
    if (password.length < 6) return "Weak";
    if (/[A-Z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password))
      return "Strong";
    return "Medium";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^09\d{9}$/.test(form.phone)) {
      alert("Invalid phone number. Must start with 09 and be 11 digits long.");
      return;
    }

    if (form.captcha !== captchaCode) {
      alert("Incorrect captcha. Try again.");
      return;
    }

    // Save user
    const users = JSON.parse(localStorage.getItem("students")) || [];
    users.push(form);
    localStorage.setItem("students", JSON.stringify(users));

    setSuccess(true);

    // Reset form
    setForm({
      name: "",
      username: "",
      email: "",
      phone: "",
      program: "",
      yearLevel: "",
      password: "",
      captcha: "",
      photo: "",
    });
    setCaptchaCode(Math.random().toString(36).substring(2, 8).toUpperCase());

    setTimeout(() => {
      setSuccess(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {success && (
        <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-800 text-center font-semibold shadow-sm">
          ✅ Registration successful! Redirecting to login...
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
          required
        />
      </div>

      {/* Username */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$"
          title="Enter a valid email address (e.g., example@gmail.com)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          pattern="^09\d{9}$"
          title="Phone number must start with 09 and be 11 digits long"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
          required
        />
      </div>

      {/* Program */}
      <div className="relative">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Program</label>
        <input
          type="text"
          name="program"
          value={form.program}
          onChange={handleProgramChange}
          onKeyDown={handleKeyDown}
          placeholder="Start typing your program"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
          required
        />
        {showSuggestions && form.program && filteredSuggestions.length > 0 && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 max-h-60 overflow-y-auto">
            {filteredSuggestions.map((item, index) => (
              <div
                key={`${item.category}-${item.program}`}
                onClick={() => {
                  setForm({ ...form, program: item.program });
                  setShowSuggestions(false);
                }}
                className={`px-4 py-2 cursor-pointer ${
                  index === highlightedIndex ? "bg-suggest text-black" : "hover:bg-red-100"
                }`}
              >
                <span className="text-sm font-medium">{item.program}</span>
                <span className="text-xs text-gray-500 block">{item.category}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Year Level */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Year Level</label>
        <select
          name="yearLevel"
          value={form.yearLevel}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
          required
        >
          <option value="">Select year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
          <option value="5th Year">4th Year</option>
        </select>
      </div>

      {/* Password with toggle */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-sm text-red-700 font-medium hover:underline"
          >
            {showPassword ? "🙈 Hide" : "👁️ Show"}
          </button>
        </div>
        {form.password && (
          <p
            className={`mt-2 text-sm font-semibold ${
              getPasswordStrength() === "Weak"
                ? "text-red-600"
                : getPasswordStrength() === "Medium"
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            Password Strength: {getPasswordStrength()}
          </p>
        )}
      </div>

      {/* Photo Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Captcha */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Captcha</label>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 font-bold bg-gray-200 rounded-lg tracking-widest select-none">
            {captchaCode}
          </div>
          <button
            type="button"
            onClick={() =>
              setCaptchaCode(Math.random().toString(36).substring(2, 8).toUpperCase())
            }
            className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Refresh
          </button>
        </div>
        <input
          type="text"
          name="captcha"
          value={form.captcha}
          onChange={handleChange}
          placeholder="Enter captcha"
          className="w-full mt-3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
          required
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="w-full bg-red-700 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition duration-200"
        >
          Submit Registration
        </button>
      </div>

      {/* Student ID Preview */}
      <StudentIDPreview name={form.name} username={form.username} photo={form.photo} />
    </form>
  );
}

export default RegistrationForm;
