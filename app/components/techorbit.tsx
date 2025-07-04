'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const testimonials = [
  {
    text: "Working with this design system felt effortless and intuitive. Highly recommend!",
    name: "Abhinendra Singh Parihar",
    title: "Frontend Developer at Expertlancing",
    image: "/avatars/random_person_image.png"
  },
  {
    text: "The attention to detail and responsiveness is what sets this apart from other work.",
    name: "Tanvir Singh Kakkar",
    title: "UI Developer at Shyftlabs",
    image: "/avatars/random_person_image.png"
  },
  {
    text: "Incredibly smooth experience. Fast, reliable, and visually stunning UI elements.",
    name: "Naman Mehta",
    title: "AI Engineer at Google",
    image: "/avatars/random_person_image.png"
  },
  {
    text: "One of the most polished interfaces I’ve come across. You can feel the care in the design.",
    name: "Ankit Kumar",
    title: "Tech Lead at Curious Business Solutions",
    image: "/avatars/random_person_image.png"
  }
];

export default function TechOrbit() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="w-[90%] absolute bottom-10 z-49 mx-5 md:hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="p-3 md:p-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl text-white text-center max-w-md mx-auto">
              <p className="text-sm md:text-xl font-medium mb-6 leading-relaxed">“{testimonial.text}”</p>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs opacity-70">{testimonial.title}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination color override */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #262A32;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #437189;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}