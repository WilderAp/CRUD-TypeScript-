import { FormControl, TextField, Button } from '@mui/material';
import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useTaskStore } from '../../store/tasksStore';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

interface FormData {
    title: string;
    description: string;
}

function EditTask() {
    const navigate = useNavigate();
    const updateTask = useTaskStore(state => state.updateTask)
    const { id } = useParams();


    const [form, setForm] = useState<FormData>({
        title: '',
        description: ''
    })

    const handleChangeDes = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setForm({
            title: form.title,
            description: value,
        })
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { value } = event.target;
        setForm({
            title: value,
            description: form.description
        })
    }

    const handleSubmit = async (event: SyntheticEvent): Promise<void> => {
        event.preventDefault();
        try {
            await updateTask(id ?? "", form)
            setForm({ title: '', description: '' })
            Swal.fire("Buen Trabajo!", "Tarea actualizada exitosamente!", "success");
            navigate("/home");
        } catch (error) {
            console.log(error);

        }
    };

    const handleCancel = () => {
        navigate("/home")
    }

    return (
        <div className='formulario' onSubmit={handleSubmit}>
            <form onSubmit={handleSubmit}>
                <h1 style={{ margin: 120 }}>Update Task</h1>
                <FormControl style={{ border: "1px groove white", padding: "20px", borderRadius: "5px", backgroundColor: "white", marginBottom: 100 }}>
                    <TextField id="outlined-basic" label="Title" variant="outlined" onChange={handleChange} />
                    <br />
                    <TextField id="outlined-basic" label="Description" variant="outlined" onChange={handleChangeDes} />
                    <br />

                    <div>
                        <Button type='submit' variant="contained" color='success'>ACEPTAR</Button>
                        <Button type='button' variant="contained" color='success' onClick={handleCancel}>CANCELAR</Button>
                    </div>
                </FormControl>
            </form>
        </div>
    )
}

export default EditTask