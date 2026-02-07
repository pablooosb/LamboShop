import './NavBarComp.css'
import { useNavigate } from 'react-router-dom'

function NavBarComp() {
  const navigate = useNavigate()

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src="/src/assets/whiteLogoLamboSHop.png" alt="Dealership Logo" onClick={() => navigate('/')}/>
        </div>
        <div className="nav-right-container">
          <ul className="nav-right">
            <li className="nav-models" onClick={() => navigate('/models')}>Models</li>
            <li className="nav-workshop" onClick={() => navigate('/workshop')}>Workshop</li>
            <li className="nav-offers" onClick={() => navigate('/offers')}>Offers</li>
            <li className="nav-account" onClick={() => navigate('/account')}>Account</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBarComp