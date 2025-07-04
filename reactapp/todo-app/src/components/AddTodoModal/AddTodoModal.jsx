import { Modal } from '@shopify/polaris';
import ToDoForm from '../TodoForm/TodoForm';

const AddTodoModal = ({ isOpen, onClose, onAddTodo }) => {
  const handleAddTodo = async (todoData) => {
    const result = await onAddTodo(todoData);
    if (result) {
      onClose();
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Create Todo"
    >
      <Modal.Section>
        <ToDoForm action={handleAddTodo} />
      </Modal.Section>
    </Modal>
  );
};

export default AddTodoModal;
