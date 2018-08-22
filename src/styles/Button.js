import React from 'react'
import styled from 'styled-components';

const backgroundColor = '#2db9ee'
const textColor = '#f7f1f1'
const f = false

const prop = (key, val) => (props) => props[key] ? props[key] : val


const Button = styled.button.attrs({
  type: 'button',
//   disabled: props => props.dis ? true : false
})`
	color: #fff;
  background-color: ${prop('color', backgroundColor)};
	border: none;
  color: ${prop('text-color', textColor)};
	padding: 5px 20px;
	text-align: center;
	display: inline-block;
	margin: .5em .5em;
	transition-duration: 0.4s;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
  font-size: 1em;
  font-weight: 300;

	:hover {
    background-color: ${prop('color', backgroundColor)};
    opacity:0.8;
	}

	:hover {
    color: ${prop('text-color', textColor)};
	}

  :disabled {
    opacity: 0.60; 
    cursor: not-allowed;
  }
`
export default Button
