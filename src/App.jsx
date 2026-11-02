import { useState } from "react";
import { useEffect } from "react";
import Home from "./screens/home.jsx";
import Load from "./screens/load.jsx";
import Reply from "./screens/contact_reply.jsx";
import Contact from "./screens/contact.jsx";
import Blog from "./screens/blog.jsx";

function App()
{
  const[screen,setScreen]=useState("home");
  //use useeffect 
 

  useEffect(()=>{ 
    if (screen!="home") return;
    const timer=setTimeout(()=>{setScreen("load");},2000);
  return()=>clearTimeout(timer);  
},[screen]);

  //load to blog
  useEffect(()=> {if(screen=="load") return;
    const timer=setTimeout(() => { setScreen("blog")
    }, 3000);
    return () => clearTimeout(timer);
  },[screen]);

  return (
    <div>
      {/*nav buttons*/}
      <button onClick={()=>setScreen("home")}>Home</button>
      <button onClick={()=> setScreen("load")}>Load</button>
      <button onClick={()=> setScreen("contact_reply")}>Reply</button>
      <button onClick={()=> setScreen("contact")}>Contact</button>
      <button onClick={()=>setScreen("blog")}>Blog</button>

      {/*switch screens*/}
      {screen === "home" && <Home />}
      {screen === "load" && <Load />}
      {screen === "contact_reply" && <Reply />}
      {screen === "contact" && <Contact />}
      {screen === "blog" && <Blog />}

    </div>

  );
}
export default App;