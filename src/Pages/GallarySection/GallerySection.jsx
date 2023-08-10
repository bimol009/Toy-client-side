import React, { useEffect } from 'react';
import './GallerySection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


  

const GallerySection = () => {
    useEffect(()=>{
        AOS.init()
      },[])
    return (
        <div className='text-center'data-aos="fade-down">
            <div className='text-center mt-10 mb-10'>
                <h2 className='text-4xl mb-3 font-extrabold'>Gallery <span className='text-red-400'>Section</span> Toy</h2>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center image gap-6 mt-10 mb-10'>
                <img src="https://i.ibb.co/Gc6HTY3/atish-sewmangel-NYb-Tdr-Bh740-unsplash.jpg" alt="" />
                <img src="https://i.ibb.co/0QV9H1X/mink-mingle-Riz1q-Apl-MQk-unsplash.jpg" alt="" />
                <img src="https://i.ibb.co/v4Kt3WG/fahad-bin-kamal-anik-QLaa3a-Ypwv8-unsplash.jpg" alt="" />
                <img src="https://i.ibb.co/rQM81Ng/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg" alt="" />
            
            </div>
        </div>
    );
};

export default GallerySection;