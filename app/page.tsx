import Image from 'next/image';
import Link from 'next/link';
// import TechOrbit from './components/techorbit';
import { AuroraBackground } from './components/ui/aurora-background';
import { LinkedIn, GitHub, Description } from '@mui/icons-material';
import { SiBehance, SiDribbble } from 'react-icons/si';
import "./globals.css";


export default function Home() {
  return (
    <main className='relative bg-black'>
      {/* banner section */}
      <section className="relative md:mb-20">
        <div className='absolute top-10 left-0 w-full h-[80%] z-49 flex flex-col items-start justify-between'>
          <div className='w-[85%] mx-auto flex flex-col items-start justify-center md:w-[90%]'>
            <h1 className='text-7xl font-heading text-white pt-20 md:text-[100px]'>Ansh <br />Barman</h1>
            <p className='text-xl font-sub text-gray-300 opacity-70 text-center mt-4 font-light md:text-2xl'>UI/UX Designer and Developer</p>
            <div className='my-4 flex items-center justify-center gap-6 md:gap-8'>
              <Link target='_blank' className="text-white hover:text-[#2c9ab7] transition-colors duration-300 cursor-pointer" href="https://dribbble.com/AnshBarman/" aria-label="Dribbble">
                <SiDribbble className="!w-5 !h-5 md:!w-6 md:!h-6" />
              </Link>
              <Link target='_blank' className="text-white hover:text-[#2c9ab7] transition-colors duration-300 cursor-pointer" href="https://www.behance.net/anshbarman" aria-label="Behance">
                <SiBehance className="!w-5 !h-5 md:!w-6 md:!h-6" />
              </Link>
              <Link target='_blank' className="text-white hover:text-[#2c9ab7] transition-colors duration-300 cursor-pointer" href="https://github.com/ansh-barman" aria-label="GitHub">
                <GitHub className="!w-5 !h-5 md:!w-6 md:!h-6" />
              </Link>
              <Link target='_blank' className="text-white hover:text-[#2c9ab7] transition-colors duration-300 cursor-pointer" href="https://www.linkedin.com/in/ansh-barman-6159201ba/" aria-label="LinkedIn">
                <LinkedIn className="!w-5 !h-5 md:!w-6 md:!h-6" />
              </Link>
            </div>
            <p className='text-white font-normal text-sm font-body md:text-lg'>I am a frontend developer and UI/UX designer crafting fast, clean, and responsive interfaces. From concept to deployment, I blend design thinking with modern tools like React, Next.js, Tailwind, and Figma to create seamless user experiences across web platforms — always focused on clarity, performance, and visual precision.</p>
            <p className='text-white text-sm hover:underline my-4'>Scroll down to know more<i className='fa-solid fa-arrow-right-long rotate-90 text-xs ml-2'></i></p>
          </div>
          {/* brands */}
          <div className=' md:w-[85%] md:mx-auto items-center md:justify-center md:gap-10 flex w-[90%] mx-auto justify-around'>
            <Image className='w-[28%] md:w-[10%]' width={150} height={150} sizes="(min-width: 768px) 150px, 50px" src="/expLogo/expert.png" alt="bg" />
            <Image className='w-[28%] md:w-[10%]' width={150} height={150} sizes="(min-width: 768px) 150px, 50px" src="/expLogo/th.png" alt="bg" />
            <Image className='w-[28%] md:w-[10%]' width={150} height={150} sizes="(min-width: 768px) 150px, 50px" src="/expLogo/gdsc.png" alt="bg" />
          </div>
        </div>
        <div className='relative h-screen w-full overflow-hidden'>
          <div className='absolute top-0 w-full h-full bg-linear-to-b from-[#ffffff00] via-[#ffffff00] to-black z-46'></div>
          <AuroraBackground>
            <></>
          </AuroraBackground>
          {/* <div className='absolute bottom-0 w-full h-6 bg-linear-to-b from-[#ffffff00] to-black z-48'></div> */}
          {/* <TechOrbit /> */}
          {/* <Image className='absolute bottom-0 w-full z-47 opacity-35 md:hidden' width={200} height={200} src="/bg_grid.png" alt="bg" /> */}
          {/* <Image className='w-full h-full z-30' fill={true} src="/portfolio bg.jpg" alt="bg" /> */}
        </div>
      </section>
      {/* approach section */}
      <section className='mb-20'>
        <h1 className='text-2xl font-heading text-white text-center mx-auto w-9/12 md:text-3xl'>From modern minimalism to timeless classics</h1>
        <p className='text-center mx-auto w-9/12 text-xs mt-4 md:text-[16px] md:font-light'>My all encompassing approach and checklist that builds impactful brand outcomes.</p>
        {/* approach cards */}
        <div className='w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 light-zone'>
          <div className='bg-[#273641] p-6 text-white relative h-96 md:h-[500px] md:p-8'>
            <h2 className='text-7xl font-heading mb-4 absolute top-0 left-2 opacity-15 md:text-[100px] md:top-2 md:left-4'>01</h2>
            <h2 className='text-2xl font-heading mb-4 mt-6 md:text-3xl md:mt-18'>Understand the Problem</h2>
            <p className='text-sm md:text-[16px] md:font-normal'>I start by researching user needs, business goals, and product context. Through interviews, data analysis, and journey mapping, I make sure the design is grounded in real-world insight.</p>
            <div className='absolute bottom-0 right-0 w-full h-44'>
              <div className='z-49 w-[40px] h-[40px] flex items-center justify-center absolute top-7 right-45 bg-white/10 backdrop-blur-xs border border-white/20 border-t-gray-800 border-l-gray-80 shadow-xl md:-top-6 md:left-25'>
                <Image className='w-5 h-5 invert' width={100} height={100} src="/notion.png" alt="ui1"></Image>
              </div>
              <Image className='w-[60%] z-47 absolute bottom-0 right-0 md:w-[70%]' width={200} height={200} src="/notion ui.png" alt="ui1"></Image>
            </div>
          </div>
          <div className='bg-[#273641] p-6 text-white relative h-96 md:h-[500px] md:p-8'>
            <h2 className='text-7xl font-heading mb-4 absolute top-0 left-2 opacity-15 md:text-[100px] md:top-2 md:left-4'>02</h2>
            <h2 className='text-2xl font-heading mb-4 mt-6 md:text-3xl md:mt-18'>Design the Experience</h2>
            <p className='text-sm md:text-[16px] md:font-normal'>From wireframes to high-fidelity mockups, I craft user interfaces that prioritize clarity, accessibility, and consistency. Every design decision supports usability and scalable development.</p>
            <div className='absolute bottom-0 right-0 w-full h-44'>
              <div className='z-49 w-[40px] h-[40px] flex items-center justify-center absolute top-7 right-45 bg-white/10 backdrop-blur-xs border border-white/20 border-t-gray-800 border-l-gray-80 shadow-xl md:-top-6 md:left-25'>
                <Image className='w-4 h-5 invert' width={100} height={100} src="/figma.png" alt="ui2"></Image>
              </div>
              <Image className='w-[60%] z-47 absolute bottom-0 right-0 md:w-[70%]' width={200} height={200} src="/figma ui.png" alt="ui2"></Image>
            </div>
          </div>
          <div className='bg-[#273641] p-6 text-white relative h-96 md:h-[500px] md:p-8'>
            <h2 className='text-7xl font-heading mb-4 absolute top-0 left-2 opacity-15 md:text-[100px] md:top-2 md:left-4'>03</h2>
            <h2 className='text-2xl font-heading mb-4 mt-6 md:text-3xl md:mt-18'>Build & Refine</h2>
            <p className='text-sm md:text-[16px] md:font-normal'>I bring designs to life with clean, responsive code using HTML, CSS/Tailwind, JavaScript, and React. I test across devices, validate accessibility, and iterate post-launch based on feedback.</p>
            <div className='absolute bottom-0 right-0 w-full h-44'>
              <div className='z-49 w-[40px] h-[40px] flex items-center justify-center absolute top-7 right-45 bg-white/10 backdrop-blur-xs border border-white/20 border-t-gray-800 border-l-gray-80 shadow-xl md:-top-6 md:left-25'>
                <Image className='w-5 h-5 invert' width={100} height={100} src="/vs.png" alt="ui3"></Image>
              </div>
              <Image className='w-[60%] z-47 absolute bottom-0 right-0 md:w-[70%]' width={200} height={200} src="/vs ui.png" alt="ui3"></Image>
            </div>
          </div>
        </div>
      </section>
      {/* skills section */}
      <section className='mb-20' id='skills'>
        <h1 className='text-2xl font-heading text-white text-center mx-auto w-9/12 md:text-3xl'>Skills</h1>
        <p className='text-center mx-auto w-9/12 text-xs mt-4 md:text-[16px] md:font-light'>Technical skills and creative range that bring brand ideas to life.</p>
        {/* skill pills */}
        <div className='w-[90%] mx-auto mt-10 md:w-[85%]'>
          <h2 className='font-heading mb-5 md:text-lg'>Development</h2>
          <div className='flex items-center justify-start flex-wrap gap-2 mb-10 md:gap-4'>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/html.png" alt=''></Image>
              HTML
            </div>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/css.png" alt=''></Image>
              CSS
            </div>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/tailwind.png" alt=''></Image>
              TailwindCSS
            </div>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/js.png" alt=''></Image>
              JavaScript
            </div>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/react.png" alt=''></Image>
              ReactJS
            </div>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/next.png" alt=''></Image>
              NextJS
            </div>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/node.png" alt=''></Image>
              NodeJS
            </div>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/mongo.png" alt=''></Image>
              MongoDB
            </div>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/firebase.png" alt=''></Image>
              Firebase
            </div>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/github.png" alt=''></Image>
              GitHub
            </div>
          </div>
        </div>
        <div className='w-[90%] mx-auto md:w-[85%]'>
          <h2 className='font-heading mb-5 md:text-lg'>Design</h2>
          <div className='flex items-center justify-start flex-wrap gap-2 mb-10 md:gap-4'>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/adobe.png" alt=''></Image>
              Adobe Creative Suite
            </div>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={13} height={13} src="/icons/figma.png" alt=''></Image>
              Figma
            </div>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/framer.png" alt=''></Image>
              Framer
            </div>
            <div className='flex items-center justify-between gap-2 bg-[#0b0b0b] text-white py-2 px-4 text-xs md:text-[14px] md:py-4 md:px-6'>
              <Image width={20} height={20} src="/icons/wireframing.png" alt=''></Image>
              Wireframing
            </div>
          </div>
        </div>
      </section>
      {/* projects section */}
      <section className='mb-20'>
        <h1 className='text-2xl font-heading text-white text-center mx-auto w-9/12 md:text-3xl'>Projects</h1>
        <p className='text-center mx-auto w-9/12 text-xs mt-4 md:text-[16px] md:font-light'>Case studies where strategy turned into real brand impact.</p>
        {/* project cards */}
        <div className='w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>

          <Link href="/projects/chemora" className='bg-[#0b0b0b] hover:bg-[#111111] hover:scale-101 transition-all ease-in-out duration-300 p-6'>
            <h2 className='font-heading text-2xl'>Chemora</h2>
            <div className='flex items-center justify-start gap-2 my-4 flex-wrap'>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>Figma</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>HTML</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>CSS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>JavaScript</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>Django</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>+ See All</div>
            </div>
            <p className='text-sm'>
              Chemora is a chemical research platform designed to help organizations search, compare, and benchmark harmful, banned, or regulated chemicals or compounds across multiple global regulatory bodies, including the EPA and ECHA. Built with HTML, CSS, JavaScript, Python (Django), MongoDB, and Figma, it delivers a unified interface for cross-jurisdictional research. I engineered comparison tools, benchmark scoring, and real-time regulatory update tracking, empowering clients to navigate fragmented compliance data and make informed, regulation-aligned decisions.
            </p>
          </Link>
          <Link href="/projects/torqheads" className='bg-[#0b0b0b] hover:bg-[#111111] hover:scale-101 transition-all ease-in-out duration-300 p-6'>
            <h2 className='font-heading text-2xl'>TorqHeads</h2>
            <div className='flex items-center justify-start gap-2 my-4 flex-wrap'>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>HTML</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>CSS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>TailwindCSS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>ReactJS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>Figma</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>+ See All</div>
            </div>
            <p className='text-sm'>
              TorqHeads is a full-stack platform built to bring automotive enthusiasts together through forums, blogs, and a marketplace in one seamless hub. Designed with React, Firebase, Bootstrap, and Figma, it emphasizes clean navigation, scalability, and real-time community engagement. I conducted feature testing with users and integrated analytics dashboards to optimize retention, turning an idea into a functional, data-driven product.
            </p>
          </Link>
          <Link href="/projects/expertlancing" className='bg-[#0b0b0b] hover:bg-[#111111] hover:scale-101 transition-all ease-in-out duration-300 p-6'>
            <h2 className='font-heading text-2xl'>ExpertLancing Website</h2>
            <div className='flex items-center justify-start gap-2 my-4 flex-wrap'>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>ReactJS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>HTML</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>CSS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>TailwindCSS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>Figma</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>+ See All</div>
            </div>
            <p className='text-sm'>
              ExpertLancing Website is a corporate platform built to showcase the firm’s expertise with a modern, responsive design and SEO-optimized architecture. Developed end-to-end using ReactJS, Tailwind, and Figma, it emphasizes scalability, accessibility, and consistent branding. By implementing a reusable design system, I reduced new page development time by 35% and boosted client inquiries by 25%, directly driving business growth.
            </p>
          </Link>

          <Link href="/projects" className='text-sm inline-flex items-center gap-2'>View All <i className='fa-solid fa-arrow-right-long text-xs'></i></Link>
        </div>
      </section>
      <div className='fixed bottom-8 right-8 z-50'>
        {/* Liquid Glass Background Layers */}
        <div
          className="absolute inset-0 backdrop-blur-[2px] rounded-full"
          style={{ filter: 'url(#glass-distortion)' }}
        />
        <div className="absolute inset-0 bg-white/20 rounded-full" />
        <div className="absolute inset-0 shadow-[inset_2px_2px_1px_rgba(255,255,255,0.5),inset_-1px_-1px_1px_rgba(255,255,255,0.5)] rounded-full" />

        {/* Foreground Content */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <Link target='_blank' href="/Ansh_CV26.pdf" download="AnshBarman-Resume.pdf" className='py-2 px-4 cursor-pointer text-xs flex items-center gap-2 md:text-sm'><Description className='!w-4 !h-4 md:!w-5 md:!h-5' /> Download Resume</Link>
        </div>
      </div>
    </main>
  );
}
