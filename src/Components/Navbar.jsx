import React from 'react';

const Navbar = ({ logo, links }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  text-center bg-light">
      <div className="container-fluid">
        <a className="navbar-brand me-5 ms-3" href="#">    <img src={logo} alt="Logo"className='rounded-circle' style={{ height: '50px' }} /> <b><i>Game Studio</i></b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarNav">
          <ul className="navbar-nav text-center  mx-auto">
            {links.map((links, index) => (
              <li className="nav-item text-center ms-5 fw-bold" key={index}>
                <a className="nav-link text-center">
                  {links}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
