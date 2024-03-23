import React from 'react';

const ProjectIdea = () => {
  return (
    <div className='-mt-5 py-28 px-5 rounded-t-3xl bg-[#2F3847]'>
        <div className="h-[40vh] relative">
            <h1 className='heading text-[17vw] leading-none  uppercase'>have a project idea? let's turn it into life </h1>
            <div className="a absolute top-0 h-full w-full">
                <video className='h-full w-full pt-32' muted autoPlay loop src="src/img:vid/kreyda_logo_anim (3)-vp9-chrome.webm"></video>
            </div>
        </div>

        <div className=" py-3">
            <h6 className='text-zinc-300 text-2xl'> say hi</h6>
            <h5 className=' font-light text-3xl pt-4 leading-none uppercase'>Hello@KREYDA.ART</h5>

            <h1>Let;s collarboration</h1>
        </div>

    </div>
  );
}

export default ProjectIdea;
