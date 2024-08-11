
 // text-[#0096FF] bg-[#030637]

const Tips = () => {
    return (
        <div className=" mb-10 mt-20 ml-5 mr-5">


            <div>
                <p className="  text-[#0096FF] text-center  mb-10 text-6xl font-serif">Car Tips</p>
            </div>

            <div className=" flex-col md:flex-row flex justify-center items-center gap-10">


            <div className="card  bg-[#030637] text-[#0096FF] border-[1px] border-[#0096FF] w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://assets.nicepagecdn.com/d2cc3eaa/3965194/images/mechanical-woman-holding-wrench.jpg"
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Post 6 Headline</h2>
                <p>Sample small text. Lorem ipsum dolor sit amet.</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>


            <div className="card  bg-[#030637] text-[#0096FF] border-[1px] border-[#0096FF] w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://assets.nicepagecdn.com/d2cc3eaa/3965194/images/low-angle-woman-replacing-car-wh.jpg"
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Post 5 Headline</h2>
                <p>Sample small text. Lorem ipsum dolor sit amet.</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>


            <div className="card  bg-[#030637] text-[#0096FF] border-[1px] border-[#0096FF] w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://assets.nicepagecdn.com/d2cc3eaa/3965194/images/auto-service-with-beautiful-woma.jpg"
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Post 4 Headline</h2>
                <p>Sample small text. Lorem ipsum dolor sit amet.</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>










            </div>
            
        </div>
    );
};

export default Tips;