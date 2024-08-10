

const Contact = () => {
    return (
        <div className=" flex justify-center mb-10 mt-20 ml-5 mr-5">


            <div className=" grid  md:grid-cols-3 gap-10">

              

              <div className=" text-[#0096FF]">
                  <p className=" text-center text-2xl font-serif">Manage Booking</p>
                  <p className=" text-center  mt-2 font-serif">Complete the form to review, cancel <br></br>or extend your booking.</p>
                  <div className=" flex justify-center">
                  <input placeholder="Enter Your Email" className=" text-[#0096FF] p-2 rounded-xl mt-5 h-[50px] border-[1px] bg-[#030637]  border-[#0096FF]" type="email" name="" id="" />
                  </div>
                  <div className=" flex justify-center mt-5">
                    <input className=" w-[200px] btn p-2 rounded-xl text-[#0096FF]  h-[50px] border-[1px] bg-[#030637]  border-[#0096FF] " type="submit" value="Submit" />
                  </div>
              </div>


              <div className=" text-[#0096FF]">
                <div className=" flex justify-center">
                <img className=" h-[60px]" src="https://cdn-icons-png.flaticon.com/128/15713/15713434.png" alt="" />
                </div>
                <p className=" mt-3 text-center  text-2xl font-serif">Whatsapp Support</p>
                <p className=" mt-3 text-center  text-xl font-serif">Add us on WhatsApp & send queries<br></br> for instant reply.</p>
                <div className=" flex  justify-center mt-5">
                    <p className=" btn bg-[#030637] border-[1px] border-[#0096FF] text-[#0096FF] ">+8801950374409</p>
                </div>
              </div>


              <div className=" text-[#0096FF]">
                <div className=" flex justify-center">
                <img className=" h-[60px]" src="https://cdn-icons-png.flaticon.com/128/971/971815.png" alt="" />
                </div>
                <p className=" mt-3 text-center  text-2xl font-serif">Live Chat</p>
                <p className=" mt-3 text-center  text-xl font-serif">The fastest way to get in touch with<br></br> an Expert</p>
                <div className=" flex  justify-center mt-5">
                    <p className=" btn bg-[#030637] border-[1px] border-[#0096FF] text-[#0096FF] ">LIVE CHAT</p>
                </div>
              </div>









            </div>
            
        </div>
    );
};

export default Contact;