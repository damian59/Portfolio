

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/header.css'




export const Header = () => {
  return (
    <div className="cta">
    
    <div className='skills'>
    <h3>the skills i have</h3>
      <h1>Skills</h1>
      <Carousel >
                <div>
                    <img src="skills/css.png" />
                    
                </div>
                <div>
                    <img src="skills/html.png" />
                    
                </div>
                <div>
                    <img src="skills/js.png" />
                    
                </div>
                <div>
                    <img src="skills/mongo.png" />
                    
                </div>
                <div>
                    <img src="skills/mysql.png" />
                    
                </div>
                
                <div>
                    <img src='skills/node.png' />
                    
                </div>
                <div>
                    <img src="skills/react.png" />
                    
                </div>
            </Carousel>
        
    </div>
    
   

  </div>
  )
}
