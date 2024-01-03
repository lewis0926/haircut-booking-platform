import React from 'react';
import StylistBlocks from "./StylistBlocks";

const StylistSection = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className="h2 mb-4">Explore the stylists</h1>
        <p className="text-xl text-gray-600">Here are the best stylist in Toronto. Get personalized, expert styling services including Hair cuts for Men & Women, Extenstions, Keratine treatment, Microblading, & Much more. Available in-store or virtually. Book your appointment today!
        </p>
      </div>
      <StylistBlocks />
    </div>
  );
};

export default StylistSection;
