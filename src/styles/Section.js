import React from 'react'
import styled from 'styled-components';

const border = ({border}) => {
  return border ? `1px solid black` : ``
}

const Section = styled.div`
  margin: auto;
  width: 90%;
  border: ${border};
  padding: 10px;

  @media (min-width: 768px) {
    width: 70%
  }
`
Section.displayName = 'Section'

export default Section