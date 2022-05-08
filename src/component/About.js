import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import website_logo from "../images/website_logo.png";
import facebook_logo from "../images/facebook_logo.png";
import twitter_logo from "../images/twitter_logo.png";
import gitgub_logo from "../images/github_logo.png";
import linkedin_logo from "../images/linkedin_logo.png";
import my_pic from "../images/my_pic.jpg";
import { useEffect, useState } from "react";

export default function About() {
  const [value, setvalue] = useState(500);
  useEffect(() => {
    setTimeout(() => {
      function ok() {
        if (value === 50) {
          setvalue(500);
        } else {
          setvalue(value - 50);
        }
      }
      ok();
    }, 1000);
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        top:"30%",
        background: "gainsboro",
      }}
    >
      <div style={{ marginTop: "75px" }}>
        <img height={value} width="70%" src={my_pic} />
      </div>
      <div className="social" style={{}}>
        <div className="about">
          <img
            className="about_img"
            src={website_logo}
            height="45px"
            width="45px"
          />
        </div>
        <div className="about">
          <img
            className="about_img"
            src={facebook_logo}
            height="45px"
            width="45px"
          />
        </div>
        <div className="about">
          <img
            className="about_img"
            src={twitter_logo}
            height="45px"
            width="45px"
          />
        </div>
        <div className="about">

        <img
          className="about_img"
          src={gitgub_logo}
          height="45px"
          width="45px"
        />
        </div>
        <div className="about">

        <img
          className="about_img"
          src={linkedin_logo}
          height="45px"
          width="45px"
        />
        </div>

      </div>
      <div className="social1" style={{}}>
        <div className="about">
          <img
            className="about_img"
            src={website_logo}
            height="45px"
            width="45px"
          />
        </div>
        <div className="about">
          <img
            className="about_img"
            src={facebook_logo}
            height="45px"
            width="45px"
          />
        </div>
        <div className="about">
          <img
            className="about_img"
            src={twitter_logo}
            height="45px"
            width="45px"
          />
        </div>
        <div className="about">

        <img
          className="about_img"
          src={gitgub_logo}
          height="45px"
          width="45px"
        />
        </div>
        <div className="about">

        <img
          className="about_img"
          src={linkedin_logo}
          height="45px"
          width="45px"
        />
        </div>

      </div>
    </div>
  );
}
