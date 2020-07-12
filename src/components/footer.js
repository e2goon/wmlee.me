import React from "react"
import styled from "styled-components"

const Footer = () => (
  <StyledFooter>
    <address>2020 &copy; wmlee.dev</address>
  </StyledFooter>
)
export default Footer

const StyledFooter = styled.footer`
  position: sticky;
  bottom: 0;
  margin: 0 auto;
  padding: 2rem 0;
  color: rgba(0, 0, 0, 1);
  font-size: 80%;
  z-index: -1;
  a {
    text-decoration: none;
  }
`
