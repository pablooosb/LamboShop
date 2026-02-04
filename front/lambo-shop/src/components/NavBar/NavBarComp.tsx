import './NavBarComp.css'

function NavBarComp() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src="/src/assets/whiteLogoLamboSHop.png" alt="Dealership Logo" />
        </div>
        <div className="nav-right-container">
          <ul className="nav-right">
            <li><a href="#">Vehicles</a></li>
            <li><a href="#">Workshop</a></li>
            <li><a href="#">Account</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBarComp