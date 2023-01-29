
import React from "react";

export const MediaCard = ({Title,Body,imageUrl}) => (
    
        <>
        
        <div className="MediaCard">
          <h2>
            {Title}
          </h2>
          <p>
          
          {Body}
          </p>
          
       <h5>
         <img width={100} src={imageUrl} alt=""/>
         </h5>

        </div>
    
    
        </>
      
      )
      
     

export default MediaCard;