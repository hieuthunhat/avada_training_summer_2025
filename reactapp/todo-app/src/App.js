import '@shopify/polaris/build/esm/styles.css';
import { Frame } from '@shopify/polaris';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Frame>
      <AppRoutes></AppRoutes>
    </Frame>
  )
}

export default App;