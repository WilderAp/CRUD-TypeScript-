import { Link } from "react-router-dom";
import tasklogo from "../../assets/Google Tasks.svg";

function LandingPage() {
    return (
        <div>
            <figure>
                <Link to="/home">
                    <img src={tasklogo} alt="task_logo" />
                </Link>
            </figure>
            <h1>¡CREA Y ORGANIZA TUS TAREAS!</h1>
            <h2>{":)"}</h2>
            <br />
            <p>By WilderAp</p>
        </div>
    )
}

export default LandingPage