import React from 'react'
import Product from './Product'


const Products = () => {

  const data =[
    {url:"https://assets-global.website-files.com/6527b46c9f9e668d86dfbe29/65df00375e3bbeeadb3235fc_%D0%BA%D0%B5%D0%B8%CC%86%D1%81%201-p-1080.jpg",name:'Bright Funded',             tittle1:'PRODUCT DESIGN',    tittle2:'Branding',                     tittle3:'Prop firm' },
    {url:"https://assets-global.website-files.com/6527b46c9f9e668d86dfbe29/65df00b238eeeb44205290a2_%D0%BA%D0%B5%D0%B8%CC%86%D1%81%202-p-1080.jpg",name:'wild codes',                tittle1:'WEBSITE DESIGN',    tittle2:"DEVELOPER'S MARKETPLACE",      tittle3:'' },
    {url:"https://assets-global.website-files.com/6527b46c9f9e668d86dfbe29/65df00ee3c5b0f93c6760fe0_%D0%BA%D0%B5%D0%B8%CC%86%D1%81%203-p-1080.jpg",name:'funding traers',            tittle1:'PRODUCT DESIGN',    tittle2:'Branding',                     tittle3:'Prop firm' },
    {url:"https://assets-global.website-files.com/6527b46c9f9e668d86dfbe29/65df012a74890653e27766a4_%D0%BA%D0%B5%D0%B8%CC%86%D1%81%204-p-1080.jpg",name:" l'institut anti*poux ",    tittle1:'PRODUCT DESIGN',    tittle2:'Branding',                     tittle3:'' },
  ]

  return (
    <>
    <div className="">
      {data.map((elem, index)=>(
        <Product key={index} data={elem}/>
      ))}
    </div>



      <div className=" ">
        <h1 className='text-black text-[7vw] mt-10'>We strive for excellence and pay attention to the smallest details. Each project should reflect its individuality, and border on aesthetics and functionality</h1>
        <div className="flex mt-4 items-center ">
          <button className='text-black text-[6vw] px-5 py-2 border-[2px] rounded-full border-zinc-900'> view all case studies </button>
          <div className=" h-14 w-14 bg-black flex justify-center items-center rounded-full "><i class="ri-eye-fill"></i></div>
        </div>
      </div>
    </>
  )
}

export default Products