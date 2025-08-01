'use client';
// import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  // const [isOnAnyLightZone, setIsOnAnyLightZone] = useState(false);

// useEffect(() => {
//   const checkOverlap = () => {
//     const navbar = document.getElementById('navbar');
//     const lightZones = document.querySelectorAll('.light-zone');

//     if (!navbar || lightZones.length === 0) return;

//     const navRect = navbar.getBoundingClientRect();
//     let isOverlapping = false;

//     lightZones.forEach((zone) => {
//       const zoneRect = zone.getBoundingClientRect();

//       const overlap =
//         navRect.top < zoneRect.bottom &&
//         navRect.bottom > zoneRect.top;

//       if (overlap) isOverlapping = true;
//     });

//     setIsOnAnyLightZone(isOverlapping);
//   };

//   window.addEventListener('scroll', checkOverlap);
//   window.addEventListener('resize', checkOverlap);
//   checkOverlap();

//   return () => {
//     window.removeEventListener('scroll', checkOverlap);
//     window.removeEventListener('resize', checkOverlap);
//   };
// }, []);

  return (
    <nav id="navbar"
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl md:w-[30%] rounded-full px-6 py-3 flex items-center justify-between transition-colors duration-300 text-white`}
    >
      {/* Liquid Glass Background Layers */}
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{ filter: 'url(#glass-distortion)' }}
      />
      <div className="absolute inset-0 bg-white/20 rounded-full"  />
      <div className="absolute inset-0 shadow-[inset_2px_2px_1px_rgba(255,255,255,0.5),inset_-1px_-1px_1px_rgba(255,255,255,0.5)] rounded-full" />

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <Image
          // className={`${isOnAnyLightZone ? 'invert' : 'invert-0'}`}
          width={30}
          height={30}
          src="/portfolio logo.png"
          alt="logo"
        />
        <ul className="flex items-center justify-between w-[80%] text-sm font-light">
          <li className="hover:opacity-70 cursor-pointer">
            {/* <Link className={`font-normal  ${isOnAnyLightZone ? 'text-[#464646]' : 'text-white'}`} href="/">Home</Link> */}
            <Link className={`font-normal  text-white`} href="/">Home</Link>
          </li>
          <li className="hover:opacity-70 cursor-pointer">
            {/* <Link className={`font-normal  ${isOnAnyLightZone ? 'text-[#464646]' : 'text-white'}`} href="/projects">Projects</Link> */}
            <Link className={`font-normal  text-white`} href="/projects">Projects</Link>
          </li>
          <li className="hover:opacity-70 cursor-pointer">
            {/* <Link className={`font-normal  ${isOnAnyLightZone ? 'text-[#464646]' : 'text-white'}`} href="/">Skills</Link> */}
            <Link className={`font-normal  text-white`} href="/">Skills</Link>
          </li>
          <li className="hover:opacity-70 cursor-pointer">
            {/* <Link className={`font-normal  ${isOnAnyLightZone ? 'text-[#464646]' : 'text-white'}`} href="/">Contact</Link> */}
            <Link className={`font-normal  text-white`} href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
