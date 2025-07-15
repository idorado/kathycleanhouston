import React from 'react';

const WhatToExpectMoveInOut = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-foreground">What to Expect from Our Move In/Out Cleaning</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">For Move-In Cleaning</h3>
            <p className="text-gray-600">We prepare your new home for your arrival. Our team ensures every corner is sanitized and sparkling clean, so you can settle in with peace of mind. We focus on deep cleaning kitchens, bathrooms, floors, and windows, creating a fresh and welcoming environment for you and your family.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">For Move-Out Cleaning</h3>
            <p className="text-gray-600">Our move-out cleaning service is designed to help you leave your old home in the best possible condition. We handle the deep cleaning tasks required to meet landlord standards or prepare the house for the next occupants, helping you secure your deposit and leave on good terms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectMoveInOut;
