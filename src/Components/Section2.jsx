import React from 'react';

const Section2 = ({ title, content, image }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center ">{title}</h2>

      <div className="col-11 col-lg-8 text-center mx-auto my-5">
        <p>{content}</p>

      </div>
      <div className="row align-items-center justify-content-center">
        {image.map((image, index) => (
          <div className=" col-12 col-md-6 col-lg-3 my-2" key={index}>

            {/* <img src={image} alt={"first"} className="img-fluid rounded shadow" /> */}
            <img src={image} alt={`Image`} className="img-fluid rounded shadow" />

          </div>
        ))}
        {/* <div className="col-12 col-md-6 col-lg-3 my-2">
          <img src={image2} alt={"second"} className="img-fluid rounded shadow" />

        </div>
        <div className="col-12 col-md-6 col-lg-3 my-2">
          <img src={image3} alt={"third"} className="img-fluid rounded shadow" />

        </div>
        <div className="col-12 col-md-6 col-lg-3 my-2 ">
          <img src={image4} alt={"forth"} className="img-fluid rounded shadow" />

        </div> */}

      </div>

    </div>
  );
};

export default Section2;
