import { Link } from "react-router-dom"
import { useTaskStore } from "../../store/tasksStore"
import { Card, CardContent, Typography } from "@mui/material";
import "./Home.css";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useEffect, useState } from "react";
import { TaskStatus } from "../../types";

function Home() {
    const tasks = useTaskStore(state => state.tasks);
    const fetchTasks = useTaskStore(state => state.fetchTask);
    const limitedTasks = tasks.slice(0, 10);
    const deleteTask = useTaskStore(state => state.deleteTask);
    const updateTask = useTaskStore(state => state.updateComplete);
    // const [isEditing, setIsEditing] = useState(false);
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
            await updateTask(taskId, TaskStatus.DONE);
        } catch (error) {
            console.error("Error al actualizar tarea:", error);
        }
    };

    // const handleEdit = () => {
    //     setEditedTitle(task.title);
    //     setEditedDescription(task.description);
    //     setIsEditing(true);
    // };

    // const handleSave = () => {
    //     updateTask(task.id, { title: editedTitle, description: editedDescription });
    //     setIsEditing(false);
    // };

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
                            <figure style={{ display: "flex", justifyContent: "end" }} onClick={() => handleDelete(task?.id ?? "")}>
                                <DeleteOutlinedIcon />
                            </figure>
                            <figure style={{ display: "flex", justifyContent: "start" }} onClick={() => handleComplete(task?.id ?? "")}>
                                {task?.status === "DONE" ? '✅' : '🔘'}
                            </figure>
                            <CardContent sx={{ textAlign: "center" }}>
                                <Typography variant="h5" component="div">
                                    {task?.title?.toUpperCase() ?? ""}
                                </Typography>
                                <p>{task.description}</p>
                            </CardContent>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <button className="completeButton" style={{ marginRight: 50 }}>
                                    Complete
                                </button>
                                <Link to={`/edit/${task.id}`}>
                                    <button className="completeButton" style={{ marginRight: 50 }}>
                                        Edit
                                    </button>
                                </Link>
                            </div>

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