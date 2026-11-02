import "./contact.css"
import shape from "../Images/rect4.png"
import {useId, useState} from 'react';

function Contact()
{
    function handleSubmit(e)
    {
        //stop browser reloading page 
        e.preventDefault();

        const data={name:Name, email:Email,phone:Phone};
        console.log(data);

        //fetch request
        //change some api to firebase backend 
       fetch("/some-api",{method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)
    })
    .then(response=> response.json())
    .then(result=> {console.log("Success:",result);

    })
    .catch(error=>{console.log("Error:",error);
    });   
    }

    const [Name,setName]=useState('');
    const [Email,setEmail]=useState('')
    const [Phone,setPhone]=useState('');

    return(
        <form onSubmit={handleSubmit}>
        <div className="app">  
            <div className="screen"> 
            <img src={shape} className="shape"></img>
            <div className="text">Contact Us</div>
            <div className="questions">
                <p>Name</p>
                <label><input name="name" value={Name} onChange={e=>setName(e.target.value)} placeholder="Enter your name:"/></label>
                <p>Email</p>
                <label><input name="email" value={Email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email:"/></label>
                <p>Phone</p>
                <label><input name="phone" value={Phone} onChange={e=>setPhone(e.target.value)} placeholder="Enter your phone number:"/></label>
                <p>Additional Information</p>
                <textarea name="additionalInfo" rows={6} cols={50} />
                <button type='Submit'>Submit</button>
            </div>
            </div>  
        </div>
        </form>
    );
}
export default Contact;

