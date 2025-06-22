import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useLocation, useParams } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import MiddleSections from './components/MiddleSections.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<MiddleSections/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"project",
      element:<Projects/>
    },
  ]

}])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
