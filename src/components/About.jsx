import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1200px] text-[19px] w-full  px-4'style={{textAlign:"justify" , padding:'5px 30px'}}>
          <div>
            <p>I Have Completed B.E. in Computer Branch from CSMIT University .I Currently Live in Chembur, Mumbai. My primary focus and inspiration for my studies is Web Devolpment. I am constantly experimenting with new technologies and techniques. I am very passionate about Web Development, and strive to better myself as a developer.
              Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
