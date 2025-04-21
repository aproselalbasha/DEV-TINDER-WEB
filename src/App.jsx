import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appstore from "./utils/appstore"
import Feed from "./components/Feed"
import Connections from "./components/connections"
import Request from "./components/Request"

function App() {
 

  return (
    
      <div>
        <Provider store={appstore}>
        <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div><Body/></div>}>
          
          <Route index element={<div><Feed/></div>}/>
          
          <Route path="/login" element={<div><Login/></div>}/>
          <Route path="/profile" element={<div><Profile/></div>}/>
          <Route path="/connections" element={<div><Connections/></div>}/>
          <Route path="/request" element={<div><Request/></div>}/>
          </Route>
        </Routes>
        
        
         </BrowserRouter>
         </Provider>
      </div>
      
    
  )
}

export default App
