import React from "react"
import { TwoColumnGrid, Button } from "../common"
import AboutImage from "../../images/about.svg"
import { Link } from "gatsby"

const about = () => {
  return (
    <>
      <h3>Get to know about me</h3>
      <TwoColumnGrid>
        <img src={AboutImage} alt="about" />
        <div>
          <p>
            I am a senior computer enigneer with extremely extensise experiences in hardware computer sector, areospace, and medical device. From the last years,
            I switched to software and have been developing Web Applications using latest modern of Front-End, Back-End, and Full-Stack technologies.
          </p>
          <p>Let's bring your ideas to life!</p>
          <Link to="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </TwoColumnGrid>
    </>
  )
}

export default about
