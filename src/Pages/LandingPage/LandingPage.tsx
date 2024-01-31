import { Link } from "react-router-dom";
import tasklogo from "../../assets/Google Tasks.svg";
import "./Landing.css";

function LandingPage() {
    return (
        <div className="Landing">
            <figure style={{display: "block", width: 200, height: 280}}>
                <Link to="/home">
                    <img src={tasklogo} alt="task_logo" />
                </Link>
            </figure>
            <h1>¡CREA Y ORGANIZA TUS TAREAS!</h1>
            <br />
            <Link to="/home">
            <button>¡GO!</button>
            </Link>
            <br />
            <br />
            <p>By WilderAp</p>
        </div>
    )
}

export default LandingPage