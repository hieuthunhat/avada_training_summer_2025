import { ResourceItem, InlineStack, Box, Button, Badge } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

const ToDo = ({ data, onToggleDone, onToggleDelete }) => {
    const navigate = useNavigate();

    const handleFinished = async () => {
        await onToggleDone({ id: data.id });
    };

    const handleDeleted = async () => {
        await onToggleDelete({ id: data.id });
    };

    const handleClickDetails = () => {
        navigate(`/todos/${data.id}`)
    }

    return (

        <InlineStack
            blockAlign="center"
            align="space-between"
            gap="20"
        >
            <Box>{data.todo_name}</Box>
            <InlineStack as="div" gap="400" wrap={false} blockAlign="center">
                <Badge tone={data.isDone ? "success" : "attention"}>{!data.isDone ? 'Incomplete' : 'Complete'}</Badge>

                <Button onClick={handleFinished}>Complete</Button>

                <Button onClick={handleDeleted} tone="critical">Delete</Button>

                <Button onClick={handleClickDetails}>View Details</Button>
            </InlineStack>
        </InlineStack>
    );
};

export default ToDo;
