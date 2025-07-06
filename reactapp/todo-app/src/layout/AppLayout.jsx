import { Frame } from '@shopify/polaris'
import {
  ArrowLeftIcon,
  HomeIcon,
  OrderIcon,
  ChatIcon,
} from '@shopify/polaris-icons';

const AppLayout = ({children}) => {
  return (
    <Frame>
        {children}
    </Frame>
  )
}

export default AppLayout;