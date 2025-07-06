import { Page } from '@shopify/polaris'
import { useNavigate } from 'react-router-dom';
import TodoDetailsLayout from '../layout/TodoDetailsLayout';

const TodoDetailsPage = () => {
  const navigate = useNavigate();
  return (
    <Page
      backAction={
        {
          content: "Details",
          onAction: () => navigate(-1)
        }
      }
      title="Details"
    >
      <TodoDetailsLayout></TodoDetailsLayout>
    </Page>
  )
}

export default TodoDetailsPage