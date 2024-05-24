import React from 'react'
import "./WindowsDiv.css"
import { MdOutlineHistory } from "react-icons/md";
import { LiaArrowRightSolid } from "react-icons/lia";

function WindowsDiv({divVisibility}) {
  return (
    <div className={`windows-wrapper-${divVisibility?"active":"inactive"} windows-wrapper`}>
      <div className='left'>
        <p>Windows95</p>
      </div>
      <div className="right">
        <ul className="program-lists">
          <li>
          <span><MdOutlineHistory /></span>
              History
          <span className='arrow'><LiaArrowRightSolid /></span>
          </li>
          <li>
              Home
              <span className='arrow'><LiaArrowRightSolid /></span>
          </li>
          <li>
              About Us
              <span className='arrow'><LiaArrowRightSolid /></span>
          </li>
          <li>
            Settings
          </li>
          {/* <li>
            Find
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default WindowsDiv