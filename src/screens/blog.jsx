import "./blog.css"
import shape from "../Images/rect4.png"

function Blog()
{
    return(
    <div className="app">  
                    <div className="screen"> 
                    <div className="blogsquare"></div>
                    <div className="blogImg"></div>
                    <div className="Heading">Blog heading</div>
                    <div className="Paragraph">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         </div>
                    <img src={shape} className="shape"></img>
                    </div>  
    </div>
    );

}
export default Blog;
