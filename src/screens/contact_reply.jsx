import "./contact_reply.css"
import rect from "../Images/rect.png"
import rect2 from "../Images/rect2.png"

function Reply()
{
    return(
    <div className="app">  
                <div className="screen"> 
                   <img src={rect} className="rect"></img> 
                   <img src={rect2} className="rect2"></img> 
                    <div className="text1">We'll get back to you as soon as we can !</div>
                </div>  
    </div>
    );
}

export default Reply;