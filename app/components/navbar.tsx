'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOnAnyLightZone, setIsOnAnyLightZone] = useState(false);

  useEffect(() => {
    const lightZones = document.querySelectorAll('#light-zone');
    const observers: IntersectionObserver[] = [];

    const callback = (entries: IntersectionObserverEntry[]) => {
      const isIntersectingAny = entries.some((entry) => entry.isIntersecting);
      setIsOnAnyLightZone(isIntersectingAny);
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0.5,
    });

    lightZones.forEach((el) => observer.observe(el));
    observers.push(observer);

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-md px-6 py-3 flex items-center justify-between transition-colors duration-300 md:w-[30%] ${
        isOnAnyLightZone ? 'text-[#464646]' : 'text-white'
      }`}
    >
      <Image className={`${ isOnAnyLightZone ? 'invert' : 'invert-0'}`} width={30} height={30} src="/portfolio logo.png" alt="logo" />
      <ul className="flex items-center justify-between w-[80%] text-sm font-light">
        <li className="hover:opacity-70 cursor-pointer">
          <Link className='font-normal' href="/">Home</Link>
        </li>
        <li className="hover:opacity-70 cursor-pointer">
          <Link className='font-normal' href="/projects">Projects</Link>
        </li>
        <li className="hover:opacity-70 cursor-pointer">
          <Link className='font-normal' href="/">Skills</Link>
        </li>
        <li className="hover:opacity-70 cursor-pointer">
          <Link className='font-normal' href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}