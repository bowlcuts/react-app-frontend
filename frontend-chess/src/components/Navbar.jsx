import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
 
function Navbar() {

  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      {isLoggedIn && (
        <span>Welcome {user.name}!</span>
      )}

      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/login">
            <button>Log In</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </>
      )}
 
      
    </nav>
  );
}
 
export default Navbar;