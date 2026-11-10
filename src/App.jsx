import { useState } from "react";
import { useEffect } from "react";
import Home from "./screens/home.jsx";
import Load from "./screens/load.jsx";
import Reply from "./screens/contact_reply.jsx";
import Contact from "./screens/contact.jsx";
import Blog from "./screens/blog.jsx";
import { BrowserRouter, Routes,Route,useNavigate} from "react-router-dom";


function Navigation()
{
  const navigate=useNavigate();
  
  return (
    <div>
      {/*Nav buttons */}
      <button onClick={()=> navigate("/")}>Home</button>
       <button onClick={()=> navigate("/load")}>Load</button>
       <button onClick={()=> navigate("/contact_reply")}>Reply</button>
       <button onClick={()=> navigate("/contact")}>Contact</button>
       <button onClick={()=> navigate("/blog")}>Blog</button>

       {/*switch pages*/}
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/load" element={<Load />}/> 
        <Route path="/contact_reply" element={<Reply />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blog" element={<Blog />}/>
        
       </Routes>
    </div>
  );
}

function App()
{
  return 
  (
    <BrowserRouter>
    <Navigation/>
    </BrowserRouter>
  );
}
export default App;