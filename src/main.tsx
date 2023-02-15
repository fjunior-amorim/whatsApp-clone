import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Conversations from './routes/conversations/Conversations';
import Status from './routes/status/Status';
import Community from './routes/community/Community';
import { Calls } from './routes/calls/Calls';

const router = createBrowserRouter([
  { path: "/",
    element: <App />,
    children: [
      {path: "community", element: <Community />},
      {path: "conversations", element: <Conversations />},
      {path: "status", element: <Status />},
      {path: "calls", element: <Calls />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
