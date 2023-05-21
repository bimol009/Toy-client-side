import React from "react";

const CaroBanner = () => {
  return (
    <div>
      <div className="carousel h-96">
        <div id="item1" className="carousel-item w-full h-auto">
          <img
            src="https://i.ibb.co/zQ3DZGX/yellow-sports-car-1308-96215-1-1-removebg-preview.png"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/7X3YcPN/cartoon-bumper-car-white-background-1308-107878-removebg-preview.png"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/cw9hWsM/rocket-car-green-yellow-color-1308-35102-removebg-preview.png"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/x26fxZr/fire-engine-white-1308-35182-removebg-preview.png"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default CaroBanner;
