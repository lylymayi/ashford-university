import React, { useState } from "react";
import StudentIDPreview from "./StudentIDPreview";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file)); // creates a preview URL

      const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
      const updatedUser = { ...currentUser, photo: photoURL };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Registration</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mb-2 block w-full"
      />

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded mb-2 block w-full"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        className="mb-4 block"
      />

      {/* Preview component */}
      <StudentIDPreview name={name} username={username} photo={photo} />
    </div>
  );
}

export default RegistrationForm;
