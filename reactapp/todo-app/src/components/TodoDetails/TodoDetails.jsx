import { Box, Frame, Page } from "@shopify/polaris";
import { useParams } from "react-router-dom"
import { fetchGetOneToDo } from "../../services/fetchAPI";
import { useEffect, useState } from "react";

const TodoDetails = () => {
    const [toDoData, setToDoData] = useState("");
    const { id } = useParams();
    useEffect(() => {
        const getToDoData = async () => {
            try {
                const response = await fetchGetOneToDo(id);
                
                if (response.success) {
                    setToDoData(response.data);
                } else {
                    console.log('API returned success: false');
                }
            } catch (error) {
                console.error('Error fetching todo:', error);
            }
        }
        if (id) {
            getToDoData();
        }
    }, [id])
    return (
        <Page>
            <Frame>
                <Box>
                    {toDoData.todo_name}
                    {toDoData.description}
                </Box>

            </Frame>
        </Page>
    )
}

export default TodoDetails