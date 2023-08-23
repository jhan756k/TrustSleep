import React from "react";
import "../Styles/Setting.css";
import { useState, useEffect } from "react";

const Setting = () => {
  const [sleeptime, setSleeptime] = useState(0);

  const uploadSound = () => {
    const file = document.querySelector("#file");
    const formData = new FormData();
    formData.append("file", file.files[0]);
  };

  return (
    <div className="allcont">
      <div className="maincontainer">
        <div className="minititlediv">알람 설정</div>
        <div className="mainbuttondiv">
          <div className="sleeptimediv">
            <div className="sleeptime">잠에 드는 시간:</div>
            <input
              type="number"
              className="sleeptimeinput"
              name="sleept"
              pattern="[0-9]*"
            />
          </div>
          <div className="smalltextdiv">
            *평균적으로 잠에 드는데까지 걸리는 시간을 적어주세요
          </div>
        </div>
        <div className="sleeptimediv">
          <div className="sleeptime">기상 시간:</div>
          <input
            type="time"
            className="waketimeinput"
            onkeydown="return false"
            name="waket"
          />
        </div>
        <div className="spacing"></div>
        <div className="sleeptimediv">
          <div className="sleeptime">알람음 설정:</div>
          <button className="fwt" onClick={uploadSound}>
            업로드
          </button>
        </div>
        <div className="mb">저장</div>
        <div className="copyrightdiv">
          © Copyright by BM Entertainment, KMLA
        </div>
      </div>
    </div>
  );
};

export default Setting;
