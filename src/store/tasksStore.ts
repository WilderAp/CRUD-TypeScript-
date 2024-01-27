import { create } from "zustand";
import {  type Task, type Complete } from "../types";
import axios from "axios"

interface State {
    tasks: Task[],
    fetchTask: (limit: number) => Promise<void>
    postTask: (form: FormData) => Promise<void>
    updateComplete: (id: string, updatedFields: Complete) => Promise<void>
    updateTask: (id: string, updatedFields: Task) => Promise<void>
    deleteTask: (id: string) => Promise<void>

}
interface FormData {
    title: string;
    description: string;
  }

export const useTaskStore = create<State>((set) => {
    return {
        tasks: [],
        currentTasks: 0,

        fetchTask: async () => {
            try {
                const response = await axios.get("https://crud-typescript-backend.onrender.com/task");
                const newTask: Task[] = response.data;
                set({ tasks: newTask });
            } catch (error) {
                console.error("Error al obtener tareas:", error);
            }
        },

        postTask: async (form: FormData): Promise<void> => {
            try {
                const response = await axios.post("https://crud-typescript-backend.onrender.com/task", form);
                const newTask: Task[] = response.data;
                set({ tasks: newTask });
                // Swal.fire("Buen Trabajo!", "Tarea creada exitosamente!", "success");
                // navigate("/home");
            } catch (error) {
                console.error("Error al obtener tareas:", error);
            }
        },

        updateComplete: async (id: string, updatedFields: Complete): Promise<void> => {
            try {
                const response = await axios.put(`https://crud-typescript-backend.onrender.com/task/${id}`, updatedFields);
                const newTask: Task[] = response.data;
                set({ tasks: newTask });
            } catch (error) {
                console.error("Error al obtener tareas:", error);
            }
        },

        updateTask: async (id: string, updatedFields: Task): Promise<void> => {
            try {
                const response = await axios.put(`https://crud-typescript-backend.onrender.com/task/${id}`, updatedFields);
                const newTask: Task[] = response.data;
                set({ tasks: newTask });
            } catch (error) {
                console.error("Error al obtener tareas:", error);
            }
        },

        deleteTask: async (id: string) => {
            try {
                const response = await axios.delete(`https://crud-typescript-backend.onrender.com/task/${id}`);
                const newTask: Task[] = response.data;
                console.log(newTask);
                
                set({ tasks: newTask });
            } catch (error) {
                console.error("Error al obtener tareas:", error);
            }
        }


    }
})