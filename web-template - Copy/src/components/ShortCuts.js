import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { TfiInstagram } from "react-icons/tfi";
import { FaRedditAlien } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import "./ShortCuts.css";
import YTDownloader from "./YTDownloader";

export default function ShortCuts() {

  let [visibilityYtD, setVisibilityYtD] = useState(false);

  let handleVisibilityYtD = () => {
    setVisibilityYtD(!visibilityYtD);
  }
  return (
    <div className="shortcut-conts">
      <ul>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="n">
            <FaFacebookSquare className="icon-fb" />
          </a>
          <p>Facebook</p>
        </li>
        <li>
          <a href="https://web.whatsapp.com/" target="_blank">
            <PiWhatsappLogoDuotone className="icon-wa" />
          </a>
          <p>Whatsapp</p>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <TfiInstagram className="icon-insta" />
          </a>
          <p>Instagram</p>
        </li>
        <li>
          <a href="https://www.reddit.com/" target="_blank">
            <FaRedditAlien className="icon-reddit" />
          </a>
          <p>Reddit</p>
        </li>

        <li>
            <TfiYoutube className="icon-yt-download" onClick={handleVisibilityYtD}/>
          
          <p>YTDownloader</p>
        </li>
      </ul>
      <div className="ytD-cont">
        { <YTDownloader onClick={handleVisibilityYtD} onClose={handleVisibilityYtD} visibilityP={visibilityYtD}/>} 
      </div>
    </div>
  );
}