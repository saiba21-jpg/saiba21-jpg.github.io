import logo from "../Images/logo.png"
import "./home.css"

//360px – 430px width phone width 

function Home()
{
  return(
      <div className="app">  
        <div className="screen"> 
           <div className="circle1"></div>
           <div className="circle2"></div>
          <img src={logo} alt="MVM Logo" className="logo"/>
        </div>
      </div>
  );
}

export default Home;