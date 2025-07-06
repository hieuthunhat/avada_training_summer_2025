import { Box, Layout } from "@shopify/polaris";
import { useParams } from "react-router-dom"
import { fetchGetOneToDo } from "../services/useFetchAPI";
import { useEffect, useState } from "react";
import TodoDetailsCard from "../components/TodoDetailsCard/TodoDetailsCard";

const TodoDetailsLayout = () => {
    const [todoData, setTodoData] = useState("");
    const { id } = useParams();
    useEffect(() => {
        const getTodoData = async () => {
            try {
                const response = await fetchGetOneToDo(id);

                if (response.success) {
                    setTodoData(response.data);
                } else {
                    console.log('API returned success: false');
                }
            } catch (error) {
                console.error('Error fetching todo:', error);
            }
        }
        if (id) {
            getTodoData();
        }
    }, [id])

    return (
        <TodoDetailsCard data={todoData}></TodoDetailsCard>
    )
}

export default TodoDetailsLayout