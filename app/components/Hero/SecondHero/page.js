import { Cardimages } from '@/app/data/data';
import Link from 'next/link';
import React from 'react';


const Card = () => {
  return (
    <>
    <h1 className='mt-5 text-center  text-4xl'>Our Popular Products</h1>
    <section className='flex flex-wrap p-3 gap-5 items-center justify-around mt-7'>
      
      {
          Cardimages.map(({img,name,desc,to,alt})=>{
            return(
              <div className="bg-white shadow-md rounded-lg overflow-hidden w-[25rem]">
    <img
      className="w-full sm:h-64 object-contain"
      src={img}
      alt={alt}
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800 text-center lobster-two-bold">{name}</h2>
      <p className="text-gray-600 mt-2 text-center">
        {desc.slice(0,70)}...
      </p>
      <div className="mt-4">
       
        <button class="inline-flex text-white font-bold bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-lg hover:">
        <Link href={to}>
           Shop now
          </Link>
        </button>
    
      </div>
    </div>
  </div>
            )
          })
      }
  </section>
    </>
  );
};

export default Card;
