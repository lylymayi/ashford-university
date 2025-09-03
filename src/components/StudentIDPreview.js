import React from "react";

function StudentIDPreview({ name, username, photo }) {
  return (
    <div className="mt-10 p-6 border rounded-xl shadow-lg bg-gray-50 max-w-sm mx-auto text-center">
      <h3 className="text-lg font-bold text-red-700 mb-3">🎓 Student ID Preview</h3>
      {photo ? (
        <img
          src={photo}
          alt="Student"
          className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border"
        />
      ) : (
        <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-gray-200 flex items-center justify-center text-gray-500">
          No Photo
        </div>
      )}
      <p className="font-semibold text-gray-800">{name || "Full Name"}</p>
      <p className="text-sm text-gray-600">{username || "Username"}</p>
    </div>
  );
}

export default StudentIDPreview;
