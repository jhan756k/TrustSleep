import React from "react";
import "../Styles/Mainpage.css";

const Mainpage = () => {
  return (
    <div className="allcont">
      <div className="maincontainer">
        <div className="titlediv">
          Trust and Sleep
          <br />
          유상현 설빙 마싯다
          </div>
        <div className="mainbuttondiv">
          <a href="/alarm" className="mainbwrap1">
            <button
              className="mainbutton"
              onClick="window.location.href='http://programminghead.com';"
            >
              알람 설정
            </button>
          </a>
          <a href="/sleep" className="mainbwrap2">
            <button className="mainbutton">불면증 케어</button>
          </a>
        </div>
        <button className="zwrapbut">
          <div className="zzz">
            <img src="images/zzz.png" alt="" className="zimg" />
            <div className="ztext">Zzz...</div>
          </div>
        </button>
        <div className="copyrightdiv">
          © Copyright by BM Entertainment, KMLA
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
