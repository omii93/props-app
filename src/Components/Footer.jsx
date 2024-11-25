// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = ({ foot }) => {
  return (
    <footer className="container-fluid bg-black text-white mt-5 pt-5">
      <div className="text-center row  py-4"id='foots'>
        <div className="col-11">
          <div className="row align-items-center justify-content-around">
            
           
            <div className="col-12 col-lg-3 text-center " id='fooots'>
              <img src={foot} alt="Logo" className="rounded-circle" style={{ height: '50px' }} />
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.
              </p>
              <a href="#" className="text-white">Learn</a>
            </div>

          
            <div className="col-12 col-lg-2">
              <h3>OUR COMPANY</h3>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">About</a></li>
                <li><a href="#" className="text-white">News</a></li>
                <li><a href="#" className="text-white">Services</a></li>
                <li><a href="#" className="text-white">Our Team</a></li>
                <li><a href="#" className="text-white">Careers</a></li>
                <li><a href="#" className="text-white">Project</a></li>
              </ul>
            </div>

          
            <div className="col-12 col-lg-2">
              <h3>OUR SERVICES</h3>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Industrial</a></li>
                <li><a href="#" className="text-white">Construction</a></li>
                <li><a href="#" className="text-white">Remodeling</a></li>
              </ul>
            </div>

           
            <div className="col-12 col-lg-2">
              <h3>CONTACT</h3>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Help Center</a></li>
                <li><a href="#" className="text-white">Support Community</a></li>
                <li><a href="#" className="text-white">Press</a></li>
                <li><a href="#" className="text-white">FAQ</a></li>
                <li><a href="#" className="text-white">Our Partners</a></li>
              </ul>
            </div>
          </div>
        </div>

       
        <div className="col-11 col-lg-10 py-5 mx-auto text-center ">
          <p>Created by <span className='text-danger'> Omkar Hole</span> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
