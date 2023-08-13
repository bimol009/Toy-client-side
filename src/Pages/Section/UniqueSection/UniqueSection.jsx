import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import './UniqueSection.css'

const UniqueSection = () => {
    return (
        <div>
            <SectionTitle subHeading={"We've included some of the unique sections in this theme which will make your store look out of the box! Two of which are shown below."} heading={"Unique Sections"}></SectionTitle>
            <div className="unique-pic grid grid-cols-1 md:grid-cols-2 p-5 gap-4 my-4">
                <div>
                    <img src="https://i.ibb.co/s2pRqXb/attractive-img-2.png" alt="" />
                </div>
                <div>
                    <img src="https://i.ibb.co/nBSNJjq/attractive-img-1.png" alt="" />
                </div>
                
            </div>
            <div className='my-4 text-center'>
                <a href="" className="btn btn-primary">SHOW</a>
            </div>
        </div>
    );
};

export default UniqueSection;