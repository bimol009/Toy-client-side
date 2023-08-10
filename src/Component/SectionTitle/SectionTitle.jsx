import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-8 mb-8">
      
      <h3 className="uppercase text-4xl font-bold pb-2">{heading}</h3>
      <p className="text-2xl mb-2">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
