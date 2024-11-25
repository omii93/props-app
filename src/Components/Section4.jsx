// src/components/StatsSection.jsx

import React from "react";

const Section4 = ({ title, stats }) => {
  return (
    <section className="stats-section py-5 bg-light">
      <div className="container text-center">
        <h2 className="display-4 mb-4">{title}</h2>
        <div className="row ">
          {stats.map((stat, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card border-0 ">
                <div className="card-body bg-light">
                  <h5 className="card-title">{stat.label}</h5>
                  <h2 className="card-text">{stat.count}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
