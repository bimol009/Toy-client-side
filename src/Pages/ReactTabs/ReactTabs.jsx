import React, { useEffect, useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import FireTruck from "./FireTruck";
import Police from "./Police";
import Sports from "./Sports";
import Truck from './Truck';

const ReactTabs = () => {
    const [police, setPolice] = useState([]);
    const [truck, setTruck] = useState([]);
    const [fireTruck, setFireTruck] = useState([]);
    const [sportsCar, setSportsCar] = useState([]);

    useEffect(() => {
      fetch("https://toy-web-server-side.vercel.app/police")
        .then((res) => res.json())
        .then((data) => setPolice(data));
    }, []);
    useEffect(() => {
      fetch("https://toy-web-server-side.vercel.app/truck")
        .then((res) => res.json())
        .then((data) => setTruck(data));
    }, []);
    useEffect(() => {
      fetch("https://toy-web-server-side.vercel.app/fireTruck")
        .then((res) => res.json())
        .then((data) => setFireTruck(data));
    }, []);
    useEffect(() => {
      fetch("https://toy-web-server-side.vercel.app/sportsCar")
        .then((res) => res.json())
        .then((data) => setSportsCar(data));
    }, []);
  return (
    <div>
      <Tabs className="text-center rounded">
        <TabList className='bg-red-600 text-white mb-5 p-4 mt-5 rounded'>
          <Tab>Sports Car</Tab>
          <Tab>Truck</Tab>
          <Tab>Police Car</Tab>
          <Tab>Mini fire Truck</Tab>
        </TabList>

        <TabPanel>
         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {
                sportsCar?.map(sports=><Sports key={sports._id} sports={sports}></Sports>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <h2>truck : {truck.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {
                truck?.map(truckCar=><Truck key={truckCar._id} truckCar={truckCar}></Truck>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <h2>police : {police.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {
                police?.map(policeCar=><Police key={policeCar._id} policeCar={policeCar}></Police>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <h2>fireTruck : {fireTruck.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {
                fireTruck?.map(fire=><FireTruck key={fire._id} fire={fire}></FireTruck>)
            }
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
