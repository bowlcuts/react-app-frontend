import GamePage from "./GamePage";
import { Link } from "react-router-dom";

function HomePage(){
    return (
      <div className="homepage">
        
        <Link to={`/game`}>
        <button className="home-btn">Play</button>
        </Link>
        
      </div>
    );
  }
  
  export default HomePage;