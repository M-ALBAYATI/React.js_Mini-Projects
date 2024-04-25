import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from '../16-Gemini-Clone/context/Context.jsx'
// import 'react-toastify/dist/ReactToastify.css'
// import { AppProvider } from '../12-Sidebar-Modal/Context.jsx'
// import { AppProvider } from '../13-Strapi-submenus/Context.jsx'
// import { AppProvider } from '../14-Cart/Context.jsx'
// import { AppProvider } from '../15-Unsplash-Images/Context.jsx'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// const queryClient = new QueryClient()
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)

// <AppProvider>
//   <QueryClientProvider client={queryClient}>

//     <ReactQueryDevtools initialIsOpen={false} />
//   </QueryClientProvider>
// </AppProvider>
