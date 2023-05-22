import React from 'react';

const GallerySection = () => {
    return (
        <div className='text-center'>
            <div className='text-center'>
                <h2>Gallery Section Toy</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, beatae!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  justify-items-center'>
                <img src="https://i.ibb.co/D99hNh3/633aad0dcb0629168c563ca3-toy-cars-sian-fkp3-metal-model-car-with.jpg" alt="" />
                <img src="https://i.ibb.co/GJdwrvc/maxresdefault-1.jpg" alt="" />
                <img src="https://i.ibb.co/8mLRZYP/photo-1609708536965-6e5b915b195b-removebg-preview.png" alt="" />
                <img src="https://i.ibb.co/8mLRZYP/photo-1609708536965-6e5b915b195b-removebg-preview.png" alt="" />
            
            </div>
        </div>
    );
};

export default GallerySection;