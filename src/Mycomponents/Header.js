import React from 'react'
import card from './card.jpg';

export default function Header() {
  return (
    <div className="App">
    <nav>
    <img src={card} className="logo" alt="logo" /> 
    <div className ="menu">

             <ul>
             
                <li>    <a href="#">ABOUT </a></li>
                  <li><a href="#">CARD.USE</a>
                  <div class="menu-1">
                          <ul>
                              <li><a href="#"></a> </li>
                              <li> <a href="#"></a>Option</li>
                              <li> <a href="#"></a>Option</li>
                              <li> <a href="#"></a>Option</li>
                          </ul>
                      </div>
                  </li>
                  
                  </ul> 
              </div>
              <form>

<input type="text" id="search" placeholder="Enter for Search"/>
<button id='button'>Search</button>
</form>
</nav>
  </div>

  
);
  
}

