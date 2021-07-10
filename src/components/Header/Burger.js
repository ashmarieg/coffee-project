// import React from 'react'
import React, { useState }from 'react'

function Burger() {
  const [showMenu, setShowMenu] = useState(false);
  
  let menu
  if(showMenu){
    menu = <div className="Burger" onClick={() => setShowMenu(false)}>
      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Sign In</li>
        </ul>
    </div>
  }
  
  return (
    <div className="burger">
      <div
        className={showMenu ? "active container" : "container"}
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 200 200"
        
        >
          <g stroke-width="6.5" stroke-linecap="round">
            <path
              d="M72 82.286h28.75"
              fill="#009100"
              fill-rule="evenodd"
              stroke="#000"
            />
            <path
              d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
              fill="none"
              stroke="#000"
            />
            <path
              d="M72 125.143h28.75"
              fill="#009100"
              fill-rule="evenodd"
              stroke="#000"
            />
            <path
              d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
              fill="none"
              stroke="#000"
            />
            <path
              d="M100.75 82.286h28.75"
              fill="#009100"
              fill-rule="evenodd"
              stroke="#000"
            />
            <path
              d="M100.75 125.143h28.75"
              fill="#009100"
              fill-rule="evenodd"
              stroke="#000"
            />
          </g>
        </svg>
      </div>
      <div >
        {menu}
        
        
      
      </div>
      
    </div>
  )
}

export default Burger
