import React from "react";
import styled, { css } from "styled-components";
import Button from "../styles/Button";
import Row from "../styles/Row";
import Section from "../styles/Section";
import PropTypes from "prop-types";

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
