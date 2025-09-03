import React from 'react';
import { AcademicCapIcon, BookOpenIcon, LightBulbIcon, UserGroupIcon, GlobeAltIcon, SparklesIcon, HeartIcon, UsersIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import CampusMap from '../components/CampusMap';
import Testimonials from '../components/Testimonials';
import PageWrapper from '../components/PageWrapper';

const features = [ /* your features array as before */ ];
const programs = [ /* your programs array as before */ ];
const coreValues = [ /* your coreValues array as before */ ];

function About() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto py-12 px-4 font-sans text-white">
        {/* Hero Section */}
        <section className="relative rounded-2xl shadow-xl p-12 mb-12 text-center bg-red-900 bg-opacity-80">
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
        <section className="mb-12 bg-red-800 bg-opacity-80 rounded-2xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Our History</h2>
          <p className="mb-3 leading-relaxed">
            Ashford provides access to world-class knowledge, diverse perspectives, and cutting-edge skills.
            With a distinguished Department of History, students explore Philippine Heritage, World
            Civilizations, and Historical Research through immersive fieldwork, archival studies, and cultural
            exchange programs.
          </p>
          <p className="leading-relaxed">
            Campus life is enriching and inclusive, featuring student-led organizations, academic symposiums,
            and vibrant cultural events that foster leadership and creativity. Whether attending lectures in
            modern halls or relaxing in green spaces, Ashford is where local pride meets global ambition.
          </p>
        </section>

        {/* Campus Facilities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-red-300 text-center">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-red-900 bg-opacity-70 rounded-2xl p-6 flex items-start space-x-5 hover:shadow-xl hover:scale-105 transition transform duration-200"
              >
                <div className="p-3 rounded-full bg-red-700 text-red-100">
                  <feature.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{feature.title}</h3>
                  <p className="text-red-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Special Programs */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-red-300 text-center">Special Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-red-800 bg-opacity-60 rounded-2xl p-6 flex items-start space-x-5 hover:shadow-lg transition"
              >
                <div className="p-3 rounded-full bg-red-700 text-red-100">
                  <program.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{program.title}</h3>
                  <p className="text-red-300">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-red-300 text-center">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-red-900 bg-opacity-70 rounded-2xl p-6 flex items-start space-x-4 hover:shadow-xl transition"
              >
                <div className="p-3 rounded-full bg-red-700 text-red-100">
                  <value.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{value.title}</h3>
                  <p className="text-red-300 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Faculty & Staff */}
        <section className="mb-12 bg-red-800 bg-opacity-80 rounded-2xl p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-white">Faculty & Staff Highlights</h2>
          <p className="text-red-200">
            Our faculty includes award-winning scientists, artists, and dedicated educators who mentor and
            inspire students every day.
          </p>
        </section>

        {/* Campus Map & Testimonials */}
        <CampusMap />
        <Testimonials />
      </div>
    </PageWrapper>
  );
}

export default About;
