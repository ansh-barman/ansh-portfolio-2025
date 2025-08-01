import Image from 'next/image';
import Link from 'next/link';
// import TechOrbit from './components/techorbit';
import { AuroraBackground } from './components/ui/aurora-background';
import "./globals.css";


export default function Home() {
  return (
    <main className='bg-black'>
      {/* banner section */}
      <section className="relative md:mb-20">
        <div className='w-[85%] mx-auto absolute top-10 left-8 flex flex-col items-start justify-center z-49 md:w-[70%] md:left-[6%] md:top-[8%]'>
          <h1 className='text-7xl font-heading text-white pt-20 md:text-[100px]'>Ansh <br />Barman</h1>
          <p className='text-xl font-heading text-gray-300 opacity-70 text-center mt-4 md:text-3xl'>Frontend Designer and Developer</p>
          <div className='my-4 flex items-center justify-center'>
            <Link href="/"><i className="hover:text-[#2c9ab7] fa-brands fa-dribbble text-white w-8 h-8 md:w-10 md:h-10"></i></Link>
            <Link href="/"><i className="hover:text-[#2c9ab7] fa-brands fa-behance text-white w-8 h-8 md:w-10 md:h-10"></i></Link>
            <Link href="/"><i className="hover:text-[#2c9ab7] fa-brands fa-github text-white w-8 h-8 md:w-10 md:h-10"></i></Link>
            <Link href="/"><i className="hover:text-[#2c9ab7] fa-brands fa-linkedin text-white w-8 h-8 md:w-10 md:h-10"></i></Link>
          </div>
          <p className='text-white font-light text-sm md:text-xl'>I am a frontend developer and UI/UX designer crafting fast, clean, and responsive interfaces. From concept to deployment, I blend design thinking with modern tools like React, Next.js, Tailwind, and Figma to create seamless user experiences across web platforms — always focused on clarity, performance, and visual precision.</p>
          <p className='text-white text-sm hover:underline my-4'>Scroll down to know more<i className='fa-solid fa-arrow-right-long rotate-90 text-xs ml-2'></i></p>
        </div>
        {/* brands */}
        <div className=' md:w-[85%] absolute md:bottom-16 md:left-[7%] md:mx-auto items-center md:justify-center md:gap-10 z-49 flex bottom-32 left-0 w-full justify-around'>
          <Image className='w-[100px] h-full z-40 md:w-[150px]' width={0} height={0} sizes="(min-width: 768px) 150px, 50px" src="/expLogo/th.png" alt="bg" />
          <Image className='w-[100px] h-full z-40 md:w-[150px]' width={0} height={0} sizes="(min-width: 768px) 150px, 50px" src="/expLogo/gdsc.png" alt="bg" />
          <Image className='w-[100px] h-full z-40 md:w-[150px]' width={0} height={0} sizes="(min-width: 768px) 150px, 50px" src="/expLogo/expert.png" alt="bg" />
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
      <section className='mb-20'>
        <h1 className='text-2xl font-heading text-white text-center mx-auto w-9/12 md:text-3xl'>Skills</h1>
        <p className='text-center mx-auto w-9/12 text-xs mt-4 md:text-[16px] md:font-light'>My all encompassing approach and checklist that builds impactful brand outcomes.</p>
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
          </div>
        </div>
      </section>
      {/* projects section */}
      <section className='mb-20'>
        <h1 className='text-2xl font-heading text-white text-center mx-auto w-9/12 md:text-3xl'>Projects</h1>
        <p className='text-center mx-auto w-9/12 text-xs mt-4 md:text-[16px] md:font-light'>My all encompassing approach and checklist that builds impactful brand outcomes.</p>
        {/* project cards */}
        <div className='w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          <div className='bg-[#0b0b0b] p-6'>
            <h2 className='font-heading text-2xl'>TorqHeads</h2>
            <div className='flex items-center justify-start gap-2 mt-2 mb-4 flex-wrap'>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>HTML</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>CSS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>TailwindCSS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>ReactJS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>Figma</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>+</div>
            </div>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='bg-[#0b0b0b] p-6'>
            <h2 className='font-heading text-2xl'>TorqHeads</h2>
            <div className='flex items-center justify-start gap-2 mt-2 mb-4 flex-wrap'>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>ReactJS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>HTML</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>CSS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>TailwindCSS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>Figma</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>+</div>
            </div>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className='bg-[#0b0b0b] p-6'>
            <h2 className='font-heading text-2xl'>TorqHeads</h2>
            <div className='flex items-center justify-start gap-2 mt-2 mb-4 flex-wrap'>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>ReactJS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>HTML</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>CSS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>TailwindCSS</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>Figma</div>
              <div className='bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl'>+</div>
            </div>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <Link href="/projects" className='text-sm inline-flex items-center gap-2'>View All <i className='fa-solid fa-arrow-right-long text-xs'></i></Link>
        </div>
      </section>
    </main>
  );
}
