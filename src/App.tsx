import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Select } from 'flowbite-react';
import ourImg from '../../../kreasitech/kreasitech/src/our.svg'
import clock from '../../../kreasitech/kreasitech/src/clock.png'
import exhaust from '../../../kreasitech/kreasitech/src/exhaust.png'
import accessories from '../../../kreasitech/kreasitech/src/accessories.png'

function App() {

  const [slideAboutPage, setSlideAboutPage] = useState<number>(1);
  const [specialityPage, setSpecialityPage] = useState<number>(1);

  const aboutSlider = [
    { title: "Who we Are" , subtitle: 'Technology Company', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, est quidem? Earum voluptate accusamus nisi totam cum laborum maxime fugiat soluta. Nemo tenetur consectetur in ut accusamus quae molestias earum?", page: 1 },
    { title: "What we do", subtitle: "Professional Brand Management", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nemo tenetur consectetur in ut accusamus quae molestias earum?", page: 2},
    {
      title: "How we do", subtitle: "Strategize, Design, Collaborate", description: "Blanditiis, est quidem? Earum voluptate accusamus nisi totam cum laborum maxime fugiat soluta. Nemo tenetur consectetur in ut accusamus quae molestias earum?", page: 3
    }
  ];

  const speciality = [
    { image: accessories, title: "Accessories Improvement", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nulla voluptatem eius perspiciatis ipsam eligendi officia et laudantium consectetur quisquam similique, suscipit laboriosam eveniet molestias voluptas, ratione ad nemo ipsum!", page: 1 },
    { image: clock, title: "Seep Improvement", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nulla voluptatem eius perspiciatis ipsam eligendi officia et laudantium consectetur quisquam similique, suscipit laboriosam eveniet molestias voluptas, ratione ad nemo ipsum!", page: 2 },
    { image: exhaust, title: "Exhaust Improvement", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nulla voluptatem eius perspiciatis ipsam eligendi officia et laudantium consectetur quisquam similique, suscipit laboriosam eveniet molestias voluptas, ratione ad nemo ipsum!", page: 3 },
    { image: accessories, title: "Accessories Improvement", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nulla voluptatem eius perspiciatis ipsam eligendi officia et laudantium consectetur quisquam similique, suscipit laboriosam eveniet molestias voluptas, ratione ad nemo ipsum!", page: 4 },
    { image: clock, title: "Seep Improvement", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nulla voluptatem eius perspiciatis ipsam eligendi officia et laudantium consectetur quisquam similique, suscipit laboriosam eveniet molestias voluptas, ratione ad nemo ipsum!", page: 5 },
    { image: exhaust, title: "Exhaust Improvement", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nulla voluptatem eius perspiciatis ipsam eligendi officia et laudantium consectetur quisquam similique, suscipit laboriosam eveniet molestias voluptas, ratione ad nemo ipsum!", page: 6 },

  ]

  return (
    <div className="App">
      <Navbar
        fluid
        rounded
      >
        <Navbar.Brand
          href="https://flowbite-react.com"
        >
          <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="https://flowbite.s3.amazonaws.com/brand/logo-dark/mark/flowbite-logo.png"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            COMPANY
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            active
            href="#"
          >
            <p>
              Home
            </p>
          </Navbar.Link>
          <Navbar.Link
            href="#"
          >
            <p>
              About
            </p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className='bg-cyan-500 h-[30rem] w-full relative overflow-hidden'>
        <div className='inner h-[70%] whitespace-normal  origin-top-left rotate-12 z-10  bg-sky-500 absolute bottom-0 w-[150%] left-[-1rem]'>
          <div className='text-left py-[2rem] px-[4rem] w-[32rem] ml-[20px]'>
            <h3 className='-rotate-12 text-white text-4xl font-bold mb-[1em] ml-[-28px]'>Discover <br /> Your Wonder</h3>
            <p className='text-white text-sm -rotate-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, est quidem? Earum voluptate accusamus nisi totam cum laborum maxime fugiat soluta. Nemo tenetur consectetur in ut accusamus quae molestias earum?</p>
          </div>
        </div>
        <div className='inner h-[70%] origin-bottom md:botton-[-5rem] -rotate-12 right-[-15rem] bg-sky-400 absolute bottom-0 w-full'></div>
      </div>
      <div className='relative who  px-[1.5rem]'>
        <button className='rounded-full absolute bg-white top-[-13px] z-30 px-[12px] py-[8px] shadow-lg'><i className="fa fa-chevron-down"></i></button>
        {
          aboutSlider?.filter(x => x.page === slideAboutPage).map((dt, i) => (
            <div className='slide pt-[3rem] text-left' key={i}>
              <div className='w-full'>
                <h3 className='text-2xl font-bold text-sky-400'>{dt?.title}</h3>
                <br />
                <p>{dt?.subtitle}</p>
                <p className='text-xs text-gray-500 mt-4'>{dt?.description}</p>
              </div>
            </div>
          ))
        }

        <div className='grid grid-cols-2 justify-between mt-[5rem] mb-5'>
          <div className='text-left font-bold'>
            <span className='text-lg'>0{slideAboutPage}</span>/ <span className='text-gray-500 text-sm'>0{aboutSlider?.length}</span>
          </div>
          <div className='ml-auto flex gap-2 rounded-none'>
            <button className='p-3 bg-gray-200 px-[15px] py-[10px]' onClick={() => setSlideAboutPage(slideAboutPage === 1 ? 3 : slideAboutPage-1)}><i className="fa fa-arrow-left"></i></button>
            <button className='p-3 bg-sky-400 text-white px-[15px] py-[10px]' onClick={() => setSlideAboutPage(slideAboutPage === 3 ? 1 : slideAboutPage+1)}><i className="fa fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
      <div className='values px-[1.5rem] mt-[5rem] bg-gray-100 py-5'>
        <div className='text-center mb-5'>
          <h3 className='text-4xl font-bold text-sky-400'>Our Core Values</h3>
        </div>
        <div className='text-left'>
          <p className='text-gray-400'> Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit. <br /> <br /> In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</p>
        </div>
        <div className='grid md:grid-cols-3 text-left'>
          <div className='mt-[3rem] mb-2'>
            <h3 className='text-xl mb-5'>--- Dedication </h3>
            <p className='text-sm text-gray-400'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
          </div>
          <div className='mt-[3rem] mb-2'>
            <h3 className='text-xl mb-5'>--- Intellectual Honesty </h3>
            <p className='text-sm text-gray-400'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
          </div>
          <div className='mt-[3rem] mb-2'>
            <h3 className='text-xl mb-5'>--- Curiosity </h3>
            <p className='text-sm text-gray-400'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
          </div>
        </div>
        <div className='mt-5'>
          <img src={ourImg} className="m-auto md:w-[50%]"/>
        </div>
      </div>
      <div className='speciality bg-sky-400 p-4'>
        <div className='bg-white p-[2rem] text-left'>
          <h3 className='mb-4 font-bold text-sky-400 text-xl'>OUR SPECIALITY</h3>
          <p className='text-gray-400 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eum ipsam aut totam eligendi harum iure mollitia facere doloribus officia blanditiis perspiciatis dicta dolorum, eaque modi cupiditate repudiandae. Quod, vel?</p>
          <div className='slides mt-5 text-center'>
            {
              speciality?.filter(x => x.page === specialityPage).map((dt, i) => (
                <div key={i}>
                  <img className='m-auto p-3' src={dt?.image} alt="" />
                  <p>{dt?.title}</p>
                  <p className='text-sm text-gray-400'>{dt?.description}</p>
                </div>
              ))
            }
          </div>
          <div className='grid grid-cols-3'>
            <div>
              <button onClick={() => setSpecialityPage(specialityPage === 1 ? speciality?.length : specialityPage-1 )} className='p-3 px-[15px] py-[10px]'><i className="fa fa-arrow-left"></i></button>
            </div>
            <div className='dots flex gap-2 justify-center items-center'>
              {
                speciality?.map((x, i) => (
                  <button onClick={() => setSpecialityPage(i+1)} className={`w-[10px] h-[10px] border-2 rounded-lg bg-blue-300 ${x.page === specialityPage && 'border-blue-500 !bg-white' }`}></button>
                ))
              }
            </div>
            <div className='text-right'>
              <button onClick={() => setSpecialityPage(speciality?.length === specialityPage ? 1 : specialityPage+1)} className='p-3 px-[15px] py-[10px]'><i className="fa fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div className='foot p-[1.5em] relative overflow-hidden h-[45rem] bg-sky-800'>
        <div className='flex'>
          <img
            alt="Flowbite React Logo"
            className="mr-3 w-[35px] sm:h-9"
            src="https://flowbite.s3.amazonaws.com/brand/logo-dark/mark/flowbite-logo.png"
          />
          <h3 className='text-2xl font-bold text-white'>COMPANY</h3>
          
        </div>
        <div className='bg-white p-4 py-[3rem] mt-5 text-left'>
          <Select />
          <div className='w-[13rem]'>
            <p className='mt-4 text-blue-500'>Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</p>
          </div>
        </div>
        <div className='inner h-[43%] whitespace-normal  origin-top-left rotate-12  bg-sky-900 absolute bottom-0 w-[150%] left-[-1rem]'>
          <div className='text-left py-[2rem] px-[4rem] w-[32rem] ml-[20px]'></div>
        </div>
        <div className='inner h-[34%] origin-bottom -rotate-[29deg] right-[-18rem] bg-sky-700 absolute bottom-[-3rem] w-[150%]'></div>
      </div>
    </div>
  );
}

export default App;
