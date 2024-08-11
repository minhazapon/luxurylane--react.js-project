

 // text-[#0096FF] bg-[#030637]

const Write = () => {
    return (
        <div  className=" mb-10 mt-20 ml-5 mr-5">

            <div className=" flex justify-center">
               
               <div className=" grid  md:grid-cols-2">


               
                <div>
                    <p className=" text-[#0096FF] text-5xl font-bold">Write Us</p>
                </div>


                <div className=" mt-5">

                  <p className=" text-[#0096FF] mb-3 text-xl font-bold">Name</p>
                  <input placeholder="Enter Your Name" className=" p-5 bg-[#030637] border-[1px] border-[#0096FF] h-[50px] w-[500px]" type="text" />
                  <br></br>
                  <p className=" text-[#0096FF] mb-3 text-xl font-bold">Email</p>
                  <input placeholder="Enter Your Email" className=" p-5 bg-[#030637] border-[1px] border-[#0096FF] h-[50px] w-[500px]" type="email" name="" id="" />
                  <br></br>
                  <p className=" text-[#0096FF] mb-3 text-xl font-bold">Name</p>
                  <input placeholder="Message" className=" p-10 bg-[#030637] border-[1px] border-[#0096FF] h-[50px] w-[500px]" type="text" />
                  <br></br>
                  <input className=" text-[#0096FF] bg-[#030637] btn mt-5 border-[1px] border-[#0096FF] h-[50px] w-[500px]" type="submit" value="Send Message" />








                </div>



            </div>


            </div>
            
        </div>
    );
};

export default Write;