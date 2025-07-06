import '@shopify/polaris/build/esm/styles.css';
import { AppProvider} from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';
import AppRoutes from './routes/AppRoutes';
import AppLayout from './layout/AppLayout';
import '@shopify/polaris/build/esm/styles.css';


const App = () => {
  return (
    <AppProvider i18n={en}>
      <AppLayout>
        <AppRoutes/>
      </AppLayout>
    </AppProvider>

  )
}

export default App;