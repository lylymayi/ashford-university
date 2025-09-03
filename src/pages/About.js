import React from 'react';
import {
  AcademicCapIcon,
  BookOpenIcon,
  LightBulbIcon,
  UserGroupIcon,
  GlobeAltIcon,
  SparklesIcon,
  HeartIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import CampusMap from '../components/CampusMap';
import Testimonials from '../components/Testimonials';

const features = [
  { icon: AcademicCapIcon, title: "Research and Innovation Center", description: "A hub for academic innovation, research, and community projects." },
  { icon: BookOpenIcon, title: "Library and Archives", description: "Equipped with an extensive collection of Philippine heritage, documents, digital resources, and international books." },
  { icon: LightBulbIcon, title: "Smart Classrooms", description: "Interactive technologies, digital libraries, collaborative spaces, and modern halls." },
  { icon: HeartIcon, title: "Athletics & Wellness Hall", description: "Facilities for sports, fitness, and wellness programs supporting healthy body and mind." },
  { icon: SparklesIcon, title: "Green Spaces & Eco-Friendly Campus", description: "Promotes sustainability and provides a relaxing outdoor environment." },
  { icon: UserGroupIcon, title: "Student Hub", description: "Space for student organizations, art exhibitions, and intercultural programs." },
];

const programs = [
  { icon: LightBulbIcon, title: "Leadership & Innovation Labs", description: "Develop entrepreneurship, leadership, and problem-solving skills." },
  { icon: GlobeAltIcon, title: "International Exchange Programs", description: "Study abroad with partner universities across Asia, Europe, and America." },
  { icon: AcademicCapIcon, title: "Ashford Global Scholar Program", description: "Competitive scholarships fostering international exposure and research excellence." },
  { icon: UsersIcon, title: "Community Engagement & Service Learning", description: "Transform classroom knowledge into real-world experience." },
];

const coreValues = [
  { icon: SparklesIcon, title: "Excellence", description: "Striving for the highest academic and professional standards." },
  { icon: HeartIcon, title: "Integrity", description: "Upholding honesty, fairness, and ethical conduct." },
  { icon: BookOpenIcon, title: "Cultural Pride", description: "Pride for our Filipino identity, embracing global perspectives." },
  { icon: LightBulbIcon, title: "Innovation", description: "Promoting creativity, adaptability, and lifelong learning." },
  { icon: UserGroupIcon, title: "Community", description: "Building strong connections within and outside the university." },
];

function About() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-900 via-red-700 to-red-500 text-white rounded-2xl shadow-xl p-12 mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 tracking-wide"
        >
          About Ashford Institute University
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg max-w-2xl mx-auto opacity-90"
        >
          Founded in 2018 at Quezon City, Ashford Institute University is a dynamic institution committed
          to academic excellence, global engagement, and nurturing local pride with international ambition.
        </motion.p>
      </section>

      {/* History */}
      <section className="mb-12 bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold mb-4 text-red-800">Our History</h2>
        <p className="mb-3 text-gray-700 leading-relaxed">
          Ashford provides access to world-class knowledge, diverse perspectives, and cutting-edge skills.
          With a distinguished Department of History, students explore Philippine Heritage, World
          Civilizations, and Historical Research through immersive fieldwork, archival studies, and cultural
          exchange programs.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Campus life is enriching and inclusive, featuring student-led organizations, academic symposiums,
          and vibrant cultural events that foster leadership and creativity. Whether attending lectures in
          modern halls or relaxing in green spaces, Ashford is where local pride meets global ambition.
        </p>
      </section>

      {/* Campus Facilities */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-red-800 text-center">Campus Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 flex items-start space-x-5 hover:shadow-xl hover:scale-105 transition transform duration-200"
            >
              <div className="p-3 rounded-full bg-red-100 text-red-700">
                <feature.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-red-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Special Programs */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-red-800 text-center">Special Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-red-50 rounded-2xl shadow-md p-6 flex items-start space-x-5 hover:shadow-lg transition"
            >
              <div className="p-3 rounded-full bg-red-100 text-red-700">
                <program.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-red-900">{program.title}</h3>
                <p className="text-gray-700">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-red-800 text-center">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 flex items-start space-x-4 hover:shadow-xl transition"
            >
              <div className="p-3 rounded-full bg-red-100 text-red-700">
                <value.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-red-900">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Faculty & Staff */}
      <section className="mb-12 bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold mb-4 text-red-800">Faculty & Staff Highlights</h2>
        <p className="text-gray-700">
          Our faculty includes award-winning scientists, artists, and dedicated educators who mentor and
          inspire students every day.
        </p>
      </section>

      {/* Campus Map */}
      <CampusMap />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}

export default About;
