import React from "react"
import styled from "@emotion/styled"
import useDarkMode from 'use-dark-mode';

const Toggle = () => {
  const darkMode = useDarkMode(false);
  const CheckboxWrapper = styled.span`
    position: relative;
    display: flex;
    align-items: center;
    border: none;
    margin: 0 1vw;

    @media (max-width: 768px) {
      margin: 10% 1vh; 
    }
  `
  const CheckboxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 48px;
    height: 16px;
    border-radius: 15px;
    background: var(--bgCode);
    cursor: pointer;
    
    ::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 2px;
      background: var(--textNormal);
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    }

  `
  const Checkbox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 48px;
    height: 16px;
    :checked + ${CheckboxLabel} {
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin-left: 33px;
      }
    }
  `

  return (
    <CheckboxWrapper>
      <Checkbox
        type="checkbox"
        checked={darkMode.value}
        onChange={darkMode.toggle}
        id="dmcheck"
        aria-label="Toggle darkmode"
      />
      <CheckboxLabel htmlFor="dmcheck" />
    </CheckboxWrapper>
  )
}

export default Toggle
