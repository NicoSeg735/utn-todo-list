import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { TasksProvider } from './contexts/Tasks/TasksProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      draggable
      pauseOnHover
      theme="dark"
    />
  </StrictMode>,
)
