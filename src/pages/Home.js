import React from 'react';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative bg-hero flex flex-col items-center justify-center h-72">
        <img src="/assets/campus2.png" alt="Campus" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl text-black text-outline-black font-bold font-century">Welcome to Ashford Institute University</h1>
          <p className="mt-4 text-xl text-black font-arial">Empowering Minds, Shaping Futures</p>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="py-6 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold">Mission</h2>
        <p className="mt-2">Our purpose is to deliver transformational education based on Filipino values and enhanced by global insights. With challenging academic programs, worldwide alliances, and diverse campus life, Ashford International University develops critical thinkers, ethical citizens, and lifelong learners. We are dedicated to creating a dynamic academic culture in which students discover knowledge, honor heritage, and seek positive impact across boundaries.</p>
      </section>

       <section className="py-6 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold">Vision</h3>
        <p className="mt-2">Ashford Institute University has the vision of becoming a world-renowned institution that fosters excellence, innovation, and cultural integrity. We aim to be a learning-focused university that appreciates the connection between the pride of local origin and worldwide aspirations, enabling students to become leaders in their communities and global contributors.</p>
      </section>

      {/* Carousel */}
      <Carousel />

      {/* Brief Description */}
      <section className="max-w-3xl mx-auto my-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Discover Our Story</h3>
        <p>Founded in 2018, Ashford Institute University is accredited and offers a wide variety of courses in sciences, humanities, and arts. Our vibrant campus fosters creativity, diversity, and personal growth.</p>
      </section>

      {/* Quick Links */}
      <section className="flex flex-col md:flex-row gap-4 justify-center my-6">
        <a href="/registration" className="bg-button1 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Apply Now</a>
        <a href="/about" className="bg-button2 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition">Visit Campus</a>
        <a href="/about" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-button3 transition">Contact Us</a>
      </section>
    </div>
  );
}

export default Home;