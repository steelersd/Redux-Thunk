import React from "react";
import styled, { css } from "styled-components";
import Button from "../styles/Button";
import Row from "../styles/Row";
import Section from "../styles/Section";
import PropTypes from "prop-types";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input {border: 1px solid #555};
  textarea {border: 1px solid #555};
`;

const Label = styled.label`
  display:inline-block;
  text-align: left;
  width: 140px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1em;
  font-weight: 400;
`;

const input = css`  padding: 5px;
  margin: 8px 3px;
  width: 250px;
  box-sizing: border-box;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1em;
  font-weight: 300;
`;

const Input = styled.input`
  ${input}
`;
const TextArea = styled.textarea`
  ${input}
`;

const NameForm = props => {
  const rand = val => {
    return new Date().valueOf() + val;
  };

  let {
    updateRandom,
    fetching,
    updateGUIDAjaxThunk,
    handleSubmit
  } = props;

  //     console.log('NameForm')
  //     console.log(props)
  return (
    <Section border={true}>
      <div>
        <Row>
          <Button disabl={fetching} onClick={() => updateGUIDAjaxThunk()}>
            REST Call Thunk
          </Button>
        </Row>
        <Row>
          <Button onClick={updateRandom}>
           Random Number 
          </Button>
        </Row>
        <Row>
          <Button onClick={handleSubmit}>
           Submit 
          </Button>
        </Row>
      </div>
    </Section>
  );
};

NameForm.propTypes = {
  firstName: PropTypes.string
};

NameForm.defaultProps = {
  firstsName: "Adam"
};

export default NameForm;
