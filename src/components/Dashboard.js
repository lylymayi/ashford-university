import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is logged in
    const currentUser = user || JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      navigate("/login"); // Redirect if no user
    }
  }, [user, navigate]);

  // Get user (from props or localStorage)
  const currentUser = user || JSON.parse(localStorage.getItem("currentUser"));

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("currentUser"); // Clear session
    navigate("/home"); // Redirect to home
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Welcome, {currentUser?.name || "Student"}!
        </h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          href="/profile"
          className="bg-blue-100 dark:bg-blue-900 p-4 rounded shadow hover:bg-blue-200 dark:hover:bg-blue-800 transition"
        >
          Profile
        </a>
        <a
          href="/courses"
          className="bg-green-100 dark:bg-green-900 p-4 rounded shadow hover:bg-green-200 dark:hover:bg-green-800 transition"
        >
          Courses
        </a>
        <a
          href="/announcements"
          className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded shadow hover:bg-yellow-200 dark:hover:bg-yellow-800 transition"
        >
          Announcements
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
