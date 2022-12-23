import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter } from 'react-router-dom';
import { AuthProviderWrapper } from './context/auth.context';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <AuthProviderWrapper>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </AuthProviderWrapper>
    </BrowserRouter>,
  {/* </React.StrictMode>, */}
)
