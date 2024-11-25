import React from 'react';

const ContactForm = () => {
  return (
    <div className="container my-5">
      <div className="bg-light p-4 rounded shadow">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control text-center" 
                  id="name" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label  ">Email</label>
                <input 
                  type="email" 
                  className="form-control  text-center" 
                  id="email" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  className="form-control text-center"id="message"rows="3"placeholder="Enter your message" required
                ></textarea>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
