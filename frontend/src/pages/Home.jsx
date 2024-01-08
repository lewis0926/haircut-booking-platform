import React, {useEffect, useState} from 'react';
import Header from '../partials/Header';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';
import VideoHome from '../partials/VideoHome';
import {getAll} from "../network/stylistCrud";
import StylistBlocks from "../partials/StylistBlocks";

function Home() {
  const [stylists, setStylists] = useState([]);

  useEffect(() => {
    getAll().then((res) => {
      setStylists(res
        .sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
        .slice(0, 3));
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <VideoHome />
        {/* <FeaturesHome /> */}
        {/* Section header */}
        <StylistBlocks stylists={stylists} />
        <Testimonials />
        <Newsletter />

      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;