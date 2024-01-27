import { FormControl, TextField, Button } from '@mui/material';
import "./form.css";
import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useTaskStore } from '../../store/tasksStore';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

interface FormData {
    title: string;
    description: string;
}

function CreateTask() {
    const navigate = useNavigate();
    const { postTask } = useTaskStore();

    const [form, setForm] = useState<FormData>({
        title: '',
        description: ''
    })


    const handleSubmit = (event: SyntheticEvent): void => {
        event.preventDefault();
        try {
            postTask(form)
            setForm({ title: '', description: '' })
            Swal.fire("Buen Trabajo!", "Tarea creada exitosamente!", "success");
            navigate("/home");
        } catch (error) {
            console.log(error);

        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLFormElement>): void => {
        const { value } = event.target;
        setForm({
            title: value,
            description: form.description
        })
    }

    const handleChangeDes = (event: ChangeEvent<HTMLInputElement | HTMLFormElement>): void => {
        const { value } = event.target;
        setForm({
            title: form.title,
            description: value,
        })
    }




    return (
        <main className='form'>
            <form onSubmit={handleSubmit}>
                <h1 style={{ margin: 120 }}>Create Task</h1>
                <FormControl style={{ border: "1px groove white", padding: "20px", borderRadius: "5px", backgroundColor: "white", marginBottom: 100 }}>
                    <TextField id="outlined-basic" label="Title" variant="outlined" onChange={handleChange} />
                    <br />
                    <TextField id="outlined-basic" label="Description" variant="outlined" onChange={handleChangeDes} />
                    <br />
                    <Button type='submit' variant="contained" color='success'>CREAR</Button>
                </FormControl>
            </form>
        </main>
    )
}

export default CreateTask