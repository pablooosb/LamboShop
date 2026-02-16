import './NavBarComp.css'
import { useNavigate } from 'react-router-dom'

function NavBarComp() {
  const navigate = useNavigate()

  const isAuthenticated = !!localStorage.getItem('userToken');

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

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
            <li className="nav-offers" onClick={() => navigate('/favorites')}>Favorites</li>
            
            {isAuthenticated ? (
              <li className="nav-account" onClick={handleLogout}>Log out</li>
            ) : (
              <li className="nav-account" onClick={() => navigate('/login')}>Log in</li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBarComp