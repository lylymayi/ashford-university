import React, { useState } from "react";

function ForgotPassword() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [step, setStep] = useState(1); // Step 1 = username/email, Step 2 = answer question
  const [currentUser, setCurrentUser] = useState(null);
  const [answer, setAnswer] = useState("");

  // Step 1: Find user by username or email
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("students")) || [];
    const user = users.find((u) => u.username === input || u.email === input);

    if (user) {
      setCurrentUser(user);
      setStep(2);
      setMessage("");
    } else {
      setMessage("❌ No account found with that username or email.");
    }
  };

  // Step 2: Verify security answer
  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) return;

    const actualAnswer = currentUser.securityAnswer || "";

    if (answer.trim().toLowerCase() === actualAnswer.toLowerCase()) {
      const token = Math.random().toString(36).substring(2, 10).toUpperCase();
      setResetToken(token);
      setMessage("✅ Security question verified! A reset token has been generated.");
      localStorage.setItem(
        "resetToken",
        JSON.stringify({ username: currentUser.username, token })
      );
    } else {
      setMessage("❌ Incorrect answer. Please try again.");
    }
  };

  // Get the security question text to display
  const getSecurityQuestionText = () => {
    if (!currentUser) return "";
    // Always use the saved question text
    return currentUser.securityQuestionText || "Answer your security question";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-red-800 text-center mb-2">
          Forgot Password
        </h2>

        <p className="text-gray-600 text-center mb-6">
          {step === 1
            ? "Enter your username or email to recover your password."
            : getSecurityQuestionText()}
        </p>

        {message && (
          <div
            className={`mb-4 p-3 rounded-lg text-center font-medium shadow-sm ${
              message.startsWith("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {message}
            {resetToken && (
              <p className="mt-2 text-sm text-gray-700">
                🔑 Your reset token: <span className="font-bold">{resetToken}</span>
              </p>
            )}
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username or Email
              </label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your username or email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition duration-200"
            >
              Next
            </button>
          </form>
        )}

        {step === 2 && currentUser && (
          <form onSubmit={handleAnswerSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your answer"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition duration-200"
            >
              Verify Answer
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
