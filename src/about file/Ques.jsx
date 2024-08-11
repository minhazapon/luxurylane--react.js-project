

 // text-[#0096FF] bg-[#030637]


const Ques = () => {
    return (
        <div className=" mb-10 mt-20 ml-5 mr-5">

            <div>

             

             <div>
                <p className=" text-[#0096FF] text-center  text-6xl font-serif">Facts & Questions</p>
                <p className=" text-[#0096FF] text-center mt-5">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
             </div>


            {/* //---------------------------------------// */}

            <div>



            <div className="collapse collapse-plus bg-[#030637] border-[1px] border-[#0096FF] text-[#0096FF]  mt-10">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">How Often Should I Change My Oil?</div>
              <div className="collapse-content">
                <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#030637] border-[1px] border-[#0096FF]  text-[#0096FF] ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">How does the rectification of defects work?</div>
              <div className="collapse-content">
                <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-[#030637] border-[1px] border-[#0096FF] text-[#0096FF] ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">Compensation from the workshop?</div>
              <div className="collapse-content">
                <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
              </div>
            </div>








            </div>







            </div>
            
        </div>
    );
};

export default Ques;