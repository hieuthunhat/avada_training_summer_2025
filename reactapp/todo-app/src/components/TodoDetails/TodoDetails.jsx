import { Box, Button, Frame, Page } from "@shopify/polaris";
import { useNavigate, useParams } from "react-router-dom"
import { fetchGetOneToDo } from "../../services/useFetchAPI";
import { useEffect, useState } from "react";

const TodoDetails = () => {
    const [toDoData, setToDoData] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
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
                    <Button onClick={() => navigate(-1)}>Go Back</Button>
                    {toDoData.todo_name}
                    {toDoData.description}
                </Box>

            </Frame>
        </Page>
    )
}

export default TodoDetails