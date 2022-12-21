import GamePage from "./GamePage";
import { Link } from "react-router-dom";

function HomePage(){
    return (
      <main>
        <h1>This is the homepage</h1>
        <Link to={`/game`}>
        <button>Play</button>
        </Link>
        
      </main>
    );
  }
  
  export default HomePage;