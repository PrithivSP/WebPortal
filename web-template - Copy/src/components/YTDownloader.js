import React, { useEffect, useState } from "react";
import "./style/YTDownloader.css";
import WinTitle from "./subComponent/WinTitle";
import "./ShortCuts";
import axios from "axios";

function YTDownloader({ visibilityP, onClose }) {
  const [data, setData] = useState(null);
  const [ytUrl, setYtUrl] = useState("");
  const [visibility, setVisibility] = useState(visibilityP);

  useEffect(() => {
    setVisibility(visibilityP);
  }, [visibilityP]);
  function handleUrlChange(e) {
    setYtUrl(e.target.value);
  }

  const handleYTDownload = async () => {
    const data = await axios.get(
      `http://localhost:4000/ytdownload?url=${ytUrl}`
    );
    setData(data);
    setYtUrl("");
  };

  function handleCancel() {
    setData(null);
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
          <button onClick={handleYTDownload} className="download-btn">
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
        <br />
        <div>
          {data !== null ? (
            <div>
              <div className="my-4">
                <iframe
                  width="570"
                  height="320"
                  src={`${data.data.url}`}
                  title="video"
                />
              </div>
              <div>
                {data?.data.info.map((formatName, index) => (
                  <div className="formats" key={index}>
                    <a
                      href={formatName.url}
                      target="_blank"
                      download
                      className=" outline-none italic underline"
                    >
                      {formatName.mimeType.split(";")[0] + "  "}
                      {formatName.hasVideo ? formatName.height + "p" : ""}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className=" text-red-700 font-bold mt-10">No download yet</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default YTDownloader;
