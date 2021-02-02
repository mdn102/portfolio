import React from 'react';
import Scrollchor from "react-scrollchor";
import Img from "gatsby-image";
// import "./cover.css";
// import resume from "../static/resume";


const Cover = ({ coverImg }) => {
  return (
    <div id="#top" className="cover animated" >
      <Img
        title="cover image"
        alt="Full-Stack Background"
        sizes={coverImg.sizes}
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="overlay" ></div>
      <div className="center">
        <h1 className="name">
          <b>HI, I'M MINH NGUYEN</b>
        </h1>
        <button className="greetings">
          <a href="https://drive.google.com/file/d/15PhQve11lXKEKGegDde9KR9_M-RL9_iO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
        </button>
      </div>
      <div className="arrow animated bounceInDown">
        <Scrollchor to="#about" className="btn" animate={{ duration: 500 }}>
          <i className="fa fa-chevron-down" />
        </Scrollchor>
      </div>
    </div>
  );
};
export default Cover;
