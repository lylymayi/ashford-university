import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import PageWrapper from '../components/PageWrapper';

function Registration() {
  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto py-12 px-6">
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 relative z-10">
          <h2 className="text-3xl font-extrabold text-red-800 text-center mb-2">
            Student Registration
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Please complete the form below to register. Make sure all required fields are filled in.
          </p>

          <RegistrationForm />
        </div>
      </div>
    </PageWrapper>
  );
}

export default Registration;
