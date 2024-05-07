import React, { useEffect, useState } from "react";
import "./style/YTDownloader.css";
import WinTitle from "./subComponent/WinTitle";
import "./ShortCuts";
// const fs = require("fs");
// const ytdl = require("ytdl-core");

function YTDownloader({ visibilityP, onClose }) {
  const [ytUrl, setYtUrl] = useState("");
  const [visibility, setVisibility] = useState(visibilityP);
  useEffect(() => {
    setVisibility(visibilityP);
  }, [visibilityP]);
  function handleUrlChange(e) {
    setYtUrl(e.target.value);
  }

  function handleYtDownload() {
    // ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ").pipe(
    //   fs.createWriteStream("video.mp4")
    // );
  }

  function handleCancel() {
    onClose();
  }

  return (
    <div className={`ytD-wrapper ${!visibility ? "hidden" : ""}`}>
      <WinTitle
        title={"Youtube Video Downloader.exe"}
        onCancel={handleCancel}
      />
      <div className="content">
        <div className="url">
          <h3 className="title">URL:</h3>
          <input
            className="input"
            type="text"
            value={ytUrl}
            onChange={(e) => handleUrlChange(e)}
          />
          <button onClick={handleYtDownload} className="download-btn">
            :D
          </button>
        </div>
        <div className="intro">
          <hr />
          To download a YT video please paste the link in the below box.
        </div>
        <div className="dis">
          Note: Users are accountable for adhering to the terms, conditions, and
          copyright regulations set by the platforms they utilize to obtain
          content.
        </div>
      </div>
    </div>
  );
}

export default YTDownloader;
