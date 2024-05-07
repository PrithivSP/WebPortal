import React from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { FaRegWindowMaximize } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
import './style/WinTitle.css'

function WinTitle({title, onCancel}) {

    function handleCnacel() {
        onCancel();
    }

  return (
    <div className="title-wrapper">
            <p className='title'>{title}</p>
            <div className="btn-group">
                <div className="minimize">
                    <button>
                    <AiOutlineMinus />
                    </button>
                </div>
                
                <div className="maximize">
                    <button>
                    <FaRegWindowMaximize />
                    </button>
                </div>
                
                <div className="cancel">
                    <button>
                    <MdCancelPresentation onClick={handleCnacel}/>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default WinTitle