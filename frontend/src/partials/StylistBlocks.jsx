import React from 'react';
import HairStylist from '../images/hair-stylist-a.jpg'

function StylistBlocks() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

          {/* 1st item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
          <img className="mx-auto rounded -mt-1 mb-2" src={HairStylist} alt="Hero" />
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Stylist A</h4>
            <p className="text-gray-600 text-center">Stylist A description</p>
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="mx-auto rounded -mt-1 mb-2" src={HairStylist} alt="Hero" />
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Stylist B</h4>
            <p className="text-gray-600 text-center">Stylist B description</p>
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="mx-auto rounded -mt-1 mb-2" src={HairStylist} alt="Hero" />
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Stylist C</h4>
            <p className="text-gray-600 text-center">Stylist C description</p>
          </div>

          {/* 4th item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="mx-auto rounded -mt-1 mb-2" src={HairStylist} alt="Hero" />
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Stylist D</h4>
            <p className="text-gray-600 text-center">Stylist D description</p>
          </div>

          {/* 5th item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="mx-auto rounded -mt-1 mb-2" src={HairStylist} alt="Hero" />
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Stylist E</h4>
            <p className="text-gray-600 text-center">Stylist E description</p>
          </div>

          {/* 6th item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="mx-auto rounded -mt-1 mb-2" src={HairStylist} alt="Hero" />
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Stylist F</h4>
            <p className="text-gray-600 text-center">Stylist F description</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StylistBlocks;
