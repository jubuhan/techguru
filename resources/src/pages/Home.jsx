import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div className="home">
            <div className="home-left">
              <h2>WELCOME</h2>
            </div>
            <div className="home-right">
            <button><Link to="explore">EXPLORE</Link><span></span></button>
             <button><Link to="create">CREATE</Link><span></span></button>
             
            </div>


        </div>
    )
}