import React, { useState, useRef } from "react";
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
  const [showPassword, setShowPassword] = useState(false);
  const suggestionsRef = useRef(null);

  // 📚 Program Options
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
    ],
    Business: [
      "BS Accountancy",
      "BS Business Administration",
      "BS Marketing Management",
      "BS Financial Management",
      "BS Entrepreneurship",
    ],
    Education: [
      "BSEd English",
      "BSEd Mathematics",
      "BSEd Science",
      "BSEd Social Studies",
      "BSEd Filipino",
      "Bachelor of Elementary Education",
    ],
    Health: [
      "BS Nursing",
      "BS Pharmacy",
      "BS Medical Technology",
      "BS Physical Therapy",
      "BS Radiologic Technology",
    ],
    Arts: [
      "BA Communication",
      "BA Psychology",
      "BA Political Science",
      "BA Sociology",
      "BA Philosophy",
    ],
    "Hospitality & Tourism": [
      "BS Hotel and Restaurant Management",
      "BS Tourism Management",
      "BS Culinary Arts",
    ],
  };

  const allSuggestions = Object.entries(programOptions).flatMap(([cat, programs]) =>
    programs.map((p) => ({ category: cat, program: p }))
  );

  const filteredSuggestions = allSuggestions.filter((item) =>
    item.program.toLowerCase().includes(form.program.toLowerCase())
  );

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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handlePhotoUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prevForm) => ({ ...prevForm, photo: reader.result }));
    };
    reader.readAsDataURL(file);
  }
};

  const getPasswordStrength = () => {
    const { password } = form;
    if (password.length < 6) return "Weak";
    if (
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    )
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
      navigate("/login"); // redirect to login
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      {success && (
        <div className="p-4 rounded-lg bg-green-100 text-green-800 text-center font-semibold">
          ✅ Registration successful! Redirecting to login...
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-sm font-semibold">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded-lg"
        />
      </div>

      {/* Username */}
      <div>
        <label className="block text-sm font-semibold">Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded-lg"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded-lg"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          pattern="^09\d{9}$"
          required
          className="w-full border px-3 py-2 rounded-lg"
        />
      </div>

      {/* Program */}
      <div className="relative">
        <label className="block text-sm font-semibold">Program</label>
        <input
          type="text"
          name="program"
          value={form.program}
          onChange={handleProgramChange}
          onKeyDown={handleKeyDown}
          className="w-full border px-3 py-2 rounded-lg"
          required
        />
        {showSuggestions && form.program && filteredSuggestions.length > 0 && (
          <div className="absolute z-10 w-full bg-white border rounded-lg shadow-md mt-1 max-h-60 overflow-y-auto">
            {filteredSuggestions.map((item, index) => (
              <div
                key={`${item.category}-${item.program}`}
                onClick={() => {
                  setForm({ ...form, program: item.program });
                  setShowSuggestions(false);
                }}
                className={`px-4 py-2 cursor-pointer ${
                  index === highlightedIndex
                    ? "bg-red-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <span>{item.program}</span>
                <span className="block text-xs text-gray-500">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Year Level */}
      <div>
        <label className="block text-sm font-semibold">Year Level</label>
        <select
          name="yearLevel"
          value={form.yearLevel}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded-lg"
        >
          <option value="">Select year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
          <option value="5th Year">5th Year</option>
        </select>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-semibold">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded-lg"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-sm text-red-700"
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

      {/* Photo */}
      <div>
        <label className="block text-sm font-semibold">Upload Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="w-full"
        />
      </div>

      {/* Captcha */}
      <div>
        <label className="block text-sm font-semibold">Captcha</label>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-gray-200 rounded-lg font-bold select-none">
            {captchaCode}
          </div>
          <button
            type="button"
            onClick={() =>
              setCaptchaCode(
                Math.random().toString(36).substring(2, 8).toUpperCase()
              )
            }
            className="px-3 py-1 bg-red-600 text-white rounded-lg"
          >
            Refresh
          </button>
        </div>
        <input
          type="text"
          name="captcha"
          value={form.captcha}
          onChange={handleChange}
          required
          placeholder="Enter captcha"
          className="w-full border px-3 py-2 rounded-lg mt-2"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800"
      >
        Submit Registration
      </button>

      {/* Student ID Preview */}
      <StudentIDPreview
        name={form.name}
        username={form.username}
        photo={form.photo}
      />
    </form>
  );
}

export default RegistrationForm;
