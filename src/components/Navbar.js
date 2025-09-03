import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  // Load user when the component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(storedUser);

    // Listen for storage changes (works across tabs too)
    const handleStorageChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem("currentUser"));
      setCurrentUser(updatedUser);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-red-800 text-white px-6 py-3 flex justify-between items-center">
      {/* School name with logo */}
      <div className="font-bold text-lg flex items-center space-x-2">
        <img
          src={`${process.env.PUBLIC_URL}/assets/campus1.png`} // <-- replace with your logo path
          alt="Ashford Institute University Logo"
          className="w-12 h-12" // adjust size as needed
        />
        <span>Ashford Institute University</span>
      </div>

      <div className="space-x-6 flex items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>

        {!currentUser ? (
          <>
            <Link to="/registration" className="hover:underline">Registration</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </>
        ) : (
          <>
            <Link to="/profile" className="hover:underline">Profile</Link>
            <button
              onClick={handleLogout}
              className="bg-white text-red-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
