import React from 'react';

const Profile = () => {
  return (
    <div className='flex items-center gap-4 mt-10 justify-center pb-24 ' >
        <div className=" h-20 w-20  rounded-full overflow-hidden object-cover bg-bottom">
            <img src="src/img:vid/65df236deabb951dca861014_313416697_1214656489118257_3369019953613551870_n-p-500.jpg" alt="" />
        </div>
        <div className="">
                <h1 className='text-[7vw]' >Serhii Antoniuk</h1>
                <h1 className='text-[4vw] text-black' >Founder & Art Director at Kreyda</h1>
        </div>
      
    </div>
  );
}

export default Profile;
