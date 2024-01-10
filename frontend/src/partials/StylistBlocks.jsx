import React from 'react';
import samplePhoto from '../images/default-headshot.png'
import {ServiceTypeLabels} from "../enum/service-type.enum";

function StylistBlocks({stylists}) {


  return (
    <section id='stylists' className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Items */}
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
          {stylists.map((stylist, index) => (
            <div key={index} className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="mx-auto rounded -mt-1 mb-2" src={samplePhoto} alt="Stylist" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{`${stylist.firstName} ${stylist.lastName}`}</h4>
              <p className="text-gray-600 text-center">{stylist.description}</p>
              <p className="mt-4 text-gray-500 text-center">
                Provided services:
                <br />
                {stylist.serviceTypes.map(serviceType=> ServiceTypeLabels[serviceType.name]).join(', ')}
              </p>
              <div>
                <a
                  className="btn text-white bg-rose-700 hover:bg-rose-800 w-full my-4 sm:w-auto sm:mb-0"
                  href="#0" // TODO: link to booking page
                >
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StylistBlocks;
