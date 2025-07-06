import { Box, InlineStack, Text } from '@shopify/polaris'
import ToDoForm from '../TodoForm/TodoForm'

const TodoNavbar = ({ action }) => {
    return (
        <Box padding={400}>
            <InlineStack
                align='space-between'
                blockAlign='center'
            >
                    <Text variant="headingXl" as="h4">Todoes</Text>
                    <ToDoForm action={action}></ToDoForm>
            </InlineStack>
        </Box>
    )
}

export default TodoNavbar