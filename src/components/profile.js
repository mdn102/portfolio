import React from "react";
import "./profile.css";
import Img from "gatsby-image";
import Hobbies from "./hobbies";

const Profile = ({ profileImg, hobbyImgs }) => {
  return (
    <section id="about" className="section">
      <h2 className="text-center">PROFILE</h2>
      <div className="section-content">
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1 ">
            <Img
              title="profile image"
              alt="profile image"
              sizes={profileImg.sizes}
              className="img-responsive center-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <h4>MY BACKGROUND</h4>
            <p>
              My foundation is senior experiences, results-oriented, high-energy,
              hands-on professional and a successful record of accomplishments in
              the hardware computer sector, medical device, and aerospace industries.
            </p>
            <p>
              I am switching my career as software engineer experiences with the latest
              front-end and back-end programming languages, tools, and methodologies. I
              also gained skills myself with solid understanding in algorithm, computer
              science and software development.
            </p>
            <h4>MY GOAL</h4>
            <p>
              Become a developer to contribute the applications that empower and improve
              the lives. I believe that we can make a change the world by building even
              the small products or the scrash idea that empower communities.
              Yes, let's make the world better!
            </p>
            <h4>MY HOBBIES</h4>
            <p>
              Coding is not only the job, it’s also my passionate and an essential part
              of my life.Practicing coding have been daily habit of my life, I believe
              that the future will be created from what I am doing today.
            </p>
            <p>
              On my free time, I attend meetups, listen to engineering podcasts,
              read tech blogs, and take online courses to help me become a
              better developer for the people around me.
            </p>
            <Hobbies icons={hobbyImgs} />
          </div>
        </div>
        <div className="row">
          <div className=" col-12 col-md-4 col-lg-4 offset-lg-1">
            <div className="box">
              <h5>Toolbox</h5>
              <p>
                <b>Languages and Frameworks:</b> Javascript, HTML5, CSS3, React,
                Bootstrap, Node, Express, MongoDB, Rails, Postgres, Jest, SASS
                <br />
                <b>IDE:</b> Microsoft VS Code
                <br />
                <b>VCS:</b> Git/Github
                <br />
                <b>PMS:</b> Trello
                <br />
                <b>Debugger:</b> Chrome DevTools
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6 ">
            <div className="box">
              <h5>Learning</h5>
              <p>
                Currently: Accessibility, Web Performance
                <br /> On the radar: GraphQL, Typescript, Gatsby, NextJs, Python
              </p>
            </div>
          </div>
          <div className="col-lg-4  col-md-4 col-6 ">
            <div className="box">
              <h5>Hacking on</h5>
              <p>
                {" "}
                1) Contributing fulltime to NerdWallet. We're on a mission to
                provide clarity for all of life’s financial decisions.
                <br />
                2) Making this website more accessible.
                <br />
                3) Brainstorming a new technical blog post to write.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
