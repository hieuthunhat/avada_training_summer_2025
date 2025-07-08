import { InlineStack, Box, Button, Badge } from "@shopify/polaris";
import { useState } from "react";

const ToDo = ({ data, onToggleDone, onToggleDelete }) => {
    const [isloadingCompleted, setIsLoadingCompleted] = useState(false);
    const [isloadingDeleted, setIsLoadingDeleted] = useState(false);

    const handleFinished = async () => {
        setIsLoadingCompleted(true)
        try {
            await onToggleDone({ id: data.id });
        } catch (error) {

        } finally {
            setIsLoadingCompleted(false)
        }
    };

    const handleDeleted = async () => {
        setIsLoadingDeleted(true)
        try {
            await onToggleDelete({ id: data.id });
        } catch (error) {

        } finally {
            setIsLoadingDeleted(false)
        }
    };

    return (

        <InlineStack
            blockAlign="center"
            align="space-between"
            gap="20"
        >
            <Box>{data.todo_name}</Box>
            <InlineStack as="div" gap="400" wrap={false} blockAlign="center">
                <Badge tone={data.isDone ? "success" : "attention"}>{!data.isDone ? 'Incomplete' : 'Complete'}</Badge>
                <Button loading={isloadingCompleted} onClick={handleFinished}>Complete</Button>
                <Button loading={isloadingDeleted} onClick={handleDeleted} tone="critical">Delete</Button>
            </InlineStack>
        </InlineStack>
    );
};

export default ToDo;
