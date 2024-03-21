import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import 'react-toastify/dist/ReactToastify.css'
// import { AppProvider } from '../12-Sidebar-Modal/Context.jsx'
// import { AppProvider } from '../13-Strapi-submenus/Context.jsx'
import { AppProvider } from '../14-Cart/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
)
