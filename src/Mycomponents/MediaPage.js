import React from 'react';
//import ReactDOM from "react-dom";
import MediaCard from './MediaCard';


export function MediaPage() {

  return (
  
       <div>
      
      <MediaCard 
   
      Title="The bus"
      Body="The bus is used for transport"
      imageUrl= 'https://media.gettyimages.com/id/136521748/photo/bus.jpg?s=612x612&w=gi&k=20&c=kvCDrxgMqJmY2AiUMqH2TW7nApUNmXyvD-cuWZE7dCs='
    
    />
    
      <MediaCard
      Title="The Car"
      Body="The Car is an Expensive Transport"
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbqzTGYPB9lPyHJnEoBiWcmjlqdz14ikj4uYCw32Rkg&s"
    />
     <MediaCard
      Title="The Walk"
      Body="The Walk is the Good Exercise For Health"
      imageUrl="https://images.pexels.com/photos/1149923/pexels-photo-1149923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
      </div>
   
  )
}

