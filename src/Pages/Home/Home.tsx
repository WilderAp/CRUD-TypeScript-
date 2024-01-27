import { Link } from "react-router-dom"
import { useTaskStore } from "../../store/tasksStore"
import { Card, CardContent, Typography } from "@mui/material";
import "./Home.css";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useEffect, useState } from "react";

function Home() {
    const tasks = useTaskStore(state => state.tasks);
    const fetchTasks = useTaskStore(state => state.fetchTask);
    const limitedTasks = tasks.slice(0, 10);
    const deleteTask = useTaskStore(state => state.deleteTask);
    const updateTask = useTaskStore(state => state.updateTask);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedDescription, setEditedDescription] = useState("");

    const handleDelete = async (taskId: string) => {
        try {
            await deleteTask(taskId);
        } catch (error) {
            console.error("Error al eliminar tarea:", error);
        }
    };

    const handleComplete = async (taskId: string) => {
        try {
            await updateTask(taskId, { status: "DONE" });
        } catch (error) {
            console.error("Error al actualizar tarea:", error);
        }
    };

    const handleEdit = () => {
        setEditedTitle(task.title);
        setEditedDescription(task.description);
        setIsEditing(true);
    };

    const handleSave = () => {
        updateTask(task.id, { title: editedTitle, description: editedDescription });
        setIsEditing(false);
    };

    useEffect(() => {
        fetchTasks(10)
    }, [])

    return (
        <div className="list">
            <p>{tasks.length}/10</p>
            {
                tasks && tasks.length > 0
                    ? limitedTasks?.map((task) => (
                        <Card key={task.id} className="postList" sx={{ minWidth: 275, width: 245, margin: 10, maxWidth: 245, padding: 2 }}>
                            {isEditing ? (
                                /* Campos de entrada editables */
                                <>
                                    <input
                                        type="text"
                                        value={editedTitle}
                                        onChange={(e) => setEditedTitle(e.target.value)}
                                    />
                                    <textarea
                                        value={editedDescription}
                                        onChange={(e) => setEditedDescription(e.target.value)}
                                    />
                                </>
                            ) : (
                                /* Contenido normal */
                                <>
                                    <figure style={{ display: "flex", justifyContent: "end" }} onClick={() => handleDelete(task.id)}>
                                        <DeleteOutlinedIcon />
                                    </figure>
                                    <figure style={{ display: "flex", justifyContent: "start" }} onClick={() => handleComplete(task.id)}>
                                        {task.status === "DONE" ? '✅' : '🔘'}
                                    </figure>
                                    <CardContent sx={{ textAlign: "center" }}>
                                        <Typography variant="h5" component="div">
                                            {task.title.toUpperCase()}
                                        </Typography>
                                        <p>{task.description}</p>
                                    </CardContent>
                                </>
                            )}
                            <button className="completeButton" style={{ marginRight: 50 }} onClick={() => handleComplete(task.id)}>
                                Complete
                            </button>
                            {isEditing ? (
                                /* Botón para guardar cambios */
                                <button className="editButton" onClick={() => handleSave()}>Save</button>
                            ) : (
                                /* Botón para iniciar la edición */
                                <button className="editButton" onClick={() => handleEdit()}>Edit</button>
                            )}
                        </Card>
                    ))
                    : <Link to="/create">
                        <button>CREATE FIRST TASK</button>
                    </Link>
            }
        </div>
    )
}

export default Home;