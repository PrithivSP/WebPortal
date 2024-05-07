import React, { useEffect, useState } from "react";
import "./style/IGDownloader.css";
import WinTitle from "./subComponent/WinTitle";
import "./ShortCuts";
import axios from "axios";

function IGDownloader({ visibilityP, onClose }) {
  const [data, setData] = useState(null);
  const [igUrl, setIgUrl] = useState("");
  const [visibility, setVisibility] = useState(visibilityP);

  useEffect(() => {
    setVisibility(visibilityP);
  }, [visibilityP]);
  function handleUrlChange(e) {
    setIgUrl(e.target.value);
  }

  const handleIGDownload = async () => {
    const data = await axios.get(
      `http://localhost:4000/igdownload?url=${igUrl}`
    );
    setData(data);
    setIgUrl("");
  };

  function handleCancel() {
    setData(null);
    onClose();
  }

  return (
    <div className={`igD-wrapper ${!visibility ? "hidden" : ""}`}>
      <WinTitle
        title={"Instagram Video Downloader.exe"}
        onCancel={handleCancel}
      />
      <div className="content">
        <div className="url">
          <h3 className="title">URL:</h3>
          <input
            className="input"
            type="text"
            value={igUrl}
            onChange={(e) => handleUrlChange(e)}
          />
          <button onClick={handleIGDownload} className="download-btn">
            :D
          </button>
        </div>
        <div className="intro">
          <hr />
          To download a IG post please paste the link in the below box.
        </div>
        <div className="dis">
          Note: Users are accountable for adhering to the terms, conditions, and
          copyright regulations set by the platforms they utilize to obtain
          content.
        </div>
        <br />
      </div>
    </div>
  );
}

export default IGDownloader;
