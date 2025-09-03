import React from 'react';

function Footer() {
  return (
    <footer className="bg-red-800 text-white mt-8 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <span>© {new Date().getFullYear()} Ashford Institute University. All rights reserved.</span>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook fa-lg"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter fa-lg"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram fa-lg"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin fa-lg"></i></a>
        </div>
        <div>
          <span>Contact: info@ashintuniversity.edu | +639 333 085 795</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;