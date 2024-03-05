import React from 'react';
import ControlledCarousel from './ControlledCarousel';
import Cards from './Cards'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import the necessary icons


export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#232423"}} >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img style={{ width: '120px', height: '70px' }} src='.\image-Photoroom.png-Photoroom (19).png' alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" style={{ fontFamily: 'sans-serif', fontSize: "18px", fontWeight: "normal" }} aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ fontFamily: 'sans-serif', fontSize: "18px", fontWeight: "normal", color:"black" }} href="#">Shows</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link disabled"   style={{ fontFamily: 'sans-serif', fontSize: "18px", fontWeight: "normal" , color:"black" }}  aria-disabled="true">About Us</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" style={{border:"no"}} type="submit">Search</button>
            </form>
          </div>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{backgroundColor:"#232423"}}>
        <br></br>
        <br></br>
      <ControlledCarousel></ControlledCarousel>
      <br></br>
      <br></br>
      <div><h1 style={{color:"#616362",marginLeft:"660px"}}>Streaming😎</h1></div>
      <div style={{display:"flex", gap:"200px"}}>
      
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      
      </div>
      <br></br>
      <div style={{display:"flex", gap:"200px"}}>
      
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      
      </div>
      

      </div>
      
    </>
  );
}
