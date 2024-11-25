import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Section3 = ({ title, content, blogs }) => {
  return (
    <section className="section3 container text-center my-5">
      <h2>{title}</h2>   
      <p className="mb-5 m-5">{content}</p>
      <div className="row justify-content-center">
        {blogs.map((blog, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <img src={blog.image} alt={`Blog ${index + 1}`} className="img-fluid rounded-circle mb-3" />
            <p>{blog.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
