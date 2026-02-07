import React from 'react'
import { useNavigate } from 'react-router-dom'
import './FooterComp.css'

const FooterComp: React.FC = () => {
  const navigate = useNavigate()
  
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>LamboShop</h3>
          <p>Leaders in high-end and sporty vehicles. Certified quality, premium service. Where perfect engineering meets your passion for driving.</p>
        </div>

        <div className="footer-section">
          <h3>Quick links</h3>
          <ul>
            <li className="nav-vehicles" onClick={() => {navigate('/vehicles'); window.scrollTo(0, 0)}}>Vehicles</li>
            <li className="nav-workshop" onClick={() => {navigate('/workshop'); window.scrollTo(0, 0)}}>Workshop</li>
            <li className="nav-account" onClick={() => {navigate('/offers'); window.scrollTo(0, 0)}}>Offers</li>
            <li className="nav-account" onClick={() => {navigate('/account'); window.scrollTo(0, 0)}}>Account</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Via Modena, 12, 40019 Sant'Agata Bolognese BO, Italia</p>
          <p>+39 0519597537</p>
          <p>sales@lamboShop.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 LamboShop. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComp