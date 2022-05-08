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
  const [value1, setvalue1] = useState(400);

  useEffect(() => {
    setTimeout(() => {
      function ok() {
        if (value === 100) {
          setvalue(500);
        } else {
          setvalue(value - 50);
        }
        if (value1 === 390) {
          setvalue1(400);
        } else {
          setvalue1(value1 - 10);
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
        top: "30%",
        background: "gainsboro",
      }}
    >
      <div style={{ marginTop: "75px" }}>
        <img
          className="about_img_main"
          height={value}
          width={value}
          src={my_pic}
          alt="images not found"

        />
      </div>
      <div className="social" style={{ height: `${value1}px` }}>
        <div className="about">
          <a href="https://hoqueaktarul.github.io/">
            <img
              className="about_img"
              src={website_logo}
              height="45px"
              width="45px"
              alt="images not found"

            />
          </a>
        </div>
        <div className="about">
          <a href="https://www.facebook.com/aktarul.hoque.9275439/">
            <img
              className="about_img"
              src={facebook_logo}
              height="45px"
              width="45px"
              alt="images not found"

            />
          </a>
        </div>
        <div className="about">
          <a href="https://twitter.com/home">
            <img
              className="about_img"
              src={twitter_logo}
              height="45px"
              width="45px"
              alt="images not found"

            />
          </a>
        </div>
        <div className="about">
          <a href="https://github.com/hoqueaktarul">
            <img
              className="about_img"
              src={gitgub_logo}
              height="45px"
              width="45px"
              alt="images not found"

            />
          </a>
        </div>
        <div className="about">
          <a href="https://www.linkedin.com/in/aktarul-hoque-7707a5200/">
            <img
              className="about_img"
              src={linkedin_logo}
              height="45px"
              width="45px"
              alt="images not found"

            />
          </a>
        </div>
      </div>
      <div className="social1" style={{ height: `${value1}px` }}>
        <div className="about">
          <a href="https://hoqueaktarul.github.io/">
            <img
              className="about_img"
              src={website_logo}
              height="45px"
              width="45px"
              alt="images not found"

            />
          </a>
        </div>
        <div className="about">
          <a href="https://www.facebook.com/aktarul.hoque.9275439/">
            <img
              className="about_img"
              src={facebook_logo}
              height="45px"
              width="45px"
              alt="images not found"

            />
          </a>
        </div>
        <div className="about">
          <a href="https://twitter.com/home">
            <img
              className="about_img"
              src={twitter_logo}
              height="45px"
              width="45px"
              alt="images not found"

            />
          </a>
        </div>
        <div className="about">
          <a href="https://github.com/hoqueaktarul">
            <img
              className="about_img"
              src={gitgub_logo}
              height="45px"
              width="45px"
              alt="images not found"

            />
          </a>
        </div>
        <div className="about">
          <a href="https://www.linkedin.com/in/aktarul-hoque-7707a5200/">
            <img
              className="about_img"
              src={linkedin_logo}
              height="45px"
              width="45px"
              alt="images not found"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
