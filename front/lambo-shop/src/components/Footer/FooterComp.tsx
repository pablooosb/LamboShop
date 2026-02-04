import React from 'react'
import './FooterComp.css'

const FooterComp: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>LamboShop</h3>
          <p>Leaders in high-end and sporty vehicles. Certified quality, premium service. Where perfect engineering meets your passion for driving.</p>
        </div>

        <div className="footer-section">
          <h4>Quick links</h4>
          <ul>
            <li><a href="#">Vehicles</a></li>
            <li><a href="#">Workshop</a></li>
            <li><a href="#">Account</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
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