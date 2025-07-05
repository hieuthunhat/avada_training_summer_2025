import { ResourceItem, ResourceList, Text } from "@shopify/polaris";
import ToDo from "../Todo/Todo";
import { useState } from "react";

const TodoList = ({ todos, isLoading, updateToDo, deleteToDo }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const clearSelection = () => {
        setSelectedItems([]);
    };

    const handleBulkComplete = async () => {
        try {
            for (const id of selectedItems) {
                await updateToDo({ id });
            }
            clearSelection();
        } catch (error) {
            console.error('Error in bulk complete:', error);
        }
    };

    const handleBulkDelete = async () => {
        try {
            for (const id of selectedItems) {
                await deleteToDo({ id });
            }
            clearSelection();
        } catch (error) {
            console.error('Error in bulk delete:', error);
        }
    };

    return (
        <ResourceList
            loading={isLoading}
            resourceName={{ singular: 'todo', plural: 'todos' }}
            items={todos}
            selectedItems={selectedItems}
            onSelectionChange={setSelectedItems}
            selectable
            renderItem={(item) =>
                <ResourceItem id={item.id}>
                    <ToDo
                        data={item}
                        onToggleDone={updateToDo}
                        onToggleDelete={deleteToDo}
                    />
                </ResourceItem>
            }
            promotedBulkActions={[
                { content: "Complete", onAction: handleBulkComplete },
                { content: "Delete", onAction: handleBulkDelete },
            ]}
            emptyState={<Text>Nothing to show yet</Text>}
        />
    );
};

export default TodoList;
