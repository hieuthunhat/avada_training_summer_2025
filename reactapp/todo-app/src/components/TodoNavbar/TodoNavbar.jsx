import { Box, InlineStack, Text } from '@shopify/polaris'
import React from 'react'
import ToDoForm from '../TodoForm/TodoForm'
import { useTodos } from '../../hooks/useTodos';

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