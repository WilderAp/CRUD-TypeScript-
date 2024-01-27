import { Link } from "react-router-dom";
import tasklogo from "../../assets/Google Tasks.svg";

function LandingPage() {
    return (
        <div style={{textAlign: "center"}}>
            <figure style={{display: "block", justifyContent: "center", width: 200, height: 280, margin: "auto"}}>
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