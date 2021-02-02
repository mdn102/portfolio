import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faMedium, faDev } from '@fortawesome/free-brands-svg-icons'
import { StyledLink } from '../common'
import styled from '@emotion/styled'


const Social = () => {
  const SocialWrap = styled.div`
        margin-bottom: 0.5rem;
        a{
            font-size: 1.5rem;
            margin-right: 1rem;
            color: var(--textNormal);
            transition: color .4s;

            :hover {
                color: var(--textLink);
            }
        }
    `

  return (
    <SocialWrap>
      <StyledLink to='/contact' aria-label='Contact'> <FontAwesomeIcon icon={faEnvelopeSquare} /></StyledLink>
      <a href="https://github.com/minhd-nguyen" rel="noopener noreferrer" aria-label='Github' target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
      <a href="https://www.linkedin.com/in/minhd-nguyen" rel="noopener noreferrer" aria-label='LinkedIn' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://www.twitter.com/@minh_dnguyen" rel="noopener noreferrer" aria-label='Twitter' target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
    </SocialWrap>
  )
}

export default Social