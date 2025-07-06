import { Card, Text } from "@shopify/polaris"
import {
  CalendarTimeIcon
} from '@shopify/polaris-icons';
import moment from 'moment'

const TodoDetailsCard = ({ data }) => {
    console.log(data.createdAt);
    
const createdAt = 
    data.createdAt?.toDate?.() || 
    (data.createdAt?.seconds ? new Date(data.createdAt.seconds * 1000) : null);


    return (
        <Card>
            <Text as="h1" variant="headingXl">{data.todo_name}</Text>
            <Text>{data.description}</Text>
            <Text>
              {createdAt ? moment(createdAt).format('YYYY-MM-DD HH:mm') : "N/A"}
            </Text>
        </Card>
    )
}

export default TodoDetailsCard
