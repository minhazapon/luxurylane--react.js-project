


const Cardetails = ({car}) => {

    const {image, name, price, details} = car


    return (
        <div>

                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                  <figure>
                    <img className=" h-[250px] w-[400px]"
                      src={image}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Name: {name} </h2>
                    <p> Price: {price} </p>
                    <p> {details} </p>
                  </div>
                </div>
            
        </div>
    );
};

export default Cardetails;