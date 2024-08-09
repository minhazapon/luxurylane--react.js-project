


const Card = () => {
    return (
        <div className=" mb-10 mt-10 ml-5 mr-5">


            <div className=" flex-col md:flex-row  flex justify-center items-center gap-10">


               <div className=" transition duration-300 ease-in-out hover:scale-110  bg-[#030637]  border-[1px] border-[#0096FF] w-[300px] h-[220px] p-2  ">
                <div className=" flex justify-center">
                <img className=" h-[70px]" src="https://i.ibb.co/f8DJw7g/car.png" alt="" />
                </div> 
                <h1 className=" text-center mt-5 text-2xl  text-[#0096FF] ">Faster pick-up</h1>
                <p className=" text-center mt-4 text-[#0096FF] text-xl">We have your contract already<br></br> prepared</p>
               </div>

               <div className=" transition duration-300 ease-in-out hover:scale-110  bg-[#030637]  border-[1px] border-[#0096FF] w-[300px] h-[220px] p-2  ">
                <div className=" flex justify-center">
                <img className=" h-[70px]" src="https://i.ibb.co/HN3tyVY/seller.png" alt="" />
                </div> 
                <h1 className=" text-center mt-5 text-2xl  text-[#0096FF] ">Rental journey</h1>
                <p className=" text-center mt-4 text-[#0096FF] text-xl">Over 70 years of experience</p>
               </div>


               <div className=" transition duration-300 ease-in-out hover:scale-110  bg-[#030637]  border-[1px] border-[#0096FF] w-[300px] h-[220px] p-2  ">
                <div className=" flex justify-center">
                <img className=" h-[70px]" src="https://i.ibb.co/LpxW9D3/mechanic.png" alt="" />
                </div> 
                <h1 className=" text-center mt-5 text-2xl  text-[#0096FF] ">Better service</h1>
                <p className=" text-center mt-4 text-[#0096FF] text-xl">We know you better,  serve better</p>
               </div>



              










            </div>
            
        </div>
    );
};

export default Card;