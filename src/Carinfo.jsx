import { useEffect, useState } from "react";
import Cardetails from "./Cardetails";



 // text-[#0096FF] bg-[#030637]
const Carinfo = () => {
    

    const [car, setCar] = useState([])


    useEffect( () =>{

          fetch('car.json')
          .then( res => res.json() )
          .then( data => setCar(data))

    } , [])



    return (
        <div className=" mb-10 mt-10 ml-5 mr-5">

            <div>
                <p className=" text-[#0096FF] text-center text-6xl font-serif">Our Car Information</p>
                <p className=" text-[#0096FF] text-center text-xl font-serif mt-5">"A car is not just a vehicle, it's a reflection of your personality."</p>
            </div>
            
            {/* ----------------------------------------------- */}

            <div className=" mt-10 flex justify-center">
                <div className=" grid   md:grid-cols-3 gap-10">
                    {
                        car.map( car=> <Cardetails car={car} ></Cardetails> )
                    }
                </div>
            </div>






        </div>
    );
};

export default Carinfo;