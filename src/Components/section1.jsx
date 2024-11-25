

import React from "react";

const Section1 = ({ title, content, developers }) => {
  return (
    <section className="about-section py-5">
      <div className="container text-center">
        <h2 className="display-4 mb-4">{title}</h2>
        <p className="lead mb-4">{content}</p>
     

        <div className="row">
          {developers.map((developer, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={developer.img} alt={developer.name} className="card-img-top " height={300}/>
                <div className="card-body">
                  <h5 className="card-title">{developer.name}</h5>
                  <p className="card-text">{developer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
