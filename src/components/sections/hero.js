import React from "react"
import { TwoColumnGrid } from "../common"
import HeroImage from "../../images/ic_profile.png"

const Hero = () => {
  return (
    <>
      <TwoColumnGrid>
        <h1>
          Hello, I am <span>Minh Nguyen.</span> <br /> I'm a{" "}
          <span>Web Developer</span> based in Seattle, WA.
        </h1>
        <img src={HeroImage} alt="coding" />
      </TwoColumnGrid>
    </>
  )
}

export default Hero
