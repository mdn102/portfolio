import React from "react"
import styled from "@emotion/styled"
import { TwoColumnGrid } from "../common"
import SkillsImage from "../../images/skills.svg"
const Skills = () => {
  return (
    <>
      <h3
      >
        Tools I've been using
      </h3>
      <TwoColumnGrid
      >
        <SkillsList>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Styled Components</li>
          <li>Gatsby</li>
          <li>CSS Modules</li>
          <li>Firebase</li>
          <li>GraphQL</li>
          <li>Npm</li>
          <li>Git</li>
          <li>Bash</li>
        </SkillsList>
        <img src={SkillsImage} alt="skills" />
      </TwoColumnGrid>
    </>
  )
}

export default Skills

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
  white-space: nowrap;
  font-size: 110%;

  > li {
    list-style: none;
    position: relative;
    ::before {
      content: "";
      width: 10px;
      height: 10px;
      background-color: var(--textNormal);
      position: absolute;
      left: -10px;
      border-radius: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`
