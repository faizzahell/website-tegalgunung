import React, { useEffect } from 'react';
import bird1 from '/images/bird1.png';
import bird2 from '/images/bird2.png';
import forest from '/images/forest.png';
import rocks from '/images/rocks.png';
import water from '/images/water.png';
import Gallery from '../components/Gallery';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      const text = document.getElementById('text');
      const bird1 = document.getElementById('bird1');
      const bird2 = document.getElementById('bird2');
      const btn = document.getElementById('btn');
      const rocks = document.getElementById('rocks');
      const forest = document.getElementById('forest');
      const header = document.getElementById('header');

      if (text) text.style.top = `${50 + value * -0.5}%`;
      if (bird1) {
        bird1.style.top = `${value * -1.5}px`;
        bird1.style.left = `${value * 2}px`;
      }
      if (bird2) {
        bird2.style.top = `${value * -1.5}px`;
        bird2.style.left = `${value * -5}px`;
      }
      
      if (btn) btn.style.marginTop = `${value * 1.5}px`;
      if (rocks) rocks.style.top = `${value * -0.12}px`;
      if (forest) forest.style.top = `${value * 0.25}px`;
      if (header) header.style.top = `${value * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden text-white">
      {/* <section className="relative w-full h-screen flex justify-center items-center"> */}
      <section className="relative w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/background.png')`}}>
        <h2 id="text" className="absolute text-[#094b65] text-[10vw] text-center leading-[0.55em] font-[Rancho] -translate-y-1/2">
          <span className="text-[0.20em] tracking-wider font-normal font-[Poppins]">Selamat Datang di Pendakian Gunung Bismo</span><br />Tegalsari
        </h2>
        <img src={bird1} id="bird1" alt="bird1" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
        <img src={bird2} id="bird2" alt="bird2" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
        <img src={forest} id="forest" alt="forest" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
        <Link 
          to={'/kontak'}
          id="btn"
          className="inline-block px-8 py-2 bg-white text-[#094b65] text-lg font-medium tracking-wide rounded-full translate-y-[100px]"
        >
          Mulai Pendakianmu
        </Link>
        <img src={rocks} id="rocks" alt="rocks" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
          <img
            src={water}
            id="water"
            alt="water"
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
          />
          <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-transparent via-[#094B65]/80 to-[#094B65] z-20" />
        </div>
        {/* <img src={water} id="water" alt="water" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" /> */}
      </section>

      <div className="relative p-[100px] bg-[#094b65]">
        <Gallery />
      </div>
    </div>
  );
};

export default Home;