import React from 'react'
import "./WindowsDiv.css"

function WindowsDiv({divVisibility}) {
  return (
    <div className={`windows-wrapper-${divVisibility?"active":"inactive"}`}></div>
  )
}

export default WindowsDiv