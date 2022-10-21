import { Link } from "react-router-dom";
import logo from "./header-logo-dark.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="d-flex justify-content-lg-between justify-content-sm-center align-items-center flex-wrap w-100">
            <div className="logopart d-flex justify-content-start justify-content-sm-center align-items-center">
              <div className="img">
                <img alt="logo" src={logo} />
              </div>
              <h1>Universal Verifiable Credentialing System</h1>
            </div>
            <div className="links">
              <Link
                to="/"
                className="btn btn-orange"
                
              >
                Sign-In
              </Link>

              <Link
                to="/Home"
                className="btn btn-orange"
              >
                Home
              </Link>

              {/* <Link to="/hp" style={{ 
                background: '#FFE600',
                color: '#2E2E38',
              borderRadius: '8px' 
              }}>Health Professional</Link>
              
              <Link to="/immunization" style={{ 
                background: '#FFE600',
                color: '#2E2E38',
              borderRadius: '8px' 
              }}>Immunzation</Link> */}
            </div>
        </div>
      
      
    </nav>
  );
};

export default Navbar;
